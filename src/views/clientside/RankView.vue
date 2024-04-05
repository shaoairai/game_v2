<script>
import { RouterLink } from "vue-router";

// firebase
import { db } from "@/utils/firebase.js";
import { ref, onValue } from "firebase/database";
import firebaseCrud from "@/utils/firebaseCrud";

export default {
  mixins: [firebaseCrud],
  data() {
    return {
      // 共要分幾隊
      teamCnt: 0,
      // 共要分幾隊暫存
      teamCntTmp: 0,
      // 是否修改總隊伍
      editTeamDisplay: false,
      // 新增人名的輸入框
      text: "",
      // 新增性別輸入框
      sex: "",
      // 顯示的排行資料
      list: [],
      // 動態數量隊伍命名
      teamArr: [],
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

      // 顯示上依照團隊區分 or 排行榜
      isDisplayGroup: false,
      // 依照團隊 or 分數排行
      isRank: false,

      // 是否顯示加分按鈕
      plusBtnDisplay: false,
      // 是否顯示 團隊 加分按鈕
      // plusBtnDisplayTeam: false,
      // 是否顯示減分按鈕
      minusBtnDisplay: false,

      // Firebase
      // 顯示所有firebase資料
      displayAllFirbase: "",
    };
  },
  methods: {
    // 修改總共隊伍數量
    editTeamCnt() {
      // 開啟修改
      this.editTeamDisplay = true;
      this.teamCntTmp = this.teamCnt;
    },
    // 確定總共隊伍數量
    confirmTeamCnt() {
      // 開啟修改
      this.editTeamDisplay = false;

      this.teamCnt = this.teamCntTmp;

      this.updateData({ teamCnt: Number(this.teamCnt) }, "/rank/");

      // localStorage.setItem("listDataTeams", JSON.stringify(this.teamCnt));
    },
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
          this.list[i].score += 1;
        }
      });
    },
    // 團隊加分
    plusNumTeam() {
      this.teamArr.forEach((item, index) => {
        this.list.forEach((el, i) => {
          if (el.team === item) {
            this.list[i].score += Number(
              this.$refs[`refTeamPlus${index}`][0].value
            );
          }
        });
      });
    },
    // 減分
    minusNum(item) {
      this.list.forEach((el, i) => {
        if (item.id == el.id) {
          this.list[i].score -= 1;
        }
      });
    },
    // 團隊減分
    minusNumTeam() {
      this.teamArr.forEach((item, index) => {
        this.list.forEach((el, i) => {
          if (el.team === item) {
            this.list[i].score -= Number(
              this.$refs[`refTeamPlus${index}`][0].value
            );
          }
        });
      });
    },
    // 團隊加減分輸入框重設
    resetNumTeam() {
      this.teamArr.forEach((item, index) => {
        this.$refs[`refTeamPlus${index}`][0].value = 0;
      });
    },
    // 排序
    sortRank() {
      this.isRank = true;

      this.list.sort((a, b) => {
        return b.score - a.score;
      });
      this.saveRank();
      this.updateData({ isRank: true }, "/rank/");
    },
    // 動態數量隊伍命名
    generateTeams() {
      this.teamArr = [];
      for (let i = 0; i < this.teamCnt; i++) {
        this.teamArr.push(String.fromCharCode(65 + i)); // 65 是 'A' 的 Unicode 編碼
      }

      console.warn(this.teamArr);
    },
    // 重新分隊
    reallocate() {
      let bool = confirm("確定要重新分隊嗎？");

      if (bool) {
        // 動態數量隊伍命名
        this.generateTeams();
        // 暫存分配的人物列表
        const groupListTmp = [...this.list];
        // 分別取出男女
        const boysArray = groupListTmp.filter((el) => el.sex === "1");
        const girlsArray = groupListTmp.filter((el) => el.sex === "0");

        console.log("Boys:", boysArray);
        console.log("Girls:", girlsArray);

        // 各隊輪流分派人
        let doWhileCnt = 0;

        // 男生分派
        for (let i = 0; i < boysArray.length; i++) {
          console.log("boysArray.length", boysArray.length);
          // 抽某位的亂數不重複
          const noRepeat = [];
          // 抽亂數
          let randomIndex;

          // 開始抽
          do {
            randomIndex = Math.floor(Math.random() * boysArray.length);

            // noRepeat包含這次抽的亂數，就重抽
            if (!noRepeat.includes(randomIndex)) {
              // 不重複，抽到的放入noRepeat陣列
              noRepeat.push(randomIndex);

              // 此不重複的人，存到真正陣列中
              this.list.forEach((el) => {
                if (el.id === boysArray[randomIndex].id) {
                  el.team = this.teamArr[doWhileCnt % this.teamCnt];
                }
              });

              // 跑幾次，取餘數可得隊伍
              doWhileCnt += 1;
            }
          } while (noRepeat.length < boysArray.length);
        }

        // 女生分派
        for (let i = 0; i < girlsArray.length; i++) {
          // 抽某位的亂數不重複
          const noRepeat = [];
          // 抽亂數
          let randomIndex;

          // 開始抽
          do {
            randomIndex = Math.floor(Math.random() * girlsArray.length);
            // noRepeat包含這次抽的亂數，就重抽
            if (!noRepeat.includes(randomIndex)) {
              // 不重複，抽到的放入noRepeat陣列
              noRepeat.push(randomIndex);

              // 此不重複的人，存到真正陣列中
              this.list.forEach((el) => {
                if (el.id === girlsArray[randomIndex].id) {
                  el.team = this.teamArr[doWhileCnt % this.teamCnt];
                }
              });

              // 跑幾次，取餘數可得隊伍
              doWhileCnt += 1;
            }
          } while (noRepeat.length < girlsArray.length);
        }

        // 依照團隊分組
        this.teamRank();
        // 存檔
        this.saveRank();

        // 按照隊伍
        this.isRank = false;
        this.updateData({ isRank: false }, "/rank/");
      }
    },
    // 依照團隊分組
    teamRank() {
      console.log(this.list);
      this.list.sort((a, b) => {
        console.log(a);
        console.log(a.team);
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

      this.updateData({ rankData: this.list }, "/rank/");
      // localStorage.setItem("listData", JSON.stringify(this.list));
    },
    // 顯示上依照團隊區分 or 排行榜
    switchIsDisplayGroup() {
      this.isDisplayGroup = !this.isDisplayGroup;
      this.updateData({ isDisplayGroup: this.isDisplayGroup }, "/rank/");
    },
    // 即時監聽讀取
    onReadData() {
      const vm = this;
      onValue(ref(db), (snapshot) => {
        console.log(snapshot.val());

        // 此頁參數
        vm.displayAllFirbase = snapshot.val();
        vm.teamCnt = snapshot.val().rank.teamCnt;
        vm.list = snapshot.val().rank.rankData;
        vm.isRank = snapshot.val().rank.isRank;
        vm.isDisplayGroup = snapshot.val().rank.isDisplayGroup;

        // 動態數量隊伍命名
        this.generateTeams();
      });
    },
  },
  computed: {},
  watch: {},
  components: {
    RouterLink,
  },
  mounted() {
    this.onReadData();

    //一開始先讀取 localStorage
    // let preloadData = JSON.parse(localStorage.getItem("listData"));

    // let preloadDataTeams = JSON.parse(localStorage.getItem("listDataTeams"));
    // 如果有資料
    // if (preloadData) {
    //   this.list = JSON.parse(localStorage.getItem("listData"));
    // }
    // if (preloadDataTeams) {
    //   this.teamCnt = JSON.parse(localStorage.getItem("listDataTeams"));
    // }
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

        <!-- 切換顯示方式 -->
        <div class="container px-0 py-2 text-end">
          <button
            type="button"
            class="btn btn-primary"
            @click="switchIsDisplayGroup"
          >
            <div v-show="isDisplayGroup">
              <font-awesome-icon icon="fa-solid fa-list-ul" />
            </div>
            <div v-show="!isDisplayGroup">
              <font-awesome-icon icon="fa-regular fa-rectangle-list" />
            </div>
          </button>
        </div>

        <!-- 排行榜 -->
        <!-- :style="{ height:list.length <= 9 ? 62 * (list.length / 2 + 1) + 20 + 'px': 'auto',}" -->
        <div
          class="container list-outer flex-wrap d-flex flex-column"
          v-if="!isDisplayGroup"
        >
          <transition-group name="fade">
            <!-- 每個人物渲染 -->
            <div
              v-for="(item, i) in list"
              :key="item.id"
              class="list-li"
              style="padding-left: 30px"
            >
              <div class="list-content d-flex align-items-center">
                <div class="rank-num" v-if="isRank">{{ i + 1 }}</div>
                <div class="rank-num" v-if="!isRank">
                  <!-- <img src="@/assets/img/santa.png" style="width: 40px" /> -->
                  {{ item.team }}
                </div>
                <div class="rank-text d-flex flex-grow-1 px-2">
                  {{ item.sex === "0" ? "女" : "男" }}
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
          </transition-group>
        </div>

        <!-- 分隊顯示 -->
        <div class="container d-flex flex-row flex-wrap w-100 px-0" v-else>
          <div
            v-for="(teamName, index) in teamArr"
            :key="index"
            class="groupDisplay p-2"
          >
            <div
              class="text-white h-100 list-outer"
              style="border: 2px solid white"
            >
              <!-- 每個人物渲染 -->
              <div v-for="(item, i) in list" :key="item.id">
                <div v-if="item.team === teamName" class="list-li ps-5">
                  <div class="list-content d-flex align-items-center">
                    <div class="rank-num" v-if="isRank">{{ i + 1 }}</div>
                    <div class="rank-num" v-if="!isRank">
                      <!-- <img src="@/assets/img/santa.png" style="width: 40px" /> -->
                      {{ item.team }}
                    </div>
                    <div class="rank-text d-flex flex-grow-1 px-4">
                      {{ item.sex === "0" ? "女" : "男" }}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 隊伍數量、團隊加減分 -->
      <div
        class="container d-flex flex-wrap justify-content-between align-items-center px-0 py-3"
      >
        <div>
          <div class="text-white d-flex align-items-center">
            <div class="pe-2">共分{{ teamCnt }}隊</div>
            <div
              class="cursor-pointer"
              @click="editTeamCnt"
              v-if="!editTeamDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-gear" />
            </div>
            <div class="d-flex">
              <input
                type="number"
                class="form-control"
                style="width: 80px"
                v-model="teamCntTmp"
                v-if="editTeamDisplay"
              />
              <button
                type="button"
                @click="confirmTeamCnt"
                class="btn btn-primary ms-2"
                v-if="editTeamDisplay"
              >
                確定隊伍數
              </button>
            </div>
          </div>
        </div>

        <div
          class="text-white d-flex flex-wrap justify-content-center align-items-center"
        >
          <!-- {{ displayAllFirbase }}<br /><br />
          {{ teamArr }} -->
          <div>團隊計分：</div>
          <div class="d-flex flex-wrap flex-row align-items-center">
            <div
              class="d-flex flex-column mx-1"
              v-for="(teamName, i) in teamArr"
              :key="i"
            >
              <div class="text-center">{{ teamName }}隊伍</div>
              <div>
                <input
                  value="0"
                  type="number"
                  class="form-control"
                  style="width: 80px"
                  :ref="'refTeamPlus' + i"
                />
              </div>
            </div>
          </div>
          <div class="p-md-0 p-2">
            <button
              type="button"
              class="btn btn-primary me-2"
              @click="plusNumTeam(), saveRank(), resetNumTeam()"
            >
              團<font-awesome-icon icon="fa-solid fa-plus" />
            </button>
            <button
              type="button"
              class="btn btn-primary me-2"
              @click="minusNumTeam(), saveRank(), resetNumTeam()"
            >
              團<font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <button type="button" class="btn btn-primary" @click="resetNumTeam">
              <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" />
            </button>
          </div>
        </div>
      </div>

      <!-- 下排按鈕 -->
      <div class="container all-set-btns d-flex flex-wrap px-0 pt-2">
        <!-- 回首頁 -->
        <RouterLink to="/">
          <button type="button" class="btn btn-primary set-btn me-2 my-2">
            <font-awesome-icon icon="fa-solid fa-house" />
          </button>
        </RouterLink>

        <!-- 連至各遊戲 -->
        <RouterLink to="/charades">
          <button type="button" class="btn btn-primary set-btn me-2 my-2">
            比
          </button>
        </RouterLink>

        <RouterLink to="/jump">
          <button type="button" class="btn btn-primary set-btn me-2 my-2">
            跳
          </button>
        </RouterLink>

        <RouterLink to="/selftalk">
          <button
            type="button"
            class="btn btn-primary set-btn me-2 my-2"
            style="width: 40px"
          >
            自
          </button>
        </RouterLink>

        <!-- 設定按鈕 -->
        <button
          type="button"
          class="btn btn-primary set-btn my-2"
          @click="setBtn = !setBtn"
        >
          <font-awesome-icon icon="fa-solid fa-gear" />
        </button>
        <!-- 設定按鈕 以外的按鈕 -->
        <transition-group name="set-btn">
          <div class="setting-btns" v-if="setBtn">
            <!-- 啟用/關閉加分按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2 my-2"
              @click="plusBtnDisplay = !plusBtnDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
            <!-- 啟用/關閉減分按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2 my-2"
              @click="minusBtnDisplay = !minusBtnDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <!-- 啟用/關閉編輯按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2 my-2"
              @click="editBtnDisplay = !editBtnDisplay"
            >
              <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            </button>
            <!-- 啟用/關閉加人按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2 my-2"
              @click="joinBtnDisplay = !joinBtnDisplay"
            >
              <font-awesome-icon icon="fa-solid fa-user-plus" />
            </button>
            <!-- 啟用/關閉移除按鈕 -->
            <button
              type="button"
              class="btn btn-primary ms-2 my-2"
              @click="delBtnDisplay = !delBtnDisplay"
            >
              <font-awesome-icon icon="fa-regular fa-trash-can" />
            </button>
          </div>
        </transition-group>

        <button
          type="button"
          class="btn btn-primary ms-auto my-1"
          @click="reallocate()"
        >
          重新分隊
        </button>

        <!-- 排序 -->
        <button
          type="button"
          class="btn btn-primary ms-3 sort-check my-1"
          @click="sortRank()"
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

<style lang="scss" scoped>
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
  border: 2px solid white;
  padding: 20px;
  margin: 0 auto;
  /* max-width: 900px; */
}

/* 因應不同人數調整排版 */
/* 排雙排 
// .twoList {
//   & > .list-li {
//     width: calc(50% - 16px);
//   }
// }*/

.list-li {
  position: relative;
  color: #fff;
  padding: 4px;
  margin: 6px 0px;
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
  left: 12px;
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
  top: 2px;
  left: -4px;
  width: 34px;
  height: 34px;
  background: #fbbc05;
  box-shadow: 0px 0px 10px #22222299;
  border-radius: 100px;
}
.list-content {
  height: 32px;
  padding-right: 24px;
  z-index: 10;
}

.rank-num {
  position: absolute;
  top: 19px;
  left: 13px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  font-size: 20px;
  font-weight: 600;
  z-index: 10;
  color: #222222;
}

.rank-text {
  font-size: 16px;
}

/* 背景 */
.rank-bg {
  min-height: 100vh;
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

/* 分隊顯示 */
.groupDisplay {
  width: 100%;
}

@media screen and (min-width: 992px) and (min-height: 600px) {
  /* 列表 */
  .list-outer {
    max-height: calc(100vh - 300px);
  }
}

@media screen and (min-width: 768px) {
  /* 分隊顯示 */
  .groupDisplay {
    width: 50%;
  }
  .rank-text {
    font-size: 22px;
  }
}
</style>
