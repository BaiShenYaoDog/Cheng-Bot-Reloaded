import{c as d,a as s,t as a,F as c,r,n as i,u as h,o as n,C as g,b as p}from"./index-QpEoHfHH.js";import{a as _}from"./axios-B6xwUs71.js";const m="/assets/CPU-bkt5EZKR.png",u="/assets/RAM-KhM-CFe6.png",v="/assets/PRAM-Df8xfqOx.png",f="/assets/DISK-Bl84pqhu.png",y="/assets/SYSTEM-DwCqCDRx.png",U={class:"container"},S={class:"Info"},k={class:"Items"},B={class:"Title"},I=s("div",{class:"Icons"},[s("img",{alt:"",src:m})],-1),x={style:{"padding-left":"15px"}},T=s("h2",null,"CPU | 中央处理器",-1),b={class:"Usage"},D={class:"UsageBar"},C={class:"Bar"},F=s("p",{class:"BarText"},"CPU占用率",-1),G={style:{display:"flex",width:"150px"}},M={class:"Detail"},R={class:"DetailItems"},w={style:{"text-align":"center","padding-top":"10px"}},A={style:{color:"#efefef"}},P={class:"DetailItems"},N={style:{"text-align":"center","padding-top":"10px"}},K={style:{color:"#efefef"}},q={class:"DetailItems"},E={style:{"text-align":"center","padding-top":"10px"}},H={style:{color:"#efefef"}},O={class:"Items"},V=s("div",{class:"Title"},[s("div",{class:"Icons"},[s("img",{alt:"",src:u})]),s("div",{style:{"padding-left":"15px"}},[s("h2",null,"RAM | 物理内存"),s("h4",null,"未知")])],-1),z={class:"Usage"},j={class:"UsageBar"},L={class:"Bar"},Y=s("p",{class:"BarText"},"RAM占用率",-1),Z={style:{display:"flex",width:"150px"}},J={class:"Detail"},Q={class:"DetailItems"},W={style:{"text-align":"center","padding-top":"10px"}},X={style:{color:"#efefef"}},$={class:"DetailItems"},ss={style:{"text-align":"center","padding-top":"10px"}},ts={style:{color:"#efefef"}},es={class:"DetailItems"},as={style:{"text-align":"center","padding-top":"10px"}},is={style:{color:"#efefef"}},os={class:"Items"},ls=s("div",{class:"Title"},[s("div",{class:"Icons"},[s("img",{alt:"",src:v})]),s("div",{style:{"padding-left":"15px"}},[s("h2",null,"PRAM | 虚拟内存"),s("h4",null,"未知")])],-1),ds={class:"Usage"},ns={class:"UsageBar"},cs={class:"Bar"},rs=s("p",{class:"BarText"},"PRAM占用率",-1),hs={style:{display:"flex",width:"150px"}},_s={class:"Detail"},gs={class:"DetailItems"},ps={style:{"text-align":"center","padding-top":"10px"}},ms={style:{color:"#efefef"}},us={class:"DetailItems"},vs={style:{"text-align":"center","padding-top":"10px"}},fs={style:{color:"#efefef"}},ys={class:"DetailItems"},Us={style:{"text-align":"center","padding-top":"10px"}},Ss={style:{color:"#efefef"}},ks={class:"Info"},Bs={class:"Items"},Is=s("div",{class:"Title"},[s("div",{class:"Icons"},[s("img",{alt:"",src:f})]),s("div",{style:{"padding-left":"15px"}},[s("h2",null,"DISK | 磁盘"),s("h4",null,"未知")])],-1),xs={class:"Usage"},Ts={class:"UsageBar"},bs={class:"Bar"},Ds=s("p",{class:"BarText"},"磁盘空间占用率",-1),Cs={style:{display:"flex",width:"150px"}},Fs={class:"Detail"},Gs={class:"DetailItems"},Ms={style:{"text-align":"center","padding-top":"10px"}},Rs={style:{color:"#efefef"}},ws={class:"DetailItems"},As={style:{"text-align":"center","padding-top":"10px"}},Ps={style:{color:"#efefef"}},Ns={class:"DetailItems"},Ks={style:{"text-align":"center","padding-top":"10px"}},qs={style:{color:"#efefef"}},Es={class:"Items"},Hs={class:"Title"},Os=s("div",{class:"Icons"},[s("img",{alt:"",src:y})],-1),Vs={style:{"padding-left":"15px"}},zs=s("h2",null,"其他信息",-1),js={class:"SubTitle"},Ls=s("h3",null,"Cheng-Bot作者: 白神遥桌上の橙汁",-1),Ys=s("div",{class:"SubTitle",style:{"padding-top":"30px"}},[s("h3",null,"感谢使用Cheng-Bot")],-1),Zs={data(){return{cpuName:"i0 5835",cpuUsageString:"0%",cpuUsage:0,cpuSpeed:"0.5835 GHz",cpuBit:"64位",cpuCores:"1",cpuThreads:"1",ramUsageString:"0%",ramUsage:0,ramTotal:"1 Gib",ramUse:"0 Gib",ramFree:"1 Gib",pramUsageString:"0%",pramUsage:0,pramTotal:"1 Gib",pramUse:"0 Gib",pramFree:"1 Gib",systemName:"白神OS",diskUsageString:"0%",diskUsage:0,diskTotal:"1 Gib",diskUse:"0 Gib",diskFree:"1 Gib",hitokoto:"一言获取失败!"}},mounted(){this.getSystemInfo(),this.getHitokoto(),setInterval(this.getSystemInfo,1e3)},methods:{getHitokoto(){_.get("https://v1.hitokoto.cn/").then(e=>{this.hitokoto=e.data.hitokoto}).catch(e=>{console.error(e)})},getSystemInfo(){_.get("http://127.0.0.1:5678/api/SystemInfo/get").then(e=>{this.cpuName=e.data.data.cpu.name,this.cpuSpeed=e.data.data.cpu.speed,this.cpuBit=e.data.data.cpu.bit,this.cpuCores=e.data.data.cpu.cores,this.cpuThreads=e.data.data.cpu.threads,this.ramTotal=e.data.data.ram.total,this.ramUse=e.data.data.ram.use,this.ramFree=e.data.data.ram.free,this.pramTotal=e.data.data.pram.total,this.pramUse=e.data.data.pram.use,this.pramFree=e.data.data.pram.free,this.systemName=e.data.data.system.name,this.diskTotal=e.data.data.disk.total,this.diskUse=e.data.data.disk.use,this.diskFree=e.data.data.disk.free;{let t=e.data.data.cpu.usage;for(this.cpuUsage=t;t.toString().length<3;)t="0"+t;this.cpuUsageString=t+"%"}{let t=e.data.data.ram.usage;for(this.ramUsage=t;t.toString().length<3;)t="0"+t;this.ramUsageString=t+"%"}{let t=e.data.data.pram.usage;for(this.pramUsage=t;t.toString().length<3;)t="0"+t;this.pramUsageString=t+"%"}{let t=e.data.data.disk.usage;for(this.diskUsage=t;t.toString().length<3;)t="0"+t;this.diskUsageString=t+"%"}}).catch(e=>{console.error(e)})}}},Xs=Object.assign(Zs,{__name:"SystemInfo",setup(e){return(t,Js)=>(n(),d("div",U,[s("div",S,[s("div",k,[s("div",B,[I,s("div",x,[T,s("h4",null,a(t.cpuName),1)])]),s("div",b,[s("h1",null,[(n(!0),d(c,null,r(t.cpuUsageString,(o,l)=>(n(),d("span",{key:l,style:i({color:o==="0"&&l<=3-t.cpuUsage.toString().length?"rgba(44,172,255,0.3)":"rgba(44,172,255,1)"})},a(o),5))),128))])]),s("div",D,[s("div",C,[F,s("div",G,[s("div",{style:i({flex:t.cpuUsage,transition:"flex 1s ease-in-out"}),class:"UseBar"},null,4),s("div",{style:i({flex:100-t.cpuUsage}),class:"FreeBar"},null,4)])])]),s("div",M,[s("div",R,[s("div",w,[s("h4",A,a(t.cpuCores)+"核心 "+a(t.cpuThreads)+"线程 ",1)])]),s("div",P,[s("div",N,[s("h4",K,a(t.cpuSpeed),1)])]),s("div",q,[s("div",E,[s("h4",H,a(t.cpuBit),1)])])])]),s("div",O,[V,s("div",z,[s("h1",null,[(n(!0),d(c,null,r(t.ramUsageString,(o,l)=>(n(),d("span",{key:l,style:i({color:o==="0"&&l<=3-t.ramUsage.toString().length?"rgba(44,172,255,0.3)":"rgba(44,172,255,1)"})},a(o),5))),128))])]),s("div",j,[s("div",L,[Y,s("div",Z,[s("div",{style:i({flex:t.ramUsage,transition:"flex 1s ease-in-out"}),class:"UseBar"},null,4),s("div",{style:i({flex:100-t.ramUsage}),class:"FreeBar"},null,4)])])]),s("div",J,[s("div",Q,[s("div",W,[s("h4",X," 总量: "+a(t.ramTotal),1)])]),s("div",$,[s("div",ss,[s("h4",ts," 使用: "+a(t.ramUse),1)])]),s("div",es,[s("div",as,[s("h4",is," 可用: "+a(t.ramFree),1)])])])]),s("div",os,[ls,s("div",ds,[s("h1",null,[(n(!0),d(c,null,r(t.pramUsageString,(o,l)=>(n(),d("span",{key:l,style:i({color:o==="0"&&l<=3-t.pramUsage.toString().length?"rgba(44,172,255,0.3)":"rgba(44,172,255,1)"})},a(o),5))),128))])]),s("div",ns,[s("div",cs,[rs,s("div",hs,[s("div",{style:i({flex:t.pramUsage,transition:"flex 1s ease-in-out"}),class:"UseBar"},null,4),s("div",{style:i({flex:100-t.pramUsage}),class:"FreeBar"},null,4)])])]),s("div",_s,[s("div",gs,[s("div",ps,[s("h4",ms," 总量: "+a(t.pramTotal),1)])]),s("div",us,[s("div",vs,[s("h4",fs," 使用: "+a(t.pramUse),1)])]),s("div",ys,[s("div",Us,[s("h4",Ss," 可用: "+a(t.pramFree),1)])])])])]),s("div",ks,[s("div",Bs,[Is,s("div",xs,[s("h1",null,[(n(!0),d(c,null,r(t.diskUsageString,(o,l)=>(n(),d("span",{key:l,style:i({color:o==="0"&&l<=3-t.diskUsage.toString().length?"rgba(44,172,255,0.3)":"rgba(44,172,255,1)"})},a(o),5))),128))])]),s("div",Ts,[s("div",bs,[Ds,s("div",Cs,[s("div",{style:i({flex:t.diskUsage,transition:"flex 1s ease-in-out"}),class:"UseBar"},null,4),s("div",{style:i({flex:100-t.diskUsage}),class:"FreeBar"},null,4)])])]),s("div",Fs,[s("div",Gs,[s("div",Ms,[s("h4",Rs," 总量: "+a(t.diskTotal),1)])]),s("div",ws,[s("div",As,[s("h4",Ps," 使用: "+a(t.diskUse),1)])]),s("div",Ns,[s("div",Ks,[s("h4",qs," 可用: "+a(t.diskFree),1)])])])]),s("div",Es,[s("div",Hs,[Os,s("div",Vs,[zs,s("h4",null,a(t.hitokoto),1)])]),s("div",js,[s("h3",null,"系统: "+a(t.systemName),1),s("h3",null,"Cheng-Bot版本: "+a(h(g)),1),s("h3",null,"Cheng-Bot后端版本: "+a(h(p)),1),Ls]),Ys])])]))}});export{Xs as default};
