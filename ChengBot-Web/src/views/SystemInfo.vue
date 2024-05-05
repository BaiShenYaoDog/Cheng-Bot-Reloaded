<script setup>
import "../assets/scss/SystemInfo.scss"
import {ChengBotServerVersion, ChengBotVersion} from "../router/index.js";
</script>

<template>
  <div class="container">
    <div class="Info">
      <div class="Items">
        <div class="Title">
          <div class="Icons">
            <img alt="" src="../assets/icons/CPU.png">
          </div>
          <div style="padding-left: 15px">
            <h2>CPU | 中央处理器</h2>
            <h4>{{ cpuName }}</h4>
          </div>
        </div>
        <div class="Usage">
          <h1>
            <span v-for="(char, index) in cpuUsageString" :key="index"
                  :style="{color: (char === '0' && index <= (3-cpuUsage.toString().length)) ? 'rgba(44,172,255,0.3)' : 'rgba(44,172,255,1)'}">
              {{ char }}
            </span>
          </h1>
        </div>
        <div class="UsageBar">
          <div class="Bar">
            <p class="BarText">CPU占用率</p>
            <div style="display: flex; width: 150px;">
              <div :style="{ flex: cpuUsage,transition: 'flex 1s ease-in-out' }" class="UseBar"></div>
              <div :style="{ flex: 100-cpuUsage }" class="FreeBar"></div>
            </div>
          </div>
        </div>
        <div class="Detail">
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                {{ cpuCores }}核心 {{ cpuThreads }}线程
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                {{ cpuSpeed }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                {{ cpuBit }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="Items">
        <div class="Title">
          <div class="Icons">
            <img alt="" src="../assets/icons/RAM.png">
          </div>
          <div style="padding-left: 15px">
            <h2>RAM | 物理内存</h2>
            <h4>未知</h4>
          </div>
        </div>
        <div class="Usage">
          <h1>
            <span v-for="(char, index) in ramUsageString" :key="index"
                  :style="{color: (char === '0' && index <= (3-ramUsage.toString().length)) ? 'rgba(44,172,255,0.3)' : 'rgba(44,172,255,1)' }">
              {{ char }}
            </span>
          </h1>
        </div>
        <div class="UsageBar">
          <div class="Bar">
            <p class="BarText">RAM占用率</p>
            <div style="display: flex; width: 150px;">
              <div :style="{ flex: ramUsage,transition: 'flex 1s ease-in-out'}" class="UseBar"></div>
              <div :style="{ flex: 100-ramUsage }" class="FreeBar"></div>
            </div>
          </div>
        </div>
        <div class="Detail">
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                总量: {{ ramTotal }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                使用: {{ ramUse }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                可用: {{ ramFree }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="Items">
        <div class="Title">
          <div class="Icons">
            <img alt="" src="../assets/icons/PRAM.png">
          </div>
          <div style="padding-left: 15px">
            <h2>PRAM | 虚拟内存</h2>
            <h4>未知</h4>
          </div>
        </div>
        <div class="Usage">
          <h1>
            <span v-for="(char, index) in pramUsageString" :key="index"
                  :style="{color: (char === '0' && index <= (3-pramUsage.toString().length)) ? 'rgba(44,172,255,0.3)' : 'rgba(44,172,255,1)' }">
              {{ char }}
            </span>
          </h1>
        </div>
        <div class="UsageBar">
          <div class="Bar">
            <p class="BarText">PRAM占用率</p>
            <div style="display: flex; width: 150px;">
              <div :style="{ flex: pramUsage,transition: 'flex 1s ease-in-out' }" class="UseBar"></div>
              <div :style="{ flex: 100-pramUsage }" class="FreeBar"></div>
            </div>
          </div>
        </div>
        <div class="Detail">
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                总量: {{ pramTotal }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                使用: {{ pramUse }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                可用: {{ pramFree }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Info">
      <div class="Items">
        <div class="Title">
          <div class="Icons">
            <img alt="" src="../assets/icons/DISK.png">
          </div>
          <div style="padding-left: 15px">
            <h2>DISK | 磁盘</h2>
            <h4>未知</h4>
          </div>
        </div>
        <div class="Usage">
          <h1>
            <span v-for="(char, index) in diskUsageString" :key="index"
                  :style="{color: (char === '0' && index <= (3-diskUsage.toString().length)) ? 'rgba(44,172,255,0.3)' : 'rgba(44,172,255,1)' }">
              {{ char }}
            </span>
          </h1>
        </div>
        <div class="UsageBar">
          <div class="Bar">
            <p class="BarText">磁盘空间占用率</p>
            <div style="display: flex; width: 150px;">
              <div :style="{ flex: diskUsage,transition: 'flex 1s ease-in-out' }" class="UseBar"></div>
              <div :style="{ flex: 100-diskUsage }" class="FreeBar"></div>
            </div>
          </div>
        </div>
        <div class="Detail">
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                总量: {{ diskTotal }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                使用: {{ diskUse }}
              </h4>
            </div>
          </div>
          <div class="DetailItems">
            <div style="text-align:center; padding-top: 10px">
              <h4 style="color: #efefef;">
                可用: {{ diskFree }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="Items">
        <div class="Title">
          <div class="Icons">
            <img alt="" src="../assets/icons/SYSTEM.png">
          </div>
          <div style="padding-left: 15px">
            <h2>其他信息</h2>
            <h4>{{ hitokoto }}</h4>
          </div>
        </div>
        <div class="SubTitle">
          <h3>系统: {{ systemName }}</h3>
          <h3>Cheng-Bot版本: {{ ChengBotVersion }}</h3>
          <h3>Cheng-Bot后端版本: {{ ChengBotServerVersion }}</h3>
          <h3>Cheng-Bot作者: 白神遥桌上の橙汁</h3>
        </div>
        <div class="SubTitle" style="padding-top: 30px">
          <h3>感谢使用Cheng-Bot</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cpuName: "i0 5835",
      cpuUsageString: "0%",
      cpuUsage: 0,
      cpuSpeed: "0.5835 GHz",
      cpuBit: "64位",
      cpuCores: "1",
      cpuThreads: "1",

      ramUsageString: "0%",
      ramUsage: 0,
      ramTotal: "1 Gib",
      ramUse: "0 Gib",
      ramFree: "1 Gib",

      pramUsageString: "0%",
      pramUsage: 0,
      pramTotal: "1 Gib",
      pramUse: "0 Gib",
      pramFree: "1 Gib",

      systemName: "白神OS",

      diskUsageString: "0%",
      diskUsage: 0,
      diskTotal: "1 Gib",
      diskUse: "0 Gib",
      diskFree: "1 Gib",

      hitokoto: "一言获取失败!",
    };
  },
  mounted() {
    this.getSystemInfo();
    this.getHitokoto();
    setInterval(this.getSystemInfo, 1000);
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
    getSystemInfo() {
      axios
          .get("http://127.0.0.1:5678/api/SystemInfo/get")
          .then((response) => {
            this.cpuName = response.data.data.cpu.name;
            this.cpuSpeed = response.data.data.cpu.speed;
            this.cpuBit = response.data.data.cpu.bit;
            this.cpuCores = response.data.data.cpu.cores;
            this.cpuThreads = response.data.data.cpu.threads;

            this.ramTotal = response.data.data.ram.total;
            this.ramUse = response.data.data.ram.use;
            this.ramFree = response.data.data.ram.free;

            this.pramTotal = response.data.data.pram.total;
            this.pramUse = response.data.data.pram.use;
            this.pramFree = response.data.data.pram.free;

            this.systemName = response.data.data.system.name;

            this.diskTotal = response.data.data.disk.total;
            this.diskUse = response.data.data.disk.use;
            this.diskFree = response.data.data.disk.free;

            {
              let CPUUsage = response.data.data.cpu.usage;
              this.cpuUsage = CPUUsage;
              while (CPUUsage.toString().length < 3) {
                CPUUsage = "0" + CPUUsage;
              }
              this.cpuUsageString = CPUUsage + "%";
            }
            {
              let RAMUsage = response.data.data.ram.usage;
              this.ramUsage = RAMUsage;
              while (RAMUsage.toString().length < 3) {
                RAMUsage = "0" + RAMUsage;
              }
              this.ramUsageString = RAMUsage + "%";
            }
            {
              let PRAMUsage = response.data.data.pram.usage;
              this.pramUsage = PRAMUsage;
              while (PRAMUsage.toString().length < 3) {
                PRAMUsage = "0" + PRAMUsage;
              }
              this.pramUsageString = PRAMUsage + "%";
            }
            {
              let DISKUsage = response.data.data.disk.usage;
              this.diskUsage = DISKUsage;
              while (DISKUsage.toString().length < 3) {
                DISKUsage = "0" + DISKUsage;
              }
              this.diskUsageString = DISKUsage + "%";
            }
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
};
</script>