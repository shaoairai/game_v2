<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      // 新增人名的輸入框
      text: "",
      // 新增性別輸入框
      sex: "",
      // 顯示的排行資料
      list: [],
      // 隊伍
      team: "",
      // 編輯名字暫存
      tempData: {},
      // 是否顯示編輯名字區域
      editArea: false,
      // 設定按鈕
      setBtn: false,
      // 是否顯示增加人數區域
      joinBtnDisplay: false,
      // 是否顯示編輯按鈕
      editBtnDisplay: false,
      // 是否顯示垃圾桶按鈕
      delBtnDisplay: false,
      // 顯示依照團隊 or 分數排行
      isRank: false,

      // 團隊 加減
      whatTeamAction: "",
      // 是否顯示加分按鈕
      plusBtnDisplay: false,
      // 是否顯示 團隊 加分按鈕
      // plusBtnDisplayTeam: false,
      // 是否顯示減分按鈕
      minusBtnDisplay: false,
    };
  },
  methods: {
    // 增加一人資料
    addData() {
      // 建立新的資料
      const newData = {
        id: new Date().getTime(), // 資料一定要加入 id，使用隨機值
        text: this.text,
        score: 0,
        sex: this.sex, // 0 女 1 男
        team: this.team, // 隊伍
        life: 1, // Tempo 遊戲的命數
      };
      // 新增加入資料
      this.list.push(newData);
      // 清空輸入框
      this.text = "";
      this.sex = "";
      this.team = "";

      console.log(this.list);
    },
    // 編輯人名
    editData(item) {
      // 按下編輯後，把 item 整筆傳入 tempData
      // 一定要展開，避免連動
      this.tempData = { ...item };
      // 顯示編輯名稱區塊
      this.editArea = true;
    },
    // 完成編輯人名
    confirm() {
      // 按下確認之後，逐筆確認
      this.list.forEach((item, i) => {
        // 如果 id 相同，就改變完成編輯的內容
        if (item.id === this.tempData.id) {
          // item = this.tempData; // 不可這樣寫，沒帶索引改不到
          // 這裡一定要帶 [i]
          this.list[i] = this.tempData;
        }
      });
      // 清空暫存區資料
      this.tempData = {};
      // 隱藏編輯名稱區塊
      this.editArea = false;
    },
    // 按下刪除
    removeData(item) {
      this.list.forEach((el, i) => {
        if (item.id == el.id) {
          this.list.splice(i, 1);
        }
      });
    },
    // 加分
    plusNum(item) {
      this.list.forEach((el, i) => {
        if (item.id == el.id) {
          this.list[i].score += 9;
        }
      });
    },
    // 團隊加分
    plusNumTeam() {
      this.list.forEach((el, i) => {
        if (el.team === this.whatTeamAction) {
          this.list[i].score += 9;
        }
      });
      // this.whatTeamAction = "";
    },
    // 減分
    minusNum(item) {
      this.list.forEach((el, i) => {
        if (item.id == el.id) {
          this.list[i].score -= 9;
        }
      });
    },
    // 團隊減分
    minusNumTeam() {
      this.list.forEach((el, i) => {
        if (el.team === this.whatTeamAction) {
          this.list[i].score -= 9;
        }
      });
    },
    // 排序
    sortRank() {
      this.isRank = true;
      this.list.sort((a, b) => {
        return b.score - a.score;
      });
    },
    // 重新分隊
    reallocate() {
      let bool = confirm("確定要重新分隊嗎？");

      if (bool) {
        // 總人數
        let totalCnt = this.list.length;
        // 男女生人數
        let boyCnt = 0;
        let girlCnt = 0;
        this.list.forEach((el, i) => {
          if (el.sex === "1") {
            boyCnt++;
          } else {
            girlCnt++;
          }
        });

        // 各隊剩餘人數
        let A_RemainBoy =
          boyCnt % 2 === 0 ? boyCnt / 2 : Math.floor(boyCnt / 2) + 1;
        let A_RemainGirl =
          girlCnt % 2 === 0 ? girlCnt / 2 : Math.floor(girlCnt / 2);
        let B_RemainBoy =
          boyCnt % 2 === 0 ? boyCnt / 2 : Math.floor(boyCnt / 2);
        let B_RemainGirl =
          girlCnt % 2 === 0 ? girlCnt / 2 : Math.floor(girlCnt / 2) + 1;

        console.log(
          `A男：${A_RemainBoy}，A女生：${A_RemainGirl}，B男生：${B_RemainBoy}，B女生：${B_RemainGirl}`
        );

        let teamArr = ["A", "B"];

        this.list.forEach((el, i) => {
          do {
            let randomBinary = Math.floor(Math.random() * 2);
            el.team = teamArr[randomBinary];
            if (
              el.sex === "1" &&
              teamArr[randomBinary] === "A" &&
              A_RemainBoy > 0
            ) {
              // 男生分到A隊
              A_RemainBoy--;
              break;
            } else if (
              el.sex === "1" &&
              teamArr[randomBinary] === "B" &&
              B_RemainBoy > 0
            ) {
              // 男生分到B隊
              B_RemainBoy--;
              break;
            } else if (
              el.sex === "0" &&
              teamArr[randomBinary] === "A" &&
              A_RemainGirl > 0
            ) {
              // 女生分到A隊
              A_RemainGirl--;
              break;
            } else if (
              el.sex === "0" &&
              teamArr[randomBinary] === "B" &&
              B_RemainGirl > 0
            ) {
              // 女生分到B隊
              B_RemainGirl--;
              break;
            }
          } while (true);
          // 都沒分進去，要再抽一次
        });

        // 改成團隊排行
        this.isRank = false;

        console.log(this.list);
      }
    },
    // 依照團隊分組
    teamRank() {
      this.list.sort((a, b) => {
        // 先按照 team 升序排序
        const teamComparison = a.team.localeCompare(b.team);

        // 如果 team 相同，依照 score 排序
        if (teamComparison === 0) {
          return b.score - a.score;
        }

        return teamComparison;
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
    <div class="p-3 rank-bg">
      <div class="joinPerson" v-if="joinBtnDisplay">
        <div class="pop-bg"></div>
        <div class="input-group mb-3">
          <input
            type="text"
            v-model="text"
            class="form-control"
            placeholder="請輸入暱稱"
            aria-label="請輸入暱稱"
          />
          <input
            type="text"
            v-model="sex"
            class="form-control"
            placeholder="女生0、男生1"
            aria-label="女生0、男生1"
          />
          <input
            type="text"
            v-model="team"
            class="form-control"
            placeholder="A / B"
            aria-label="A / B"
          />
          <button
            class="btn btn-outline-secondary check-join-btn"
            type="button"
            id="button-addon-cancel"
            @click="joinBtnDisplay = !joinBtnDisplay"
          >
            取消
          </button>
          <button
            class="btn btn-outline-secondary check-join-btn"
            type="button"
            id="button-addon2"
            @click="addData(), saveRank()"
          >
            新增一人
          </button>
        </div>
      </div>

      <div class="position-relative mt-5">
        <div class="h2-title">
          <h2 class="text-center">排行榜</h2>
        </div>
        <div class="container list-outer flex-wrap d-flex flex-column">
          <Transition-group name="fade">
            <div v-for="(item, i) in list" :key="item.id" class="list-li ps-5">
              <div class="list-content d-flex align-items-center">
                <div class="rank-num" v-if="isRank">{{ i + 1 }}</div>
                <div class="rank-num" v-if="!isRank && item.team === 'A'">
                  <img src="@/assets/img/santa.png" style="width: 40px" />
                </div>
                <div class="rank-num" v-if="!isRank && item.team === 'B'">
                  <img src="@/assets/img/elk.png" style="width: 40px" />
                </div>
                <div class="rank-text d-flex flex-grow-1 px-4">
                  <div class="flex-grow-1">{{ item.text }}</div>
                  <div>{{ item.score }}</div>
                </div>
                <!-- 加分 -->
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  @click="plusNum(item), saveRank()"
                  v-if="plusBtnDisplay"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
                <!-- 減分 -->
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  @click="minusNum(item), saveRank()"
                  v-if="minusBtnDisplay"
                >
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </button>
                <!-- 編輯名稱 -->
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  @click="editData(item)"
                  v-if="editBtnDisplay"
                >
                  <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                </button>
                <!-- 刪除 -->
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="removeData(item), saveRank()"
                  v-if="delBtnDisplay"
                >
                  <font-awesome-icon icon="fa-regular fa-trash-can" />
                </button>
              </div>
            </div>
          </Transition-group>
        </div>
      </div>

      <!-- 下排按鈕 -->
      <div class="container all-set-btns d-flex flex-wrap pt-2">
        <!-- 回首頁 -->
        <RouterLink to="/">
          <button type="button" class="btn btn-primary set-btn me-2">
            <font-awesome-icon icon="fa-solid fa-house" />
          </button>
        </RouterLink>

        <!-- 連至各遊戲 -->
        <RouterLink to="/charades">
          <button type="button" class="btn btn-primary set-btn me-2">比</button>
        </RouterLink>

        <RouterLink to="/countDown">
          <button type="button" class="btn btn-primary set-btn me-2">急</button>
        </RouterLink>

        <RouterLink to="/wordChain">
          <button
            type="button"
            class="btn btn-primary set-btn me-2"
            style="width: 40px"
          >
            T
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
            <!-- 啟用/關閉加分按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="plusBtnDisplay = !plusBtnDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
            <!-- 啟用/關閉減分按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="minusBtnDisplay = !minusBtnDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <!-- 啟用/關閉編輯按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="editBtnDisplay = !editBtnDisplay"
            >
              <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            </button>
            <!-- 啟用/關閉加人按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="joinBtnDisplay = !joinBtnDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-user-plus" />
            </button>
            <!-- 啟用/關閉移除按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="delBtnDisplay = !delBtnDisplay"
            >
              <font-awesome-icon icon="fa-regular fa-trash-can" />
            </button>

            <!-- 團隊 減分 -->
            <button
              type="button"
              class="btn btn-primary mx-2"
              @click="minusNumTeam(), saveRank()"
            >
              團隊 <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
          </div>
        </Transition-group>

        <!-- 團隊 加分 -->
        <div class="d-inline-block">
          <div class="d-flex justify-content-center ms-3">
            <input
              type="text"
              v-model="whatTeamAction"
              class="form-control"
              style="white-space: nowrap; width: 60px"
              placeholder="A / B"
            />
            <button
              type="button"
              class="btn btn-primary mx-2"
              @click="plusNumTeam(), saveRank()"
            >
              團隊 <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary ms-auto"
          @click="reallocate(), teamRank(), saveRank()"
        >
          重新分隊
        </button>

        <!-- 排序 -->
        <button
          type="button"
          class="btn btn-primary ms-3 sort-check"
          @click="sortRank(), saveRank()"
        >
          <font-awesome-icon icon="fa-solid fa-flag-checkered" />
        </button>
      </div>
      <hr />
      <!-- 編輯名稱 -->
      <div class="edit-area-outer" v-if="editArea">
        <div class="pop-bg"></div>
        <div class="edit-area" v-if="tempData.id">
          <input type="text" v-model="tempData.text" />
          <button
            type="button"
            class="btn btn-primary"
            @click="confirm(), saveRank()"
          >
            <font-awesome-icon icon="fa-solid fa-floppy-disk" />
          </button>
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

/* 標題 */
.h2-title {
  background: #fbbc05;
  width: 160px;
  box-shadow: 4px 4px 4px #22222299;
  position: absolute;
  left: 50%;
  top: 0px;
  -webkit-transform: translateX(-50%) translateY(-50%) skew(-20deg);
  -moz-transform: translateX(-50%) translateY(-50%) skew(-20deg);
  -ms-transform: translateX(-50%) translateY(-50%) skew(-20deg);
  -o-transform: translateX(-50%) translateY(-50%) skew(-20deg);
  transform: translateX(-50%) translateY(-50%) skew(-20deg);
}

.h2-title h2 {
  padding-top: 4px;
  letter-spacing: 2px;
  -webkit-transform: skew(20deg);
  -moz-transform: skew(20deg);
  -ms-transform: skew(20deg);
  -o-transform: skew(20deg);
  transform: skew(20deg);
  font-size: 28px;
}

/* 列表 */
.list-outer {
  padding-left: 0px;
  border-radius: 8px;
  max-height: calc(100vh - 80px);
  border: 2px solid white;
  padding: 50px 20px 20px 20px;
  margin: 0 auto;
  /* max-width: 900px; */
}
.list-li {
  position: relative;
  color: #fff;
  padding: 4px 8px;
  margin: 20px 16px;
  list-style: none;
  border-radius: 8px;
  z-index: 1;
}
.list-li::before {
  content: "";
  position: absolute;
  top: 0;
  right: 14px;
  bottom: 0;
  left: 30px;
  background: #fff;
  box-shadow: 4px 4px 4px black;
  opacity: 0.15;
  -webkit-transform: skew(-24deg);
  -moz-transform: skew(-24deg);
  -ms-transform: skew(-24deg);
  -o-transform: skew(-24deg);
  transform: skew(-24deg);
  z-index: -1;
}
.list-li::after {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  width: 50px;
  height: 50px;
  background: #fbbc05;
  box-shadow: 0px 0px 10px #22222299;
  border-radius: 100px;
}
.list-content {
  height: 38px;
  padding-right: 24px;
  z-index: 10;
}

.rank-num {
  position: absolute;
  top: 20px;
  left: 25px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  font-size: 28px;
  font-weight: 600;
  z-index: 10;
  color: #222222;
}

.rank-text {
  font-size: 20px;
}

/* 背景 */
.rank-bg {
  height: 100vh;
  width: 100%;
  background-image: url("@/assets/img/rank_bg.jpg");
  background-size: cover;
  background-position: center;
}

/* 增加人數區域 */
.joinPerson,
.edit-area-outer {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 32px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.joinPerson > .input-group {
  width: 80%;
}

.pop-bg {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.7;
}

.edit-area {
  z-index: 100;
}

.check-join-btn {
  background: #545454;
  color: white;
}
.check-join-btn:hover {
  background: #fbbc05;
  color: #222222;
}

/* 確定並排序 */
.sort-check {
  font-size: 18px;
  width: 100px;
  color: #222222;
  background: #fbbc05;
}
.sort-check:hover,
.sort-check:active {
  color: white !important;
  background: #fbbc05 !important;
}

.set-btn {
  border-radius: 100px;
  background: #777777;
  border: unset;
}

/* 下排按鈕 */
.all-set-btns {
  /* max-width: 900px; */
  margin: 0 auto;
}

/* 排序動畫 */

.fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.5s ease;
  transition-timing-function: ease-in-out;
}
.fade-move {
  transition: all 1s;
}

/* 設定按鈕動畫 */

.set-btn-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.set-btn-enter-to {
  opacity: 1;
}
.set-btn-enter-active {
  transition: all 0.5s ease;
  transition-timing-function: ease-in-out;
}
.set-btn-move {
  transition: all 1s;
}
</style>
