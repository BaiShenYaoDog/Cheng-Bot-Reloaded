import{a as n}from"./axios-B6xwUs71.js";import{c as d,a as e,t as i,b as r,o as _}from"./index-CEjgQIi6.js";const m="/assets/BotImage-CwXyFc0h.jpg",g={class:"container"},v=r('<div class="Help"><div class="Title"><div class="Icon"><img alt="" src="'+m+'"></div><div class="Name"><h2>Cheng-Bot | 菜单 | 感谢使用Cheng-Bot</h2></div></div><div class="Bar"></div><div class="Helps"><h3>菜单 | 查询机器人功能菜单</h3><h3>运行状态 | 查询机器人运行状态</h3><h3>服务器状态 | 查询MC服务器运行状态</h3><h3>一言 | 获取一言</h3></div></div>',1),u={class:"About"},p={class:"Text"},k=e("div",{class:"Bar"},null,-1),B={data(){return{time:"58年3月5日 05:08:42",hitokoto:"一言获取失败!"}},mounted(){this.getTime(),this.getHitokoto(),setInterval(this.getTime,1e3)},methods:{getHitokoto(){n.get("https://v1.hitokoto.cn/").then(t=>{this.hitokoto=t.data.hitokoto}).catch(t=>{console.error(t)})},getTime(){let t=new Date,s=t.getFullYear(),o=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2),c=("0"+t.getHours()).slice(-2),l=("0"+t.getMinutes()).slice(-2),h=("0"+t.getSeconds()).slice(-2);this.time=`${s}年${o}月${a}日 ${c}:${l}:${h}`}}},H=Object.assign(B,{__name:"Menu",setup(t){return(s,o)=>(_(),d("div",g,[v,e("div",u,[e("div",p,[e("h3",null,i(s.time),1),k,e("h3",null,i(s.hitokoto),1)])])]))}});export{H as default};
