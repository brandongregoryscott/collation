"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"Intro"},p="What is collation, and why use it?",s={unversionedId:"intro",id:"intro",title:"Intro",description:"Collation is the assembly of written information into a standard order.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/brandongregoryscott/collation/tree/main/documentation/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro"},sidebar:"tutorialSidebar",next:{title:"Options",permalink:"/docs/cli/options"}},c=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Installation Note",id:"installation-note",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-collation-and-why-use-it"},"What is collation, and why use it?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collation is the assembly of written information into a standard order.")),(0,a.kt)("p",null,"In the first chapter of ",(0,a.kt)("a",{parentName:"p",href:"http://cleancoder.com/"},"Uncle Bob"),"'s ",(0,a.kt)("em",{parentName:"p"},"Clean Code"),", he describes a major motivation behind writing clean code is to make it easier to read and update later:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Indeed, the ratio of time spent reading vs. writing is well over 10:1. We are ",(0,a.kt)("em",{parentName:"p"},"constantly")," reading old code as part of the effort to write new code.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Because the ratio is so high, we want the reading of code to be easy, even if it makes the writing harder. Of course there's no way to write code without reading it, so ",(0,a.kt)("em",{parentName:"p"},"making it easy to read actually makes it easier to write."))),(0,a.kt)("p",null,"While there are many factors that play into the health of a codebase, many engineers will agree that consistency of how the code is written and organized is important. The less time you need to ",(0,a.kt)("em",{parentName:"p"},"mentally parse")," what a component or function is doing, the quicker you can move on to making the necessary changes in confidence."),(0,a.kt)("p",null,"That being said, no one enjoys the effort that consistency requires - whether that's formatting the code to 80 lines, using tabs vs. spaces, trailing semicolons, etc. The overhead that this requires to keep up manually isn't worth the effort, which is why tools like ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"ESLint"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"Prettier"))," exist."),(0,a.kt)("p",null,"These tools are great, but there are certain styles of formatting/organization that require additional plugins, complex configuration or aren't supported at all. I wrote ",(0,a.kt)("inlineCode",{parentName:"p"},"collation")," as a tool to fit my personal organization preferences on my projects and maybe you'll find it useful, too."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"collation")," ships with a CLI that can be run manually, in a CI pipeline or pre-commit hook."),(0,a.kt)("p",null,"Get started using ",(0,a.kt)("inlineCode",{parentName:"p"},"collation")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx collation -f <file>")," in a TypeScript project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ls -l\ndrwxr-xr-x  1161 Brandon  staff    37152 Jan  8 10:23 node_modules\n-rw-r--r--     1 Brandon  staff  1870419 Jan  8 10:23 package-lock.json\n-rw-r--r--     1 Brandon  staff     3533 Jan  8 10:23 package.json\ndrwxr-xr-x    21 Brandon  staff      672 Jan  7 20:48 src\n-rw-r--r--     1 Brandon  staff      627 Dec 31 21:04 tsconfig.json\n\nnpx collation -f profile-menu.tsx\n[collation] ERROR alphabetize-interfaces profile-menu.tsx:16 Expected property 'onClose' in 'ProfileMenuProps' (index 0) to be at index 1. ('onClose' should appear alphabetically after 'onAboutDialogClick'.)\n[collation] ERROR alphabetize-interfaces profile-menu.tsx:15 Expected property 'onAboutDialogClick' in 'ProfileMenuProps' (index 1) to be at index 0. ('onAboutDialogClick' should appear alphabetically before 'onClose'.)\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"collation")," will report rule violations and attempt to fix the errors in the file(s)."),(0,a.kt)("p",null,"The interface originally looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/profile-menu.tsx"',title:'"src/components/profile-menu.tsx"'},"interface ProfileMenuProps {\n    onClose: () => void;\n    onAboutDialogClick: () => void;\n}\n")),(0,a.kt)("p",null,"and ",(0,a.kt)("inlineCode",{parentName:"p"},"collation")," updated it to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/components/profile-menu.tsx"',title:'"src/components/profile-menu.tsx"'},"interface ProfileMenuProps {\n    onAboutDialogClick: () => void;\n    onClose: () => void;\n}\n")),(0,a.kt)("p",null,"If you're only checking for rule violations and you don't want to automatically update the code, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"collation")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dry")," flag:\n",(0,a.kt)("inlineCode",{parentName:"p"},"npx collation -f profile-menu.tsx --dry")),(0,a.kt)("p",null,"A full list of CLI options can be found ",(0,a.kt)("a",{parentName:"p",href:"http://google.com"},"here")," or by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag: ",(0,a.kt)("inlineCode",{parentName:"p"},"npx collation --help")),(0,a.kt)("h2",{id:"installation-note"},"Installation Note"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx collation")," can be run from anywhere, but it will do a full install of the package to run if it can't be found in the current ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," project."),(0,a.kt)("p",null,"If you're planning on running it regularly for your project, it is faster to keep it installed as a local development dependency, because ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npx"},(0,a.kt)("inlineCode",{parentName:"a"},"npx"))," will prefer this version and not reinstall on each invocation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev collation\n")))}d.isMDXComponent=!0}}]);