<script>
import { RouterLink } from "vue-router";
import hand from "@/assets/charades/hand.mp3";

// firebase
import { db } from "@/utils/firebase.js";
import { ref, onValue } from "firebase/database";
import firebaseCrud from "@/utils/firebaseCrud";

export default {
  mixins: [firebaseCrud],
  data() {
    return {
      // 倒數計時
      sec: 20,
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
      // 播放或暫停
      play: true,
      pause: false,

      // 音訊
      hand: hand,

      // 遠端控制路由
      controlRouter: "",
      // 遠端播放
      playMusic: false,
    };
  },
  methods: {
    // 開始播放
    playAudio() {
      if (this.$refs.audioRef) {
        this.$refs.audioRef.play();
        this.play = false;
        this.pause = true;
      }
    },
    // 暫停播放
    pauseAudio() {
      if (this.$refs.audioRef) {
        this.$refs.audioRef.pause();
        this.play = true;
        this.pause = false;
      }
    },
    // 暫停播放
    resetAudio() {
      if (this.$refs.audioRef) {
        this.$refs.audioRef.pause();
        this.$refs.audioRef.currentTime = 0;
        this.play = true;
        this.pause = false;
      }
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
      vm.updateData({ groupList: vm.groupList }, "/charades/");
      // localStorage.setItem("charadesGroup", JSON.stringify(this.groupList));
    },
    // 即時監聽讀取
    onReadData() {
      const vm = this;
      onValue(ref(db), (snapshot) => {
        console.log(snapshot.val());

        // 避免空值
        if (!snapshot.val().charades.groupList) {
          vm.groupList = [];
        } else {
          vm.groupList = snapshot.val().charades.groupList;
        }

        // 播放音樂
        vm.playMusic = snapshot.val().charades.playMusic;
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
        vm.updateData({ playMusic: vm.playMusic }, "/charades/");
        vm.playAudio();
      } else {
        vm.playMusic = false;
        vm.updateData({ playMusic: vm.playMusic }, "/charades/");
        vm.resetAudio();
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
  components: {
    RouterLink,
  },
  mounted() {
    this.onReadData();

    // 一開始先讀取 localStorage
    // this.groupList = JSON.parse(localStorage.getItem("charadesGroup"));
    // console.log(this.groupList);
    // if (!this.groupList) {
    //   this.groupList = [];
    //   console.log("this.groupList");
    //   console.log(this.groupList);
    // }
  },
};
</script>

<template>
  <div>
    <div class="bg">
      <!-- <div id="sec">{{sec}}</div>
        <button type="button" @click="countDwn">開始</button>
        <button type="button" @click="countPause">暫停</button>
        <button type="button" @click="countReset">重新計時</button> -->

      <table class="w-100">
        <tbody>
          <tr>
            <td class="vh-100 d-flex align-items-md-center">
              <!-- 單元團體記分板 -->
              <div id="groupScoreboard" class="w-100">
                <div class="container">
                  <!-- 標題 -->
                  <div class="teamTitle fs-3 text-center text-white py-1 mb-4">
                    比手畫腳 | 團隊分數
                  </div>
                  <div class="container w-50">
                    <!-- 音樂 -->
                    <div
                      class="countDownArea d-flex justify-content-center align-items-center flex-column pb-2"
                    >
                      <div
                        class="d-flex align-items-center flex-wrap flex-md-nowrap"
                      >
                        <div>
                          <audio
                            :src="hand"
                            controls
                            loop
                            muted
                            ref="audioRef"
                          ></audio>
                        </div>
                        <!-- 開始播放 -->
                        <button
                          type="button"
                          class="btn btn-primary mx-3"
                          style="
                            width: 50px;
                            height: 50px;
                            border-radius: 100px;
                          "
                          @click="remoteClickPlay"
                          v-if="play"
                        >
                          <font-awesome-icon icon="fa-solid fa-play" />
                        </button>
                        <!-- 歸零 -->
                        <button
                          type="button"
                          class="btn btn-primary mx-3"
                          style="
                            width: 50px;
                            height: 50px;
                            border-radius: 100px;
                          "
                          v-if="pause"
                          @click="remoteClickPlay"
                        >
                          <font-awesome-icon icon="fa-solid fa-rotate-right" />
                        </button>
                        <!-- 暫停播放 -->
                        <!-- <button
                          type="button"
                          class="btn btn-primary ms-3"
                          style="width: 50px; height: 50px"
                          @click="remoteClickPlay"
                          v-if="pause"
                        >
                          <font-awesome-icon icon="fa-solid fa-pause" />
                        </button> -->
                      </div>
                    </div>
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
                        <!-- <img
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
                /> -->
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
                      <button
                        type="button"
                        class="btn btn-primary set-btn me-2"
                      >
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
            </td>
          </tr>
        </tbody>
      </table>
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
  min-height: 100vh;
  width: 100%;
  background-image: url("@/assets/img/bg.jpg");
  background-size: cover;
  background-position: center;
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
