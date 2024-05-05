<script setup>
import '../assets/scss/ServerInfo.scss'
import {ChengBotServerVersion, ChengBotVersion} from "../router/index.js";
</script>

<template>
  <div class="container">
    <div class="ServerInfo">
      <div v-for="(item, index) in server" :key="index" class="Infos">
        <div v-if="data[item.ip]" class="Item">
          <div class="Icon">
            <img
                :src="(data[item.ip].data.favicon !== null && data[item.ip].data.favicon !== undefined) ? data[item.ip].data.favicon : '../assets/icons/DefaultServerIcon.png'"
                alt="">
          </div>
          <div class="Info">
            <div class="Title">
              <div class="Name">
                <h2>{{ data[item.ip].name }}</h2>
                <h2 :style="{color: data[item.ip].data !== '无法访问目标服务器!' ? '#00FF6B' : '#F05678'}">
                  {{ data[item.ip].data !== '无法访问目标服务器!' ? '[在线]' : '[离线]' }}
                </h2>
              </div>
              <div class="Stats">
                <h2 :style="{color: data[item.ip].data !== '无法访问目标服务器!' ? '#00FF6B' : '#F05678'}">
                  {{
                    data[item.ip].data !== '无法访问目标服务器!' ? data[item.ip].data.players.online + '/' + data[item.ip].data.players.max : ''
                  }}
                </h2>
              </div>
            </div>
            <div v-if="data[item.ip].data !== '无法访问目标服务器!'" class="Description"
                 v-html="getDescription(data[item.ip].data.description)"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ChengBotInfo">
      <div class="Text">
        <h3>Cheng-Bot版本: {{ ChengBotVersion }}</h3>
        <h3>Cheng-Bot后端版本: {{ ChengBotServerVersion }}</h3>
        <h3>Cheng-Bot作者: 白神遥桌上の橙汁</h3>
      </div>
      <div class="Text" style="padding-top: 30px">
        <h3>感谢使用Cheng-Bot</h3>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {Base64} from "js-base64";

export default {
  name: 'App',
  data() {
    return {
      server: [],
      data: {},
      colorCodes: {
        '§0': '#000000', // Black
        '§1': '#0000AA', // Dark Blue
        '§2': '#00AA00', // Dark Green
        '§3': '#00AAAA', // Dark Aqua
        '§4': '#AA0000', // Dark Red
        '§5': '#AA00AA', // Dark Purple
        '§6': '#FFAA00', // Gold
        '§7': '#AAAAAA', // Gray
        '§8': '#555555', // Dark Gray
        '§9': '#5555FF', // Blue
        '§a': '#55FF55', // Green
        '§b': '#55FFFF', // Aqua
        '§c': '#FF5555', // Red
        '§d': '#FF55FF', // Light Purple
        '§e': '#FFFF55', // Yellow
        '§f': '#FFFFFF', // White
      },
    }
  },
  methods: {
    getServerInfo(Server) {
      axios.get(`http://127.0.0.1:5678/api/ServerInfo/get?server=${Server.ip}`)
          .then(response => {
            this.data[Server.ip] = {
              name: Server.name,
              data: response.data.data
            };
          })
          .catch(error => {
            console.error(error);
          });
    },
    getDescription(MotdData) {
      if (MotdData.extra) {
        return MotdData.extra.map(item => {
          return `<span style="color: ${item.color}; font-weight: ${item.bold ? 'bold' : 'normal'};">${item.text}</span>`;
        }).join('');
      } else {
        let lines = MotdData.text.split('\n');
        return lines.map(line => {
          let html = '';
          let color = '#FFFFFF';
          for (let i = 0; i < line.length; i++) {
            if (line[i] === '§') {
              color = this.colorCodes[line.slice(i, i + 2)] || color;
              i++;
            } else {
              html += `<span style="color: ${color};">${line[i]}</span>`;
            }
          }
          return `<div>${html}</div>`;
        }).join('');
      }
    },
  },
  created() {
    if (this.$route.query.Server) {
      console.log(Base64.decode(this.$route.query.Server.replace(' ', '+')))
      this.server = JSON.parse(Base64.decode(this.$route.query.Server.replace(' ', '+')));
      this.server.forEach(this.getServerInfo);
    }
  }
}
</script>