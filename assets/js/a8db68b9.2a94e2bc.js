"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[7113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,b=s["".concat(p,".").concat(m)]||s[m]||u[m]||r;return t?o.createElement(b,i(i({ref:n},c),{},{components:t})):o.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_label:"Run Local Dev Enviroment",description:"Guide to running a local development environment"},i="Running a local development environment",l={unversionedId:"tutorials/running-a-local-development-environment",id:"tutorials/running-a-local-development-environment",title:"Running a local development environment",description:"Guide to running a local development environment",source:"@site/docs/tutorials/running-a-local-development-environment.md",sourceDirName:"tutorials",slug:"/tutorials/running-a-local-development-environment",permalink:"/opbnb-docs/docs/tutorials/running-a-local-development-environment",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/tutorials/running-a-local-development-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Run Local Dev Enviroment",description:"Guide to running a local development environment"},sidebar:"tutorials",previous:{title:"Run Mainnet Node",permalink:"/opbnb-docs/docs/tutorials/running-a-mainnet-node"},next:{title:"Create a Full Stack dapp",permalink:"/opbnb-docs/docs/tutorials/full-stack-dapp"}},p={},d=[{value:"How to do it",id:"how-to-do-it",level:2},{value:"Stop or clean",id:"stop-or-clean",level:2},{value:"Additional Information",id:"additional-information",level:2}],c={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-a-local-development-environment"},"Running a local development environment"),(0,a.kt)("p",null,"Install and start the entire opbnb system locally, including L1 (BNB Smart Chain) and L2 development nodes. Running a local development environment is a great way to test the behavior of your code and contracts."),(0,a.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the following software is installed: golang, node 16+, yarn, make, python2, python3, docker, foundry.",(0,a.kt)("br",{parentName:"p"}),"\n","Tips:"),(0,a.kt)("p",{parentName:"li"},"Install Foundry by following ",(0,a.kt)("a",{parentName:"p",href:"https://getfoundry.sh/"},"the instructions located here"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone opbnb monorepo:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"    git clone git@github.com:bnb-chain/opbnb.git\n    cd opbnb\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," and then running ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn build"),"."),(0,a.kt)("li",{parentName:"ol"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"make devnet-up-deploy")," and wait for the docker container to start.(The first run will be relatively slow because it needs to download the image and deploy the contract, and then it will be fast)"),(0,a.kt)("li",{parentName:"ol"},"Through the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker ps")," command, you can see that 5 containers have been started: ",(0,a.kt)("inlineCode",{parentName:"li"},"ops-bedrock_l1_1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ops-bedrock_l2_1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ops-bedrock_op-node_1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ops-bedrock_op-batcher_1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ops-bedrock_op-proposer_1"))),(0,a.kt)("p",null,"Now L1 is accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8545"),", and L2 is accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9545")),(0,a.kt)("h2",{id:"stop-or-clean"},"Stop or clean"),(0,a.kt)("p",null,"To stop, run (in the root directory of the monorepo) ",(0,a.kt)("inlineCode",{parentName:"p"},"make devnet-down"),".",(0,a.kt)("br",{parentName:"p"}),"\n","To clean everything, run (in the root directory of the monorepo) ",(0,a.kt)("inlineCode",{parentName:"p"},"make devnet-clean"),".\nTo view logs, run ",(0,a.kt)("inlineCode",{parentName:"p"},"make devnet-logs")),(0,a.kt)("h1",{id:"notes"},"Notes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you encounter a ValueError: invalid mode: 'rU' while trying to load binding.gyp error when executing ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn"),", this may be caused by python3 installed on your computer but Npm requires python 2.7. You need to install python 2.7 and configure the environment variable to specify the python version to use: ",(0,a.kt)("inlineCode",{parentName:"li"},"export npm_config_python=/path/to/executable/python"),"."),(0,a.kt)("li",{parentName:"ol"},'When executing for the first time, please be patient if you see the message "wait L1 up...", as the BSC network takes time to initialize.'),(0,a.kt)("li",{parentName:"ol"},'If you encounter an error during the "Deploying contracts" step, please try again as it usually recovers.'),(0,a.kt)("li",{parentName:"ol"},"Do not use the ",(0,a.kt)("inlineCode",{parentName:"li"},"make devnet-up")," command, use the ",(0,a.kt)("inlineCode",{parentName:"li"},"make devnet-up-deploy")," command to start devnet. The ",(0,a.kt)("inlineCode",{parentName:"li"},"devnet-up")," command is not well adapted.")),(0,a.kt)("h2",{id:"additional-information"},"Additional Information"),(0,a.kt)("p",null,"L1 chain ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"714"),".",(0,a.kt)("br",{parentName:"p"}),"\n","L2 chain ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"901"),"."),(0,a.kt)("p",null,"L1 test account:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"address: ",(0,a.kt)("inlineCode",{parentName:"li"},"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")),(0,a.kt)("li",{parentName:"ul"},"Private key: ",(0,a.kt)("inlineCode",{parentName:"li"},"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"))),(0,a.kt)("p",null,"L2 test account:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Address: ",(0,a.kt)("inlineCode",{parentName:"li"},"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")),(0,a.kt)("li",{parentName:"ul"},"Private key: ",(0,a.kt)("inlineCode",{parentName:"li"},"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"))))}s.isMDXComponent=!0}}]);