import{c,a,F as q,r as H,t as f,u as v,o as u,n as B,e as C,C as J,d as G}from"./index-DhsDEBur.js";import{a as K}from"./axios-B6xwUs71.js";const T="3.7.7",M=T,l=typeof Buffer=="function",m=typeof TextDecoder=="function"?new TextDecoder:void 0,S=typeof TextEncoder=="function"?new TextEncoder:void 0,Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=Array.prototype.slice.call(Q),A=(t=>{let e={};return t.forEach((r,o)=>e[r]=o),e})(h),W=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,s=String.fromCharCode.bind(String),U=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),$=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),w=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),R=t=>{let e,r,o,i,n="";const F=t.length%3;for(let p=0;p<t.length;){if((r=t.charCodeAt(p++))>255||(o=t.charCodeAt(p++))>255||(i=t.charCodeAt(p++))>255)throw new TypeError("invalid character found");e=r<<16|o<<8|i,n+=h[e>>18&63]+h[e>>12&63]+h[e>>6&63]+h[e&63]}return F?n.slice(0,F-3)+"===".substring(F):n},b=typeof btoa=="function"?t=>btoa(t):l?t=>Buffer.from(t,"binary").toString("base64"):R,y=l?t=>Buffer.from(t).toString("base64"):t=>{let r=[];for(let o=0,i=t.length;o<i;o+=4096)r.push(s.apply(null,t.subarray(o,o+4096)));return b(r.join(""))},x=(t,e=!1)=>e?$(y(t)):y(t),X=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?s(192|e>>>6)+s(128|e&63):s(224|e>>>12&15)+s(128|e>>>6&63)+s(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return s(240|e>>>18&7)+s(128|e>>>12&63)+s(128|e>>>6&63)+s(128|e&63)}},Y=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,V=t=>t.replace(Y,X),I=l?t=>Buffer.from(t,"utf8").toString("base64"):S?t=>y(S.encode(t)):t=>b(V(t)),d=(t,e=!1)=>e?$(I(t)):I(t),D=t=>d(t,!0),tt=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,et=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return s((r>>>10)+55296)+s((r&1023)+56320);case 3:return s((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return s((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},z=t=>t.replace(tt,et),j=t=>{if(t=t.replace(/\s+/g,""),!W.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,r="",o,i;for(let n=0;n<t.length;)e=A[t.charAt(n++)]<<18|A[t.charAt(n++)]<<12|(o=A[t.charAt(n++)])<<6|(i=A[t.charAt(n++)]),r+=o===64?s(e>>16&255):i===64?s(e>>16&255,e>>8&255):s(e>>16&255,e>>8&255,e&255);return r},_=typeof atob=="function"?t=>atob(w(t)):l?t=>Buffer.from(t,"base64").toString("binary"):j,k=l?t=>U(Buffer.from(t,"base64")):t=>U(_(t).split("").map(e=>e.charCodeAt(0))),L=t=>k(N(t)),ot=l?t=>Buffer.from(t,"base64").toString("utf8"):m?t=>m.decode(k(t)):t=>z(_(t)),N=t=>w(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),g=t=>ot(N(t)),rt=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},O=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),P=function(){const t=(e,r)=>Object.defineProperty(String.prototype,e,O(r));t("fromBase64",function(){return g(this)}),t("toBase64",function(e){return d(this,e)}),t("toBase64URI",function(){return d(this,!0)}),t("toBase64URL",function(){return d(this,!0)}),t("toUint8Array",function(){return L(this)})},Z=function(){const t=(e,r)=>Object.defineProperty(Uint8Array.prototype,e,O(r));t("toBase64",function(e){return x(this,e)}),t("toBase64URI",function(){return x(this,!0)}),t("toBase64URL",function(){return x(this,!0)})},nt=()=>{P(),Z()},E={version:T,VERSION:M,atob:_,atobPolyfill:j,btoa:b,btoaPolyfill:R,fromBase64:g,toBase64:d,encode:d,encodeURI:D,encodeURL:D,utob:V,btou:z,decode:g,isValid:rt,fromUint8Array:x,toUint8Array:L,extendString:P,extendUint8Array:Z,extendBuiltins:nt},at={class:"container"},st={class:"ServerInfo"},it={key:0,class:"Item"},dt={class:"Icon"},lt=["src"],ct={class:"Info"},ft={class:"Title"},ut={class:"Name"},ht={class:"Stats"},pt=["innerHTML"],At={class:"ChengBotInfo"},xt={class:"Text"},Ft=a("h3",null,"Cheng-Bot作者: 白神遥桌上の橙汁",-1),yt=a("div",{class:"Text",style:{"padding-top":"30px"}},[a("h3",null,"感谢使用Cheng-Bot")],-1),gt={name:"App",data(){return{server:[],data:{},colorCodes:{"§0":"#000000","§1":"#0000AA","§2":"#00AA00","§3":"#00AAAA","§4":"#AA0000","§5":"#AA00AA","§6":"#FFAA00","§7":"#AAAAAA","§8":"#555555","§9":"#5555FF","§a":"#55FF55","§b":"#55FFFF","§c":"#FF5555","§d":"#FF55FF","§e":"#FFFF55","§f":"#FFFFFF"}}},methods:{getServerInfo(t){K.get(`http://127.0.0.1:5678/api/ServerInfo/get?server=${t.ip}`).then(e=>{this.data[t.ip]={name:t.name,data:e.data.data}}).catch(e=>{console.error(e)})},getDescription(t){return t.extra?t.extra.map(e=>`<span style="color: ${e.color}; font-weight: ${e.bold?"bold":"normal"};">${e.text}</span>`).join(""):t.text.split(`
`).map(r=>{let o="",i="#FFFFFF";for(let n=0;n<r.length;n++)r[n]==="§"?(i=this.colorCodes[r.slice(n,n+2)]||i,n++):o+=`<span style="color: ${i};">${r[n]}</span>`;return`<div>${o}</div>`}).join("")}},created(){this.$route.query.Server&&(console.log(E.decode(this.$route.query.Server.replace(" ","+"))),this.server=JSON.parse(E.decode(this.$route.query.Server.replace(" ","+"))),this.server.forEach(this.getServerInfo))}},vt=Object.assign(gt,{setup(t){return(e,r)=>(u(),c("div",at,[a("div",st,[(u(!0),c(q,null,H(e.server,(o,i)=>(u(),c("div",{key:i,class:"Infos"},[e.data[o.ip]?(u(),c("div",it,[a("div",dt,[a("img",{src:e.data[o.ip].data.favicon!==null&&e.data[o.ip].data.favicon!==void 0?e.data[o.ip].data.favicon:"../assets/icons/DefaultServerIcon.png",alt:""},null,8,lt)]),a("div",ct,[a("div",ft,[a("div",ut,[a("h2",null,f(e.data[o.ip].name),1),a("h2",{style:B({color:e.data[o.ip].data!=="无法访问目标服务器!"?"#00FF6B":"#F05678"})},f(e.data[o.ip].data!=="无法访问目标服务器!"?"[在线]":"[离线]"),5)]),a("div",ht,[a("h2",{style:B({color:e.data[o.ip].data!=="无法访问目标服务器!"?"#00FF6B":"#F05678"})},f(e.data[o.ip].data!=="无法访问目标服务器!"?e.data[o.ip].data.players.online+"/"+e.data[o.ip].data.players.max:""),5)])]),e.data[o.ip].data!=="无法访问目标服务器!"?(u(),c("div",{key:0,class:"Description",innerHTML:e.getDescription(e.data[o.ip].data.description)},null,8,pt)):C("",!0)])])):C("",!0)]))),128))]),a("div",At,[a("div",xt,[a("h3",null,"Cheng-Bot版本: "+f(v(J)),1),a("h3",null,"Cheng-Bot后端版本: "+f(v(G)),1),Ft]),yt])]))}});export{vt as default};
