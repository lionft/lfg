(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{229:function(e,t,n){},233:function(e,t,n){},249:function(e,t){},252:function(e,t){},255:function(e,t){},259:function(e,t){},260:function(e,t){},286:function(e,t){},288:function(e,t){},297:function(e,t){},299:function(e,t){},309:function(e,t){},311:function(e,t){},326:function(e,t){},351:function(e,t){},352:function(e,t){},427:function(e,t){},429:function(e,t){},436:function(e,t){},437:function(e,t){},540:function(e,t,n){},541:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){"use strict";n.r(t);var c,r,a,o,s,i,l,d,u,b,x,j,f,m,p,O,h=n(2),g=n(83),w=n.n(g),v=n(19),y=(n(229),n(18)),A="START_LOAD_VIDEO",C="LOAD_VIDEO_SUCCESS",N="LOAD_VIDEO_FAILURE",M=n(0),L=n.p+"static/media/sakura-white-border.c68901a8.png",S=(n(233),function(e){var t=e.label,n=e.action,c=e.disabled,r=void 0!==c&&c,a=e.className,o=void 0===a?"":a;return Object(M.jsx)("button",{disabled:r,className:"py-1.5 px-3 text-base font-bold md:text-lg text-white outline-none relative button-comp ".concat(o),onClick:function(e){return n(e)},children:t})}),z=n(21),k=n(45),T=n(67),D=n.n(T),F=n(217),Z=n.n(F),J=n(68),H=n(218),E=n(12),W={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(E.a)(Object(E.a)({},W),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(E.a)(Object(E.a)({},W),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload.account});default:return e}},B={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(E.a)(Object(E.a)({},B),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},R={isVideoLoaded:!1,error:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(E.a)(Object(E.a)({},e),{},{isVideoLoaded:!1,error:""});case C:return Object(E.a)(Object(E.a)({},e),{},{isVideoLoaded:t.payload});case N:return Object(E.a)(Object(E.a)({},e),{},{isVideoLoaded:!1,error:t.payload});default:return e}},P="START_HOVER",U="STOP_HOVER",Y=function(){return{type:P,payload:!0}},I=function(){return{type:U,payload:!1}},Q={isHover:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:case U:return Object(E.a)(Object(E.a)({},e),{},{isHover:t.payload});default:return e}},q=Object(J.b)({blockchain:X,data:G,videoLoad:K,animateHover:V}),_=[H.a],$=Object(J.c)(J.a.apply(void 0,_)),ee=Object(J.d)(q,$),te=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},ne=function(){return function(){var e=Object(k.a)(Object(z.a)().mark((function e(t){var n;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ee.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(te("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},ce=function(e){return{type:"CONNECTION_FAILED",payload:e}},re=function(){return function(){var e=Object(k.a)(Object(z.a)().mark((function e(t){var n,c,r,a,o,s,i,l,d;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,s=o.ethereum,!(s&&s.isMetaMask)){e.next=33;break}return D.a.setProvider(s),i=new Z.a(s),e.prev=18,e.next=21,s.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,s.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new D.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:i}}),s.on("accountsChanged",(function(e){t(ae(e[0]))})),s.on("chainChanged",(function(){window.location.reload()}))):t(ce("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(ce("Something went wrong."));case 31:e.next=34;break;case 33:t(ce("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()},ae=function(e){return function(){var t=Object(k.a)(Object(z.a)().mark((function t(n){return Object(z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(ne());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){var t=e.setHeaderRef,n=Object(y.b)(),c=Object(y.c)((function(e){return e.blockchain}));return Object(M.jsx)("nav",{ref:function(e){return t(e)},className:"bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:Object(M.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[Object(M.jsx)("a",{href:"/",className:"flex items-center z-10 p-1 mr-3",children:Object(M.jsx)("img",{src:L,className:"h-10",alt:"Suky Learn to Fly"})}),Object(M.jsx)("div",{className:"flex md:order-2 z-10",children:(!c.account||!c.smartContract)&&Object(M.jsx)(S,{label:"Connect",className:"mr-2 lg:mr-0",action:function(e){e.preventDefault(),n(re()),""!==c.account&&null!==c.smartContract&&n(ne(c.account))}})})]})})},se=n.p+"static/media/logo-1-trans.13fd5676.png",ie=(n(540),function(e){var t=e.target,n=new Date(t).getTime(),c=Object(h.useState)(0),r=Object(v.a)(c,2),a=(r[0],r[1]),o=Object(h.useState)(0),s=Object(v.a)(o,2),i=s[0],l=s[1],d=Object(h.useState)(0),u=Object(v.a)(d,2),b=u[0],x=u[1],j=Object(h.useState)(0),f=Object(v.a)(j,2),m=f[0],p=f[1];return Object(h.useEffect)((function(){setInterval((function(){var e=(new Date).getTime(),t=n-e,c=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5)+24*c,o=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);a(c),l(r),x(o),p(s),t<0&&(a(0),l(0),x(0),p(0))}),1e3)})),Object(M.jsxs)("div",{className:"w-full flex flex-col justify-center items-center countdown-container",children:[Object(M.jsx)("p",{className:"countdown-title",children:"coming soon"}),Object(M.jsx)("section",{children:Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{className:"hours time-numbers",children:i>=10?i:"0".concat(i)}),Object(M.jsx)("p",{className:"timeRefHours time-description",children:"hours"})]}),Object(M.jsxs)("li",{children:[Object(M.jsxs)("span",{className:"minutes time-numbers",children:[" ",b>=10?b:"0".concat(b)]}),Object(M.jsx)("p",{className:"timeRefMinutes time-description",children:"minutes"})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("span",{className:"seconds time-numbers yellow-text",children:m>=10?m:"0".concat(m)}),Object(M.jsx)("p",{className:"timeRefSeconds time-description",children:"seconds"})]})]})})]})}),le=n(16),de=n(17),ue=(de.a.div(c||(c=Object(le.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),de.a.div(r||(r=Object(le.a)(["\n  height: 8px;\n  width: 8px;\n"])))),be=de.a.div(a||(a=Object(le.a)(["\n  height: 16px;\n  width: 16px;\n"]))),xe=de.a.div(o||(o=Object(le.a)(["\n  height: 24px;\n  width: 24px;\n"]))),je=(de.a.div(s||(s=Object(le.a)(["\n  height: 32px;\n  width: 32px;\n"]))),de.a.div(i||(i=Object(le.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),fe=de.a.p(l||(l=Object(le.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),me=(de.a.p(d||(d=Object(le.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),de.a.p(u||(u=Object(le.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),pe=(de.a.div(b||(b=Object(le.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),de.a.button(x||(x=Object(le.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),Oe=(de.a.button(j||(j=Object(le.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),de.a.div(f||(f=Object(le.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),he=(de.a.img(m||(m=Object(le.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),de.a.img(p||(p=Object(le.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),de.a.a(O||(O=Object(le.a)(["\n  //color: var(--secondary);\n  text-decoration: none;\n  font-weight: bold;\n  color: #ffffff;\n"])))),ge=function(){var e,t,n=Object(y.b)(),c=Object(y.c)((function(e){return e.blockchain})),r=Object(y.c)((function(e){return e.data})),a=Object(h.useState)(!1),o=Object(v.a)(a,2),s=o[0],i=o[1],l=Object(h.useState)("Click buy to mint your NFT."),d=Object(v.a)(l,2),u=d[0],b=d[1],x=Object(h.useState)(1),j=Object(v.a)(x,2),f=j[0],m=j[1],p=Object(h.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(v.a)(p,2),g=O[0],w=O[1],A=function(){""!==c.account&&null!==c.smartContract&&n(ne(c.account))},C=function(){var e=Object(k.a)(Object(z.a)().mark((function e(){var t,n;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){C()}),[]),Object(h.useEffect)((function(){A()}),[c.account]),Object(M.jsx)(Oe,{flex:1,test:!0,children:Object(M.jsxs)(je,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"rgba(0, 0, 0, .4)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)"},children:[Object(M.jsxs)(fe,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",g.MAX_SUPPLY]}),Object(M.jsx)(me,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(M.jsx)(he,{target:"_blank",href:g.SCAN_LINK,children:(e=g.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(M.jsx)(be,{}),Number(r.totalSupply)>=g.MAX_SUPPLY?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(M.jsxs)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",g.NFT_NAME," on"]}),Object(M.jsx)(be,{}),Object(M.jsx)(he,{target:"_blank",href:g.MARKETPLACE_LINK,children:g.MARKETPLACE})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(fe,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",g.SYMBOL," costs ",g.DISPLAY_COST," ",g.NETWORK.SYMBOL,"."]}),Object(M.jsx)(ue,{}),Object(M.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(M.jsx)(be,{}),""===c.account||null===c.smartContract?Object(M.jsxs)(je,{ai:"center",jc:"center",children:[Object(M.jsxs)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",g.NETWORK.NAME," network"]}),Object(M.jsx)(be,{}),Object(M.jsx)(pe,{onClick:function(e){e.preventDefault(),n(re()),A()},children:"CONNECT"}),""!==c.errorMsg?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(be,{}),Object(M.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(M.jsx)(xe,{}),Object(M.jsxs)(je,{ai:"center",jc:"center",fd:"row",children:[Object(M.jsx)(S,{label:"-",disabled:s?1:0,action:function(e){e.preventDefault(),function(){var e=f-1;e<1&&(e=1),m(e)}()},className:"w-max"}),Object(M.jsx)(xe,{}),Object(M.jsx)(me,{style:{textAlign:"center",color:"var(--accent-text)",fontWeight:"bold",fontSize:"1.5rem"},children:f}),Object(M.jsx)(xe,{}),Object(M.jsx)(S,{label:"+",disabled:s?1:0,action:function(e){e.preventDefault(),function(){var e=f+1;e>10&&(e=10),m(e)}()},className:"w-max"})]}),Object(M.jsx)(be,{}),Object(M.jsx)(je,{ai:"center",jc:"center",fd:"row",children:Object(M.jsx)(S,{label:s?"BUSY":"BUY",action:function(e){e.preventDefault(),function(){var e=g.WEI_COST,t=g.GAS_LIMIT,r=String(e*f),a=String(t*f);console.log("Cost: ",r),console.log("Gas limit: ",a),b("Minting your ".concat(g.NFT_NAME,"...")),i(!0),c.smartContract.methods.mint(f).send({gasLimit:String(a),to:g.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),b("Sorry, something went wrong please try again later."),i(!1)})).then((function(e){console.log(e),b("WOW, the ".concat(g.NFT_NAME," is yours! go visit Opensea.io to view it.")),i(!1),n(ne(c.account))}))}(),A()}})})]})]})]})})},we=(n.p,[{icon:n.p+"static/media/twitter-logo.443027d3.png",link:"https://twitter.com/sukilearnstofly"},{icon:"data:image/png;base64,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",link:"https://etherscan.io/address/0x39223e2596bf8e1de3894f66947cacc614c24a2f#writeContract"}]),ve=function(){return Object(M.jsx)("div",{className:"flex justify-center items-center space-x-2.5 md:space-x-5",children:we.map((function(e,t){return Object(M.jsx)("a",{href:e.link,target:"_blank",className:"w-8 h-8 p-1 transition-all rounded-full hover:bg-pink",children:Object(M.jsx)("img",{src:e.icon,alt:"social-logo",className:"w-full h-full object-cover"})},t)}))})},ye=function(e){var t=e.errorMsg,n=(e.setErrorMsg,e.isNotHide),c=void 0!==n&&n,r=e.toastFor,a=void 0===r?"warning":r,o=Object(h.useState)(!1),s=Object(v.a)(o,2),i=s[0],l=s[1];return Object(h.useEffect)((function(){t&&(l(!0),c||setTimeout((function(){l(!1)}),2e3))}),[t,c]),Object(M.jsx)(M.Fragment,{children:i&&Object(M.jsxs)("div",{className:"flex items-center p-4 w-full max-w-xs text-gray-500 rounded-lg shadow right-2 fixed bg-black-40 z-50",style:{top:"80px"},children:["success"===a?Object(M.jsxs)("div",{className:"inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-white bg-pink rounded-lg",children:[Object(M.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Object(M.jsx)("span",{className:"sr-only",children:"Check icon"})]}):Object(M.jsx)("div",{className:"inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-white bg-red-800 rounded-lg",children:Object(M.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(M.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),Object(M.jsx)("div",{className:"ml-3 text-sm text-white font-bold",children:t})]})})},Ae=n.p+"static/media/background-image.e4185b7f.jpeg",Ce=n.p+"static/media/blossom-gif.a861d512.webp",Ne=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.blockchain})),n=(Object(y.c)((function(e){return e.videoLoad.isVideoLoaded})),Object(h.useState)(null)),c=Object(v.a)(n,2),r=c[0],a=c[1];Object(h.useEffect)((function(){(t.account||t.smartContract)&&(e(Y()),setInterval((function(){e(I())}),1e3))}),[t]);return Object(M.jsxs)("div",{className:"w-full h-full relative",children:[Object(M.jsx)("div",{className:"w-full h-full absolute left-0 top-0",children:Object(M.jsxs)("div",{className:"w-full h-full relative",children:[Object(M.jsx)("img",{src:Ae,alt:"background-image",className:"absolute w-full h-full left-0 top-0 object-cover"}),Object(M.jsx)("img",{src:Ce,alt:"background-gif",className:"absolute w-full h-full left-0 top-0 object-cover"}),Object(M.jsx)("img",{src:Ce,alt:"background-gif",className:"absolute w-full h-full left-0 top-0 object-cover"})]})}),Object(M.jsx)(oe,{setHeaderRef:a}),Object(M.jsx)("div",{"data-aos-duration":"1000","data-aos":"fade-down",className:"container mx-auto flex justify-center items-center px-2 sm:px-4 pb-4 xl:px-0 relative z-10",style:{minHeight:"calc(100vh - ".concat(null===r||void 0===r?void 0:r.offsetHeight,"px)")},children:Object(M.jsxs)("div",{className:"w-full flex justify-center items-center flex-col md:flex-row md:space-x-4 m-auto",children:[Object(M.jsx)("div",{className:"w-full flex justify-center items-center mt-3 md:mt-0 md:w-6/12 z-10 order-2 md:order-1 ".concat(t.account&&t.smartContract?"":"hidden md:flex"),children:(t.account||t.smartContract)&&Object(M.jsx)("div",{"data-aos":"zoom-in",className:"w-full h-full",children:Object(M.jsx)(ge,{})})}),Object(M.jsxs)("div",{className:"w-full h-max flex flex-col justify-center items-center space-y-4 md:w-6/12 z-10 order-1 p-2 md:order-2 relative banner-right__side",children:[Object(M.jsx)("div",{className:"blur-bg"}),Object(M.jsx)("div",{className:"banner-right__side-container",children:Object(M.jsx)("div",{className:"w-full relative banner-right__side-wrapper",children:Object(M.jsx)("img",{src:se,alt:"Suky Learn to Fly",className:"absolute w-full h-full left-0 top-0 object-contain"})})}),Object(M.jsxs)("div",{className:"flex flex-col justify-center items-center z-10",children:[Object(M.jsxs)("h1",{className:"text-2xl text-white font-bold text-center lg:text-4xl xl:text-6xl",children:["Together, let's",Object(M.jsx)("span",{className:"font-semibold text-pink",children:" fly"})]}),Object(M.jsx)("h2",{className:"text-white text-center text-base lg:text-lg xl:text-2xl mt-3",children:"Suki invites you to join her on a world of adventures. 5555 unique characters inspired by fantasy and slice-of-life anime. Come with us on this journey?"})]}),Object(M.jsx)("div",{className:"w-full flex justify-center items-center",children:(!t.account||!t.smartContract)&&Object(M.jsx)(S,{label:"Mint your Suki(s)",action:function(n){n.preventDefault(),e(re()),""!==t.account&&null!==t.smartContract&&e(ne(t.account))}})}),Object(M.jsx)("div",{className:"w-full z-10",children:Object(M.jsx)(ie,{target:"Aug 21, 2022 18:00:00"})}),Object(M.jsx)("div",{className:"w-full flex justify-center items-center z-10",children:Object(M.jsx)(ve,{})})]})]})}),Object(M.jsx)(ye,{toastFor:(t.account||t.smartContract)&&"success",errorMsg:t.errorMsg||(t.account||t.smartContract)&&"Connect to wallet successful."})]})},Me=(n(541),n.p+"static/media/background-audio.abfdfa40.mp3"),Le=function(){var e=Object(y.b)(),t=Object(h.useState)(new Audio(Me)),n=Object(v.a)(t,1)[0],c=Object(h.useState)(!1),r=Object(v.a)(c,2),a=r[0],o=r[1];return Object(M.jsxs)("div",{className:"fixed right-3 bottom-3 z-50",children:[Object(M.jsxs)("audio",{playsInline:!0,children:[Object(M.jsx)("source",{src:Me,type:"audio/mpeg"}),"Your browser does not support the audio element."]}),Object(M.jsx)("button",{onMouseMove:function(){return e(Y())},onMouseLeave:function(){return e(I())},className:"flex justify-center items-center text-white play-btn",onClick:function(){a?n.pause():n.play(),o(!a)},children:a?Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-8 h-8",viewBox:"0 0 16 16",children:Object(M.jsx)("path",{d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"})}):Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",className:"w-8 h-8",children:Object(M.jsx)("path",{d:"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"})})})]})},Se=function(){return Object(M.jsxs)("div",{className:"w-screen min-h-screen relative md:overflow-hidden",children:[Object(M.jsx)(Ne,{}),Object(M.jsx)(Le,{})]})};var ze=function(){return Object(M.jsx)(Se,{})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,549)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},Te=n(222),De=n.n(Te);n(542),n(543);De.a.init(),w.a.render(Object(M.jsx)(y.a,{store:ee,children:Object(M.jsx)(ze,{})}),document.getElementById("root")),ke()}},[[544,1,2]]]);
//# sourceMappingURL=main.e6fa6f01.chunk.js.map