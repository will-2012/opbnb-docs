"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[1905],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,h=l["".concat(c,".").concat(b)]||l[b]||u[b]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},51728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_label:"Run Mainnet Node",description:"Guide to running opBNB Mainnet Node"},i="Running a Mainnet node",p={unversionedId:"tutorials/running-a-mainnet-node",id:"tutorials/running-a-mainnet-node",title:"Running a Mainnet node",description:"Guide to running opBNB Mainnet Node",source:"@site/docs/tutorials/running-a-mainnet-node.md",sourceDirName:"tutorials",slug:"/tutorials/running-a-mainnet-node",permalink:"/opbnb-docs/docs/tutorials/running-a-mainnet-node",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/tutorials/running-a-mainnet-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Run Mainnet Node",description:"Guide to running opBNB Mainnet Node"},sidebar:"tutorials",previous:{title:"Run Test Node",permalink:"/opbnb-docs/docs/tutorials/running-a-testnet-node"},next:{title:"Run Local Dev Enviroment",permalink:"/opbnb-docs/docs/tutorials/running-a-local-development-environment"}},c={},s=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Build op-node and op-geth",id:"build-op-node-and-op-geth",level:2},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Start components",id:"start-components",level:2},{value:"Check status",id:"check-status",level:2}],d={toc:s};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-mainnet-node"},"Running a Mainnet node"),(0,r.kt)("p",null,"If you're looking to build an app on opBNB you'll need access to an opBNB node.\nYou can simply use the public mainnet node at ",(0,r.kt)("a",{parentName:"p",href:"https://opbnb-mainnet-rpc.bnbchain.org"},"https://opbnb-mainnet-rpc.bnbchain.org")," or run your own."),(0,r.kt)("p",null,"This guide will walk you through setting up your own Mainnet node."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"Replicas must store the transaction history of opBNB and run Geth. For optimal performance, they should be powerful machines (real or virtual) with at least 16 GB RAM and an SSD drive with 500 GB free space (for production network)."),(0,r.kt)("h2",{id:"build-op-node-and-op-geth"},"Build op-node and op-geth"),(0,r.kt)("p",null,"The current version of opBNB Mainnet is ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.1.2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export OPBNB_MAINNET_VERSION=v0.1.2\nexport OPBNB_WORKSPACE=/tmp/opbnb\nmkdir -p $OPBNB_WORKSPACE\n\ncd $OPBNB_WORKSPACE\ngit clone git@github.com:bnb-chain/opbnb.git\ncd opbnb/op-node\ngit checkout $OPBNB_MAINNET_VERSION\nmake op-node\nmkdir -p $OPBNB_WORKSPACE/op-node-data\ncp ./bin/op-node $OPBNB_WORKSPACE/op-node-data\n\ncd $OPBNB_WORKSPACE\ngit clone git@github.com:bnb-chain/op-geth.git\ncd op-geth\ngit checkout $OPBNB_MAINNET_VERSION\nmake geth\nmkdir -p $OPBNB_WORKSPACE/op-geth-data\ncp ./build/bin/geth $OPBNB_WORKSPACE/op-geth-data/op-geth\n")),(0,r.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $OPBNB_WORKSPACE\nwget -P op-geth-data https://raw.githubusercontent.com/bnb-chain/opbnb/develop/assets/mainnet/genesis.json\nwget -P op-node-data https://raw.githubusercontent.com/bnb-chain/opbnb/develop/assets/mainnet/rollup.json\n\nopenssl rand -hex 32 > jwt.txt\ncp jwt.txt $OPBNB_WORKSPACE/op-geth-data\ncp jwt.txt $OPBNB_WORKSPACE/op-node-data\n\n# init op-geth genesis\ncd $OPBNB_WORKSPACE/op-geth-data\nmkdir datadir\n./op-geth --datadir ./datadir init genesis.json\n")),(0,r.kt)("h2",{id:"start-components"},"Start components"),(0,r.kt)("p",null,"op-geth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#! /usr/bin/bash\ncd $OPBNB_WORKSPACE/op-geth-data\n\nexport CHAIN_ID=204\nexport L2_RPC=https://opbnb-mainnet-rpc.bnbchain.org\n\n./op-geth \\\n  --datadir="./datadir" \\\n  --verbosity=3 \\\n  --http \\\n  --http.corsdomain="*" \\\n  --http.vhosts="*" \\\n  --http.addr=0.0.0.0 \\\n  --http.port=8545 \\\n  --http.api=net,eth,engine \\\n  --ws \\\n  --ws.addr=0.0.0.0 \\\n  --ws.port=8545 \\\n  --ws.origins="*" \\\n  --ws.api=eth,engine \\\n  --syncmode=full \\\n  --maxpeers=10 \\\n  --networkid=$CHAIN_ID \\\n  --miner.gaslimit=150000000 \\\n  --triesInMemory=32 \\\n  --txpool.globalslots=10000 \\\n  --txpool.globalqueue=5000 \\\n  --txpool.accountqueue=200 \\\n  --txpool.accountslots=200 \\\n  --cache 32000 \\\n  --cache.preimages \\\n  --allow-insecure-unlock \\\n  --authrpc.addr="0.0.0.0" \\\n  --authrpc.port="8551" \\\n  --authrpc.vhosts="*" \\\n  --authrpc.jwtsecret=./jwt.txt \\\n  --gcmode=archive \\\n  --metrics \\\n  --metrics.port 6060 \\\n  --metrics.addr 0.0.0.0 \\\n  --rollup.sequencerhttp=$L2_RPC\n')),(0,r.kt)("p",null,"op-node, please note the op-node starts requires a p2p private key, you need replace the private key with a new random number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#! /usr/bin/bash\n\nset -ex\n\ncd op-node-data\n\nexport L2_RPC=http://localhost:8551\n# it\'s better to replace the L1_RPC with your own BSC Mainnet RPC Endpoint for stability\nexport L1_RPC=https://bsc-dataseed.bnbchain.org\n# replace the p2p private key with yours\n# you can generate a new one with `openssl rand -hex 32`\nexport P2P_PRIV_KEY=0000000000000000000000000000000000000000000000000000000000000000\nexport P2P_BOOTNODES="enr:-J24QA9sgVxbZ0KoJ7-1gx_szfc7Oexzz7xL2iHS7VMHGj2QQaLc_IQZmFthywENgJWXbApj7tw7BiouKDOZD4noWEWGAYppffmvgmlkgnY0gmlwhDbjSM6Hb3BzdGFja4PMAQCJc2VjcDI1NmsxoQKetGQX7sXd4u8hZr6uayTZgHRDvGm36YaryqZkgnidS4N0Y3CCIyuDdWRwgiMs"\n\n./op-node \\\n  --l1.trustrpc \\\n  --sequencer.l1-confs=15 \\\n  --verifier.l1-confs=15 \\\n  --l1.http-poll-interval 3s \\\n  --l1.epoch-poll-interval 45s \\\n  --l1.rpc-max-batch-size 20 \\\n  --rollup.config=./rollup.json \\\n  --rpc.addr=0.0.0.0 \\\n  --rpc.port=8546 \\\n  --p2p.sync.req-resp \\\n  --p2p.listen.ip=0.0.0.0 \\\n  --p2p.listen.tcp=9003 \\\n  --p2p.listen.udp=9003 \\\n  --p2p.nat \\\n  --snapshotlog.file=./snapshot.log \\\n  --p2p.priv.raw=$P2P_PRIV_KEY \\\n  --p2p.bootnodes=$P2P_BOOTNODES \\\n  --metrics.enabled \\\n  --metrics.addr=0.0.0.0 \\\n  --metrics.port=7300 \\\n  --pprof.enabled \\\n  --rpc.enable-admin \\\n  --l1=${L1_RPC} \\\n  --l2=${L2_RPC} \\\n  --l2.jwt-secret=./jwt.txt \\\n  --log.level=debug\n')),(0,r.kt)("h2",{id:"check-status"},"Check status"),(0,r.kt)("p",null,"The node synchronization process may take a long time, depending on the network conditions. You should wait around 30 mins to 1 hour until the node is fully synced before proceeding with any other operations. You can monitor the progress of the sync by looking at the logs, which will show the p2p information at first, like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INFO [08-19|08:53:42.479] Looking for peers                        peercount=0 tried=73 static=0\nINFO [08-19|08:53:57.823] Looking for peers                        peercount=0 tried=63 static=0\nINFO [08-19|08:54:07.867] Looking for peers                        peercount=0 tried=46 static=0\n")),(0,r.kt)("p",null,"Then You'll see log in ",(0,r.kt)("inlineCode",{parentName:"p"},"op-geth")," if there's any new block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'INFO [06-14|01:15:02.937] Starting work on payload                 id=0x4e2b62d76dc5f1d3\nINFO [06-14|01:15:02.937] Imported new potential chain segment     number=5580 hash=895199..a87b81 blocks=1 txs=1 mgas=0.047 elapsed="241.25\xb5s"  mgasps=194.508  age=1d9h23m  dirty=0.00B\nINFO [06-14|01:15:02.938] Chain head was updated                   number=5580 hash=895199..a87b81 root=79aad7..99e3bb elapsed="27.333\xb5s"  age=1d9h23m\n')),(0,r.kt)("p",null,"You can also check the block number with curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\' http://localhost:8545\n')),(0,r.kt)("p",null,"If the node is synced, you'll see the non-zero block number in the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","id":1,"result":"0x1a"}\n')),(0,r.kt)("p",null,"You can compare the block with the one requested from ",(0,r.kt)("a",{parentName:"p",href:"https://opbnb-mainnet-rpc.bnbchain.org"},"public mainnet endpoint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}\' http://localhost:8545\n$ curl -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}\' https://opbnb-mainnet-rpc.bnbchain.org\n')),(0,r.kt)("p",null,"Syncing up for the first time may be time-consuming."),(0,r.kt)("p",null,"The current sync mechanism is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Retrieve the blocks from the op-node P2P network for the latest 12 hours."),(0,r.kt)("li",{parentName:"ul"},"Retrieve all blocks prior to that from the data availability layer. For opBNB, the data availability layer is L1 (BSC). The op-node scans the L1 chain starting from the genesis height, retrieves the L2 block data from the call data to the ",(0,r.kt)("a",{parentName:"li",href:"https://bscscan.com/address/0xff00000000000000000000000000000000000204"},"inbox batch address"),", composes the blocks, and executes them.")),(0,r.kt)("p",null,"The speed relies on the number of blocks you need to retrieve from the data availability layer and the latency of the L1 RPC endpoint."),(0,r.kt)("p",null,"You can query the op-node RPC endpoint to check the syncing status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST -H "Content-Type: application/json" --data \\\n    \'{"jsonrpc":"2.0","method":"optimism_syncStatus","params":[],"id":1}\'  \\\n    http://localhost:8546 | jq .\n\n{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "current_l1": {\n      "hash": "0x86be56c30c6763e1b100a898e53810230d9e097ba0ae8338e6f2c40921e619da",\n      "number": 30760342,\n      "parentHash": "0xf118f4863d35852748b60810432c1a77e742913d3566f77f84325fbf23b653bf",\n      "timestamp": 1691759689\n    },\n    "current_l1_finalized": {\n      "hash": "0xa3bedf57d7403c07e2c72c523d16f83879fe0635e0940838b3b24db8e442b4ba",\n      "number": 30968675,\n      "parentHash": "0x7f5a4c5723f0d41707775ccc4805dc8cc89921c98e02c91096a82ea4a4e0e179",\n      "timestamp": 1692386285\n    },\n    "head_l1": {\n      "hash": "0xa6770b5d90005a07db7f47af3f13ca630667fad6462729d189fb7a8cf8d5d9dc",\n      "number": 30968685,\n      "parentHash": "0x5d834192288e73e5750d0338ed3462dadce38471e1ea8b1227853bd5dc3769ab",\n      "timestamp": 1692386315\n    },\n    "safe_l1": {\n      "hash": "0x4a1e2713393352dd7deb7334b3ee0cd413cf847f76460d193961336ff0374fea",\n      "number": 30968676,\n      "parentHash": "0xa3bedf57d7403c07e2c72c523d16f83879fe0635e0940838b3b24db8e442b4ba",\n      "timestamp": 1692386288\n    },\n    "finalized_l1": {\n      "hash": "0xa3bedf57d7403c07e2c72c523d16f83879fe0635e0940838b3b24db8e442b4ba",\n      "number": 30968675,\n      "parentHash": "0x7f5a4c5723f0d41707775ccc4805dc8cc89921c98e02c91096a82ea4a4e0e179",\n      "timestamp": 1692386285\n    },\n    "unsafe_l2": {\n      "hash": "0xe32740323c90722ea94b582da1e09fe7270525ab4dcf5bbe2824aacd02e7b0ea",\n      "number": 594,\n      "parentHash": "0xbe104ca7a75ff0054368ffc1218f85570fc4fb4caff83419d16b2042c667425f",\n      "timestamp": 1691754317,\n      "l1origin": {\n        "hash": "0x76ede62c33bfe953af6b81a548facc81dd3ded554308f80d9d9aa0b91077452f",\n        "number": 30758555\n      },\n      "sequenceNumber": 0\n    },\n    "safe_l2": {\n      "hash": "0xe32740323c90722ea94b582da1e09fe7270525ab4dcf5bbe2824aacd02e7b0ea",\n      "number": 594,\n      "parentHash": "0xbe104ca7a75ff0054368ffc1218f85570fc4fb4caff83419d16b2042c667425f",\n      "timestamp": 1691754317,\n      "l1origin": {\n        "hash": "0x76ede62c33bfe953af6b81a548facc81dd3ded554308f80d9d9aa0b91077452f",\n        "number": 30758555\n      },\n      "sequenceNumber": 0\n    },\n    "finalized_l2": {\n      "hash": "0x4dd61178c8b0f01670c231597e7bcb368e84545acd46d940a896d6a791dd6df4",\n      "number": 0,\n      "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n      "timestamp": 1691753723,\n      "l1origin": {\n        "hash": "0x29443b21507894febe7700f7c5cd3569cc8bf1ba535df0489276d8004af81044",\n        "number": 30758357\n      },\n      "sequenceNumber": 0\n    },\n    "queued_unsafe_l2": {\n      "hash": "0x60dc874310e4d0af98a496cd413178a3b2dbb53e6edee6bd96dc65ccfd62cfef",\n      "number": 607114,\n      "parentHash": "0xc456adf577349475921639d73ce9ee36262757ee42a0bbb157b89682a05acc74",\n      "timestamp": 1692360837,\n      "l1origin": {\n        "hash": "0x5ed192fb4146bd47831c5177d4d7be5a6b52835db1f161e291cf0b66a1f2be98",\n        "number": 30960190\n      },\n      "sequenceNumber": 2\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"result.current_l1.number")," field and ensure it increases over time."),(0,r.kt)("p",null,"The genesis L1 number is 30758357, the block number of ",(0,r.kt)("a",{parentName:"p",href:"https://bscscan.com/tx/0xefe7d06cb16cbc6f5ed7e7b611125cd4cf9a81f064e73ec814e914c28545853e"},"first batch transaction")," is 30760322. Only when the ",(0,r.kt)("inlineCode",{parentName:"p"},"result.current_l1.number")," passes 30760322, the L2 block number will be increased."))}l.isMDXComponent=!0}}]);