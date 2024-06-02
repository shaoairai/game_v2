<script>
import { RouterLink } from "vue-router";
import { confirmPw } from "@/utils/localStoragePw";
import tempo_words_in_a_hurry from "@/assets/countDown/tempo_words_in_a_hurry.mp3";

// firebase
import { db } from "@/utils/firebase.js";
import { ref, onValue } from "firebase/database";
import firebaseCrud from "@/utils/firebaseCrud";

export default {
  mixins: [firebaseCrud],
  data() {
    return {
      // 倒數計時
      // 初始時間
      initSec: 0,
      // 修改初始時間
      initSecTmp: 0,
      sec: 0,
      timer: null,

      // 單元團體記分板
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

      // topicArr: [
      //   "1. 造詞題目：陸地上的動物",
      //   "2. 造詞題目：甜的食物",
      //   "3. 造詞題目：方形的東西",
      //   "4. 造詞題目：國家或地名",
      //   "5. 造詞題目：家裡看得到的東西",
      // ],
      currentTopic: 0,

      // 音訊
      tempo_words_in_a_hurry: tempo_words_in_a_hurry,

      // 遠端控制路由
      controlRouter: "",
      // 遠端播放
      playMusic: false,
      // 題目
      isChangeTopics: false,
      topic: "預設題目",
      leftText: "左題目",
      rightText: "右題目",
      topicTmp: "",
      leftTextTmp: "",
      rightTextTmp: "",
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
      const vm = this;
      vm.sec -= 1;
      if (vm.sec > 0) {
        vm.timer = setTimeout(vm.countDwn, 1000);
      }
      // 切換按鈕
      vm.play = false;
      vm.pause = true;

      vm.updateData({ sec: vm.sec }, "/jump/");
    },
    // 暫停
    countPause() {
      const vm = this;
      clearTimeout(vm.timer); // 停止計時
      // 切換按鈕
      this.play = true;
      this.pause = false;
    },
    // 重新計時
    countReset() {
      const vm = this;
      clearTimeout(vm.timer); // 停止計時
      this.play = true;
      this.pause = false;

      vm.updateData({ sec: vm.initSec }, "/jump/");
    },
    // 共有幾隊
    addGroup() {
      // 團體分數物件
      const groupObj = {
        id: new Date().getTime(),
        score: 0,
      };
      this.groupList.push(groupObj);
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
      const vm = this;
      vm.updateData(
        {
          groupList: vm.groupList,
          topic: vm.topic,
          leftText: vm.leftText,
          rightText: vm.rightText,
          initSec: vm.initSec,
        },
        "/jump/"
      );

      // localStorage.setItem("jumpGroup", JSON.stringify(this.groupList));
    },
    // 開始播放
    playAudio() {
      if (this.$refs.audioRef) {
        this.$refs.audioRef.play();
        this.play = false;
        this.pause = true;
      }
    },
    // 重設播放
    resetAudio() {
      if (this.$refs.audioRef) {
        this.$refs.audioRef.pause();
        this.$refs.audioRef.currentTime = 0;
        this.play = true;
        this.pause = false;
      }
    },
    // 換題目
    changeTopics() {
      const vm = this;
      vm.isChangeTopics = true;
      vm.topicTmp = vm.topic;
      vm.leftTextTmp = vm.leftText;
      vm.rightTextTmp = vm.rightText;
      vm.initSecTmp = vm.initSec;
    },
    // 確定題目
    confirmTopics() {
      const vm = this;
      vm.isChangeTopics = false;
      vm.topic = vm.topicTmp;
      vm.leftText = vm.leftTextTmp;
      vm.rightText = vm.rightTextTmp;
      vm.initSec = vm.initSecTmp;

      vm.saveRank();
    },
    // 即時監聽讀取
    onReadData() {
      const vm = this;
      onValue(ref(db), (snapshot) => {
        console.log(snapshot.val());

        // 避免空值
        if (!snapshot.val().jump.groupList) {
          vm.groupList = [];
        } else {
          vm.groupList = snapshot.val().jump.groupList;
        }

        vm.sec = snapshot.val().jump.sec;
        vm.initSec = snapshot.val().jump.initSec;
        vm.topic = snapshot.val().jump.topic;
        vm.leftText = snapshot.val().jump.leftText;
        vm.rightText = snapshot.val().jump.rightText;

        // 播放音樂
        vm.playMusic = snapshot.val().jump.playMusic;
        vm.remotePlay();

        // 路由判斷
        vm.controlRouter = snapshot.val().router.controlRouter;
        const fullPath = vm.$route.fullPath;
        const pathSegments = fullPath.split("/");
        if (vm.controlRouter != pathSegments[1]) {
          vm.$router.push(vm.controlRouter);
        }
      });
    },
    // 按下播放
    remoteClickPlay() {
      const vm = this;
      if (!vm.playMusic) {
        vm.playMusic = true;
        vm.updateData({ playMusic: vm.playMusic, sec: vm.sec }, "/jump/");
        vm.countDwn();
        vm.playAudio();
      } else {
        vm.playMusic = false;
        vm.countPause();
        vm.resetAudio();
        vm.updateData({ playMusic: vm.playMusic, sec: vm.sec }, "/jump/");
      }
    },
    // 遠端播放
    remotePlay() {
      const vm = this;
      if (vm.playMusic) {
        vm.playAudio();
      } else {
        vm.resetAudio();
      }
    },
  },
  computed: {},
  watch: {},
  components: { RouterLink },
  mounted() {
    if (confirmPw(this.$router)) {
      this.onReadData();
    }
  },
};
</script>

<template>
  <div>
    <div class="bg">
      <!-- 單元團體記分板 -->
      <div id="groupScoreboard" class="w-100">
        <div class="container">
          <!-- 倒數計時器 -->
          <div
            class="countDownArea d-flex flex-wrap justify-content-center align-items-center pb-2"
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
              @click="remoteClickPlay"
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
              @click="remoteClickPlay"
              v-if="pause"
            >
              <font-awesome-icon icon="fa-solid fa-pause" />
            </button>
          </div>

          <!-- 換題目 -->
          <div
            class="d-flex justify-content-end align-items-center"
            style="margin: 8px 2%"
          >
            <div class="me-3">
              <div v-if="isChangeTopics">
                <input
                  type="number"
                  class="form-control"
                  v-model="initSecTmp"
                />
              </div>
              <div v-else>限時 {{ initSec }} 秒</div>
            </div>

            <div>
              <div
                v-if="!isChangeTopics"
                class="btn btn-primary"
                @click="changeTopics"
              >
                <font-awesome-icon icon="fa-regular fa-pen-to-square" />
              </div>
              <div v-else class="btn btn-primary" @click="confirmTopics">
                <font-awesome-icon icon="fa-solid fa-check" />
              </div>
            </div>
          </div>
          <!-- 題目 -->
          <div class="topic-outer fs-3">
            <div
              class="topic topic-bg d-flex align-items-center justify-content-center"
            >
              <div v-if="isChangeTopics">
                <input type="text" class="form-control" v-model="topicTmp" />
              </div>
              <div v-else>{{ topic }}</div>
            </div>
          </div>

          <!-- 左右題目 -->
          <div class="d-flex flex-row w-100">
            <div
              class="center-line d-flex justify-content-center align-items-center py-5 w-100 fs-2"
            >
              <div v-if="isChangeTopics">
                <input type="text" class="form-control" v-model="leftTextTmp" />
              </div>
              <div v-else>
                {{ leftText }}
              </div>
            </div>
            <div
              class="d-flex justify-content-center align-items-center py-5 w-100 fs-2"
            >
              <div v-if="isChangeTopics">
                <input
                  type="text"
                  class="form-control"
                  v-model="rightTextTmp"
                />
              </div>
              <div v-else>
                {{ rightText }}
              </div>
            </div>
          </div>

          <!-- 標題 -->
          <div class="teamTitle fs-3 text-center text-white py-1 mb-4">
            跳跳 Tempo | 團隊分數
          </div>
          <!-- 顯示隊伍 -->
          <div
            id="teamDisplay"
            class="d-flex justify-content-center flex-column flex-md-row"
          >
            <div
              v-for="(group, index) in groupList"
              :key="group.id"
              :class="['flex-fill', teamColor[index]]"
            >
              <div class="teamBg position-relative my-1">
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
            <transition-group name="set-btn">
              <div class="setting-btns" v-if="setBtn">
                <!-- 啟用/關閉新增團隊按鈕 -->
                <button
                  type="button"
                  class="btn btn-primary ms-2"
                  @click="addGroup(), saveRank()"
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
            ></transition-group>
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
  // height: 74px;
  text-align: center;
  position: relative;
  margin: 0 auto;
}
.topic-bg {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  // height: 100%;
  border-radius: 8px;
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

/* 中線 */
.center-line {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 3px;
    height: 80%;
    background: #3c3c3c;
    border-radius: 100px;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
