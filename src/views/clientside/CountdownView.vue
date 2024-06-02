<script>
import { RouterLink } from "vue-router";
import { confirmPw } from "@/utils/localStoragePw";
import tempo_words_in_a_hurry from "@/assets/countDown/tempo_words_in_a_hurry.mp3";

export default {
  data() {
    return {
      // 倒數計時
      sec: 20,
      timer: null,

      // 單元團體記分板
      inputText: "",
      groupList: [],
      teamColor: [
        "teamRed",
        "teamGreen",
        "teamBlue",
        "teamPurple",
        "teamOrange",
        "teamCyan",
      ],
      // 是否顯示減分按鈕
      minusBtnDisplay: false,
      // 是否顯示垃圾桶按鈕
      delBtnDisplay: false,
      // 設定按鈕
      setBtn: false,

      // 倒數計時器
      play: true,
      pause: false,

      // 題目
      topicArr: [
        "1. 造詞題目：陸地上的動物",
        "2. 造詞題目：甜的食物",
        "3. 造詞題目：方形的東西",
        "4. 造詞題目：國家或地名",
        "5. 造詞題目：家裡看得到的東西",
      ],
      currentTopic: 0,

      // 音訊
      tempo_words_in_a_hurry: tempo_words_in_a_hurry,
    };
  },
  methods: {
    // 音樂
    playAudio() {
      this.$refs.audioRef.play();
    },
    pauseAudio() {
      this.$refs.audioRef.pause();
      this.$refs.audioRef.currentTime = 0;
    },
    // 倒數計時
    countDwn() {
      this.sec -= 1;
      if (this.sec > 0) {
        this.timer = setTimeout(this.countDwn, 1000);
      }
      // 切換按鈕
      this.play = false;
      this.pause = true;
    },
    // 暫停
    countPause() {
      clearTimeout(this.timer); // 停止計時
      // 切換按鈕
      this.play = true;
      this.pause = false;
    },
    // 重新計時
    countReset() {
      clearTimeout(this.timer); // 停止計時
      this.sec = 20;
      this.play = true;
      this.pause = false;
    },
    // 共有幾隊
    addGroup(inputText) {
      // 團體分數物件
      const groupObj = {
        id: new Date().getTime(),
        team: this.inputText,
        score: 0,
      };
      this.groupList.push(groupObj);
      this.inputText = "";
    },
    // 加分
    plusNum(item) {
      this.groupList.forEach((el, i) => {
        if (item.id == el.id) {
          this.groupList[i].score += 1;
        }
      });
    },
    // 減分
    minusNum(item) {
      this.groupList.forEach((el, i) => {
        if (item.id == el.id) {
          this.groupList[i].score -= 1;
        }
      });
    },
    // 按下刪除
    removeData(item) {
      this.groupList.forEach((el, i) => {
        if (item.id == el.id) {
          this.groupList.splice(i, 1);
        }
      });
    },
    // 存檔
    saveRank() {
      localStorage.setItem("countDownGroup", JSON.stringify(this.groupList));
    },
    // 上一題
    preTopic() {
      if (this.currentTopic > 0) {
        this.currentTopic -= 1;
      } else {
        this.currentTopic = this.topicArr.length - 1;
      }
    },
    // 下一題
    nextTopic() {
      if (this.currentTopic < this.topicArr.length - 1) {
        this.currentTopic += 1;
      } else {
        this.currentTopic = 0;
      }
    },
  },
  computed: {},
  watch: {},
  components: { RouterLink },
  mounted() {
    if (confirmPw(this.$router)) {
      // 一開始先讀取 localStorage
      this.groupList = JSON.parse(localStorage.getItem("countDownGroup"));
      console.log(this.groupList);
      if (!this.groupList) {
        this.groupList = [];
        console.log("this.groupList");
        console.log(this.groupList);
      }
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
        <div class="container">
          <!-- 題目 -->
          <div class="topic-outer fs-3">
            <div class="topic-bg"></div>
            <div
              class="topic position-absolute top-50 start-50 translate-middle"
            >
              {{ topicArr[currentTopic] }}
            </div>
            <div class="pre-topic" @click="preTopic">
              <font-awesome-icon icon="fa-solid fa-circle-left" />
            </div>
            <div class="next-topic" @click="nextTopic">
              <font-awesome-icon icon="fa-solid fa-circle-right" />
            </div>
          </div>
          <!-- 倒數計時器 -->
          <div
            class="countDownArea d-flex justify-content-center align-items-center pb-2"
          >
            <!-- 重新計時 -->
            <button
              type="button"
              class="btn btn-primary ms-3"
              style="width: 50px; height: 50px; border-radius: 100px"
              @click="countReset(), pauseAudio()"
            >
              <font-awesome-icon icon="fa-solid fa-rotate-right" />
            </button>
            <div id="sec" class="sec">{{ sec }}</div>
            <!-- 開始計時 -->
            <button
              type="button"
              class="btn btn-primary ms-3"
              style="width: 50px; height: 50px; border-radius: 100px"
              @click="countDwn(), playAudio()"
              v-if="play"
            >
              <font-awesome-icon icon="fa-solid fa-play" />
            </button>
            <!-- 音樂播放 -->
            <audio
              :src="tempo_words_in_a_hurry"
              controls
              ref="audioRef"
              class="d-none"
            ></audio>
            <!-- 暫停計時 -->
            <button
              type="button"
              class="btn btn-primary ms-3"
              style="width: 50px; height: 50px"
              @click="countPause(), pauseAudio()"
              v-if="pause"
            >
              <font-awesome-icon icon="fa-solid fa-pause" />
            </button>
          </div>
          <!-- 標題 -->
          <div class="teamTitle fs-3 text-center text-white py-1 mb-4">
            急中生字 | 團隊分數
          </div>
          <!-- 顯示隊伍 -->
          <div id="teamDisplay" class="d-flex justify-content-center">
            <div
              v-for="(group, index) in groupList"
              :key="group.id"
              :class="['flex-fill', teamColor[index]]"
            >
              <div class="teamBg position-relative">
                <img
                  src="@/assets/img/santa.png"
                  alt="聖誕老人隊"
                  width="65px"
                  v-if="index == 0"
                />
                <img
                  src="@/assets/img/elk.png"
                  alt="麋鹿隊"
                  width="65px"
                  v-if="index == 1"
                />
                <div
                  class="teamScore position-absolute top-50 start-50 translate-middle"
                >
                  {{ group.score }}
                </div>
                <!-- 加分 -->
                <button
                  type="button"
                  class="btn btn-primary"
                  style="
                    position: absolute;
                    right: 4px;
                    bottom: 4px;
                    background: #f8b01e;
                    border-radius: 100px;
                    border: unset;
                  "
                  @click="plusNum(group), saveRank()"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
                <!-- 減分 -->
                <div style="position: absolute; left: 4px; bottom: 4px">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="minusNum(group), saveRank()"
                    v-if="minusBtnDisplay"
                  >
                    <font-awesome-icon icon="fa-solid fa-minus" />
                  </button>
                  <!-- 刪除 -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="removeData(group), saveRank()"
                    v-if="delBtnDisplay"
                  >
                    <font-awesome-icon icon="fa-regular fa-trash-can" />
                  </button>
                </div>
              </div>
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

            <!-- 設定按鈕 -->
            <button
              type="button"
              class="btn btn-primary set-btn"
              @click="setBtn = !setBtn"
            >
              <font-awesome-icon icon="fa-solid fa-gear" />
            </button>
            <!-- 設定按鈕 以外的按鈕 -->
            <Transition-group name="set-btn">
              <div class="setting-btns" v-if="setBtn">
                <!-- 啟用/關閉新增團隊按鈕 -->
                <button
                  type="button"
                  class="btn btn-primary ms-2"
                  @click="addGroup(inputText), saveRank()"
                >
                  <font-awesome-icon icon="fa-solid fa-user-plus" />
                </button>
                <!-- 啟用/關閉減分按鈕 -->
                <button
                  type="button"
                  class="btn btn-primary ms-2"
                  @click="minusBtnDisplay = !minusBtnDisplay"
                >
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </button>
                <!-- 啟用/關閉移除按鈕 -->
                <button
                  type="button"
                  class="btn btn-primary ms-2"
                  @click="delBtnDisplay = !delBtnDisplay"
                >
                  <font-awesome-icon icon="fa-regular fa-trash-can" />
                </button></div
            ></Transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
