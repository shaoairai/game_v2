<script>
import { RouterLink } from "vue-router";
import tempo_solitaire from "@/assets/wordChain/tempo_solitaire.mp3";

export default {
  data() {
    return {
      // 音樂播放速度
      playbackRate: 1,
      // 播放或暫停
      play: true,
      pause: false,

      // 所有人
      list: [],

      // 音訊
      tempo_solitaire: tempo_solitaire,
    };
  },
  methods: {
    // 開始播放
    playAudio() {
      this.$refs.audioRef.play();
      this.play = false;
      this.pause = true;
    },
    // 暫停播放
    pauseAudio() {
      this.$refs.audioRef.pause();
      this.play = true;
      this.pause = false;
    },
    // 暫停播放
    resetAudio() {
      this.$refs.audioRef.pause();
      this.$refs.audioRef.currentTime = 0;
      this.play = true;
      this.pause = false;
    },
    // 加速
    upPlayRate() {
      if (this.playbackRate <= 2) {
        this.playbackRate += 0.1;
        console.log(this.playbackRate);
        this.$refs.audioRef.playbackRate = this.playbackRate;
      }
    },
    // 降速
    dwnPlayRate() {
      if (this.playbackRate > 0.2) {
        this.playbackRate -= 0.1;
        console.log(this.playbackRate);
        this.$refs.audioRef.playbackRate = this.playbackRate;
      }
    },
    // 加命
    plusLife(item) {
      this.list.forEach((el, i) => {
        if (el.id === item.id) {
          this.list[i].life += 1;
        }
      });
    },
    // 減命
    minusLife(item) {
      this.list.forEach((el, i) => {
        if (el.id === item.id) {
          this.list[i].life -= 1;
        }
      });
    },
    // 存檔
    saveRank() {
      console.log("存檔");
      localStorage.setItem("listData", JSON.stringify(this.list));
    },
  },
  computed: {},
  watch: {},
  components: {
    RouterLink,
  },
  mounted() {
    //一開始先讀取 localStorage
    let preloadData = JSON.parse(localStorage.getItem("listData"));
    // 如果有資料
    if (preloadData) {
      this.list = JSON.parse(localStorage.getItem("listData"));
    }
  },
};
</script>

<template>
  <div>
    <div class="bg">
      <!-- 單元團體記分板 -->
      <div
        id="groupScoreboard"
        class="position-absolute top-50 start-50 translate-middle w-100"
      >
        <!-- 命數 -->
        <div class="d-flex flex-column flex-wrap px-5" style="height: 400px">
          <div
            class="d-flex align-items-center p-2 m-1 rounded-3"
            style="background-color: rgba(255, 255, 255, 0.5)"
            v-for="item in list"
            :key="item.id"
          >
            <div class="d-inline-block flex-fill fs-5">
              <div class="d-inline-block rank-num" v-if="item.team === 'A'">
                <img src="@/assets/img/santa.png" style="width: 40px" />
              </div>
              <div class="d-inline-block rank-num" v-if="item.team === 'B'">
                <img src="@/assets/img/elk.png" style="width: 40px" />
              </div>
              {{ item.text }}
            </div>
            <template v-if="item.life > 0">
              <div
                class="d-inline-block"
                v-for="hearts in item.life"
                :key="hearts"
              >
                <font-awesome-icon
                  icon="fa-solid fa-heart"
                  class="fs-2 m-1"
                  style="color: red"
                />
              </div>
            </template>
            <template v-if="item.life <= 0">
              <font-awesome-icon
                icon="fa-solid fa-skull-crossbones"
                class="fs-2 m-1"
                style="color: black"
              />
            </template>
            <button
              type="button"
              class="btn btn-primary ms-1"
              @click="minusLife(item), saveRank()"
            >
              <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <button
              type="button"
              class="btn btn-primary ms-1"
              @click="plusLife(item), saveRank()"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
        </div>
        <!-- 標題 -->
        <div class="teamTitle fs-3 text-center text-white py-1 mb-5 w-50">
          Tempo 遊戲 | 團隊 + 個人賽
        </div>
        <div class="container w-50">
          <!-- Tempo音樂 -->
          <div
            class="countDownArea d-flex justify-content-center align-items-center flex-column pb-2"
          >
            <div class="d-flex align-items-center">
              <!-- 歸零 -->
              <button
                type="button"
                class="btn btn-primary mx-3"
                style="width: 50px; height: 50px; border-radius: 100px"
                @click="resetAudio"
              >
                <font-awesome-icon icon="fa-solid fa-rotate-right" />
              </button>
              <div>
                <audio :src="tempo_solitaire" controls ref="audioRef"></audio>
              </div>
              <!-- 開始播放 -->
              <button
                type="button"
                class="btn btn-primary ms-3"
                style="width: 50px; height: 50px; border-radius: 100px"
                @click="playAudio"
                v-if="play"
              >
                <font-awesome-icon icon="fa-solid fa-play" />
              </button>
              <!-- 暫停播放 -->
              <button
                type="button"
                class="btn btn-primary ms-3"
                style="width: 50px; height: 50px"
                @click="pauseAudio"
                v-if="pause"
              >
                <font-awesome-icon icon="fa-solid fa-pause" />
              </button>
            </div>
            <div class="d-flex align-items-center pt-3">
              <!-- 播放速度 -->
              <div class="pe-3">
                播放速度：
                <span>{{
                  (Math.floor(playbackRate * 10) / 10).toFixed(1)
                }}</span>
              </div>
              <button
                type="button"
                class="btn btn-primary rounded-circle me-2"
                @click="upPlayRate"
              >
                <font-awesome-icon icon="fa-solid fa-up-long" />
              </button>
              <button
                type="button"
                class="btn btn-primary rounded-circle"
                @click="dwnPlayRate"
              >
                <font-awesome-icon icon="fa-solid fa-down-long" />
              </button>
            </div>
          </div>

          <!-- 下排按鈕 -->
          <div class="container all-set-btns d-flex pt-2">
            <!-- 回首頁 -->
            <RouterLink to="/">
              <button type="button" class="btn btn-primary set-btn me-2">
                <font-awesome-icon icon="fa-solid fa-house" />
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
body {
  font-family: "Noto Sans TC", sans-serif;
}
/* 背景 */
.bg {
  height: 100vh;
  width: 100%;
  background-image: url("@/assets/img/bg.jpg");
  background-size: cover;
  background-position: center;
}

/* 題目 */
.topic {
  font-size: 42px;
  font-weight: 600;
  width: 100%;
}
.topic-outer {
  width: 96%;
  height: 74px;
  text-align: center;
  position: relative;
  margin: 0 auto;
}
.topic-bg {
  background: white;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

/* 上下一題 */
.pre-topic,
.next-topic {
  position: absolute;
  top: 16px;
  color: #3c3c3c;
}
.pre-topic:hover,
.next-topic:hover {
  cursor: pointer;
  color: #0d6efd;
}
.pre-topic {
  left: 8px;
}
.next-topic {
  right: 8px;
}
.fa-circle-left,
.fa-circle-right {
  font-size: 42px;
}

/* 倒數計時 */
.sec {
  font-size: 144px;
  padding: 0 60px;
}

/* 團隊分數標題 */
.teamTitle {
  width: 96%;
  margin: 0 auto;
  background: #3c3c3c;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #22222299;
}

/* 分數背景 */
.teamBg {
  background: #f9f9f9;
  border-radius: 8px;
  height: 200px;
  margin: 0px 20px;
}
.teamScore {
  text-align: center;
  font-size: 72px;
}

/* 各隊顏色 */
.teamRed .teamBg {
  border: 8px solid #ee3636;
}

.teamBlue .teamBg {
  border: 8px solid #3030d1;
}

.teamGreen .teamBg {
  border: 8px solid green;
}

.teamPurple .teamBg {
  border: 8px solid #8b3bbb;
}

.teamOrange .teamBg {
  border: 8px solid #e18c0b;
}

.teamCyan .teamBg {
  border: 8px solid #02b5b2;
}

/* 設定按鈕 */
.set-btn {
  height: 40px;
  border-radius: 100px;
  background: #777777;
  border: unset;
}

/* 動畫 */
.set-btn-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.set-btn-enter-to {
  opacity: 1;
}
.set-btn-enter-active {
  transition: all 0.25s ease;
  transition-timing-function: ease-in-out;
}
</style>
