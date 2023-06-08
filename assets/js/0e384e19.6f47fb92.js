"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i=void 0,s={unversionedId:"intro",id:"intro",title:"intro",description:"This is a living document and is susceptible to changes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/opbnb-docs/docs/intro",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",next:{title:"Getting Started",permalink:"/opbnb-docs/docs/for-developers/getting-started"}},c={},l=[{value:"Architecture of opBNB",id:"architecture-of-opbnb",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("h1",{id:"why-opbnb"},"Why opBNB"),(0,r.kt)("p",null,"Large-scale Web3 applications like games, social networks, the metaverse, and high-frequency trading face significant challenges when built directly on Layer 1 chains. Networks like BNB Smart Chain, Ethereum, and Polygon were not designed to handle the high transaction volumes and intensive daily active users of these applications. For example, a game like Crypto Blades on BSC with 300K daily active users and 18 million transactions per day can overload the BNB Smart Chain, leading to unacceptable gas fees and network responsiveness.\nThe gas fees of these Layer 1 chains are still too expensive for most games and applications, which usually prefer low or no fees. A single game with 1 million daily active users could spend thousands of BNB on gas fees during peak periods. Layer 2 scaling solutions built on top of Layer 1 chains offer a solution. They can provide high throughput beyond Layer 1 constraints. The opBNB network is built on OP Stack and designed for over 4,000 TPS and gas fees under $0.005 on average for transfer transactions.\nBy offloading transaction processing and resource usage to Layer 2 while still securely posting data to the underlying BNB Smart Chain, applications gain major throughput benefits without sacrificing decentralisation or composability. Layer 2 solutions are suitable for applications where scale and user experience are crucial, such as games, social networks, the metaverse, and high-frequency trading. "),(0,r.kt)("h1",{id:"opbnb---high-performance-layer-2-solution"},"opBNB - High-performance layer 2 solution"),(0,r.kt)("p",null,"The opBNB network is a Layer 2 scaling solution built on top of the BNB Smart Chain. It works by offloading transaction processing and resource usage from the BNB Smart Chain, while still posting data to the underlying mainnet. Users interact with the opBNB network by depositing funds from BSC and using applications and contracts on opBNB. Sequencers then aggregate transactions, compute state transitions and submit them to the rollup contract on BSC. Provers generate cryptographic proofs that prove the validity of these state transitions, and Verifiers check the proofs to verify the opBNB state is correct. At its core, opBNB allows users to deposit and withdraw funds, use smart contracts, and view network data with high throughput and low fees. By leveraging Layer 2, opBNB is able to scale beyond the constraints of the BNB Smart Chain and provide an improved experience for users."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230601121044423",src:n(83492).Z,width:"2184",height:"868"})),(0,r.kt)("h2",{id:"architecture-of-opbnb"},"Architecture of opBNB"),(0,r.kt)("p",null,"The opBNB is a layer 2 scaling solution built on top of BSC (a layer 1 blockchain). It processes transactions off-chain but posts transaction data on-chain, providing scalability as compressed layer 2 transaction data are posted on-chain. It has three main layers: an RPC service layer for interacting with the rollup, an operator interface layer for proposing layer 2 transactions off-chain, and an execution layer for executing transactions and providing an EVM execution environment. "),(0,r.kt)("p",null,"The rollup has a modular design, so the data availability interface and settlement layer can be implemented with different solutions. The data availability layer can be replaced with solutions like Greenfield, Arweave, and others, instead of relying only on BSC. Likewise, the settlement layer can be replaced with other EVM-compatible chains besides BSC, such as the Ethereum mainnet. "),(0,r.kt)("p",null,"The rollup is secured by its settlement chain as transaction data is posted on-chain, benefits from its consensus, and uses its data availability solutions. It is decentralized and permissionless. The rollup provides faster and cheaper transactions than BSC while still being secured."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230605092452839",src:n(16895).Z,width:"1452",height:"556"})))}d.isMDXComponent=!0},16895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opBNB-arch-4a52c992733529234d9edf5095f62860.png"},83492:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opBNB-intro-cd83085cebced7b303e9c12fab9685f2.png"}}]);