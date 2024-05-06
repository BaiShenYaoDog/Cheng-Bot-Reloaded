<script setup>
import '../assets/scss/Menu.scss'
</script>

<template>
  <div class="container">
    <div class="Help">
      <div class="Title">
        <div class="Icon">
          <img alt="" src="../assets/images/BotImage.jpg">
        </div>
        <div class="Name">
          <h2>Cheng-Bot | 菜单 | 感谢使用Cheng-Bot</h2>
        </div>
      </div>
      <div class="Bar"></div>
      <div class="Helps">
        <h3>#菜单 | 查询机器人功能菜单</h3>
        <h3>#运行状态 | 查询机器人运行状态</h3>
        <h3>#服务器状态 | 查询MC服务器运行状态</h3>
        <h3>#绑定 [游戏ID] | 绑定游戏账户</h3>
        <h3>#解除绑定 [游戏ID] | 解除指定账户绑定</h3>
      </div>
    </div>
    <div class="About">
      <div class="Text">
        <h3>{{ time }}</h3>
        <div class="Bar"></div>
        <h3>{{ hitokoto }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      time: "58年3月5日 05:08:42",
      hitokoto: "一言获取失败!",
    }
  },
  mounted() {
    this.getTime();
    this.getHitokoto();
    setInterval(this.getTime, 1000);
  },
  methods: {
    getHitokoto() {
      axios
          .get("https://v1.hitokoto.cn/")
          .then((response) => {
            this.hitokoto = response.data.hitokoto;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    getTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      let hours = ("0" + date.getHours()).slice(-2);
      let minutes = ("0" + date.getMinutes()).slice(-2);
      let seconds = ("0" + date.getSeconds()).slice(-2);
      this.time = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
    }
  }
}
</script>