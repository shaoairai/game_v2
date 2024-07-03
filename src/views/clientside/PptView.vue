<script>
import { RouterLink } from "vue-router";
import { confirmPw } from "@/utils/localStoragePw";

// firebase
import { db } from "@/utils/firebase.js";
import { ref, onValue } from "firebase/database";
import firebaseCrud from "@/utils/firebaseCrud";

import pptImg1 from "@/assets/pptImg/1.jpg";
import pptImg2 from "@/assets/pptImg/2.jpg";
import pptImg3 from "@/assets/pptImg/3.jpg";
import pptImg4 from "@/assets/pptImg/4.jpg";
import pptImg5 from "@/assets/pptImg/5.jpg";
import pptImg6 from "@/assets/pptImg/6.jpg";
import pptImg7 from "@/assets/pptImg/7.jpg";
import pptImg8 from "@/assets/pptImg/8.jpg";
import pptImg9 from "@/assets/pptImg/9.jpg";
import pptImg10 from "@/assets/pptImg/10.jpg";
import pptImg11 from "@/assets/pptImg/11.jpg";
import pptImg12 from "@/assets/pptImg/12.jpg";
import pptImg13 from "@/assets/pptImg/13.jpg";
import pptImg14 from "@/assets/pptImg/14.jpg";
import pptImg15 from "@/assets/pptImg/15.jpg";
import pptImg16 from "@/assets/pptImg/16.jpg";
import pptImg17 from "@/assets/pptImg/17.jpg";
import pptImg18 from "@/assets/pptImg/18.jpg";
import pptImg19 from "@/assets/pptImg/19.jpg";
import pptImg20 from "@/assets/pptImg/20.jpg";

export default {
  mixins: [firebaseCrud],
  data() {
    return {
      imgList: [
        { id: "img-id-1", src: pptImg1, alt: "1" },
        { id: "img-id-2", src: pptImg2, alt: "2" },
        { id: "img-id-3", src: pptImg3, alt: "3" },
        { id: "img-id-4", src: pptImg4, alt: "4" },
        { id: "img-id-5", src: pptImg5, alt: "5" },
        { id: "img-id-6", src: pptImg6, alt: "6" },
        { id: "img-id-7", src: pptImg7, alt: "7" },
        { id: "img-id-8", src: pptImg8, alt: "8" },
        { id: "img-id-9", src: pptImg9, alt: "9" },
        { id: "img-id-10", src: pptImg10, alt: "10" },
        { id: "img-id-11", src: pptImg11, alt: "11" },
        { id: "img-id-12", src: pptImg12, alt: "12" },
        { id: "img-id-13", src: pptImg13, alt: "13" },
        { id: "img-id-14", src: pptImg14, alt: "14" },
        { id: "img-id-15", src: pptImg15, alt: "15" },
        { id: "img-id-16", src: pptImg16, alt: "16" },
        { id: "img-id-17", src: pptImg17, alt: "17" },
        { id: "img-id-18", src: pptImg18, alt: "18" },
        { id: "img-id-19", src: pptImg19, alt: "19" },
        { id: "img-id-20", src: pptImg20, alt: "20" },
      ],

      // 是否顯示右上角跳至遊戲頁的按鈕
      // gameListDisplay: false,
      // gameListCnt: 0,
      // gameList: ["../charades", "../countDown", "../wordChain"],

      totalImgsCnt: 0,
      currentIndex: 0,
      hasFinalGame: false,

      // 全螢幕
      isFullScreen: false,

      // Firebase
      fpage: 0,
      // 顯示所有firebase資料
      displayAllFirbase: "",
      // 遠端控制路由
      controlRouter: "",
    };
  },
  methods: {
    preSwitchImg(event) {
      this.currentIndex--;
      if (this.currentIndex <= 0) {
        this.currentIndex = 0;
        console.log("第一頁");
      }

      // 跳頁
      // if (this.currentIndex === 11) {
      //   this.hasFinalGame = true;
      // } else {
      //   this.hasFinalGame = false;
      // }

      // 顯示遊戲連結按鈕
      // if (this.currentIndex === 7) {
      //   this.gameListDisplay = true;
      //   this.gameListCnt = 0;
      // } else if (this.currentIndex === 10) {
      //   this.gameListDisplay = true;
      //   this.gameListCnt = 1;
      // } else if (this.currentIndex === 13) {
      //   this.gameListDisplay = true;
      //   this.gameListCnt = 2;
      // } else {
      //   this.gameListDisplay = false;
      // }
    },
    nextSwitchImg(event) {
      this.currentIndex++;
      if (this.currentIndex >= this.totalImgsCnt - 1) {
        this.currentIndex = this.totalImgsCnt - 1;
        console.log("最後一頁");
      }

      // 跳頁
      if (this.currentIndex === 11) {
        this.hasFinalGame = true;
      } else {
        this.hasFinalGame = false;
      }

      // 顯示遊戲連結按鈕
      // if (this.currentIndex === 7) {
      //   this.gameListDisplay = true;
      //   this.gameListCnt = 0;
      // } else if (this.currentIndex === 10) {
      //   this.gameListDisplay = true;
      //   this.gameListCnt = 1;
      // } else if (this.currentIndex === 13) {
      //   this.gameListDisplay = true;
      //   this.gameListCnt = 2;
      // } else {
      //   this.gameListDisplay = false;
      // }
    },
    // 連到遊戲頁面後，要自動往後翻一頁
    // autoNext() {
    //   const vm = this;
    //   console.log("自動下頁");
    //   setTimeout(function () {
    //     vm.$refs.nextSwitchImg.click();
    //   }, 1000);
    // },
    // 跳頁，跳過爭冠遊戲
    jumpSwitchImg(event) {
      this.currentIndex += 2;
      this.hasFinalGame = false;
    },
    // 全螢幕
    toggleFullScreen() {
      if (this.isFullScreen) {
        this.exitFullscreen();
      } else {
        this.requestFullscreen();
      }
    },
    requestFullscreen() {
      const elem = document.querySelector("#full");

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }

      this.isFullScreen = true;
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      this.isFullScreen = false;
    },
    // 即時監聽讀取
    onReadData() {
      const vm = this;
      onValue(ref(db), (snapshot) => {
        console.log(snapshot.val());

        vm.displayAllFirbase = snapshot.val();
        vm.currentIndex = snapshot.val().ppt.page;

        // 路由判斷
        vm.controlRouter = snapshot.val().router.controlRouter;
        const fullPath = vm.$route.fullPath;
        const pathSegments = fullPath.split("/");
        if (vm.controlRouter != pathSegments[1]) {
          vm.$router.push(vm.controlRouter);
        }
      });
    },
  },
  components: {
    RouterLink,
  },
  mounted() {
    if (confirmPw(this.$router)) {
      // 即時監聽 Firebase 資料
      this.onReadData();

      // 圖片總數
      this.totalImgsCnt = this.imgList.length;
    }
  },
};
</script>

<template>
  <div>
    <div id="full" class="position-relative">
      <div
        v-for="(item, i) in imgList"
        :key="item.id"
        :id="item.id"
        class="imgs h-100"
        :class="{ 'd-none': currentIndex !== i }"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-100 h-100"
          style="object-fit: cover"
        />
      </div>

      <div
        class="position-absolute translate-middle start-50"
        style="bottom: 50px"
      >
        <!-- 全螢幕 -->
        <button
          type="button"
          id="toggleFullScreen"
          class="btn btn-outline-primary me-3"
          style="width: 64px"
          :style="
            currentIndex === 13 || currentIndex === 18 || currentIndex === 19
              ? {
                  color: 'rgba(0,0,0,0)',
                  borderColor: 'rgba(0,0,0,0)',
                  background: 'rgba(0,0,0,0)',
                }
              : {}
          "
          @click="toggleFullScreen"
        >
          <font-awesome-icon
            icon="fa-solid fa-up-right-and-down-left-from-center"
          />
        </button>
        <button
          type="button"
          id="preSwitchImg"
          class="btn me-3"
          style="width: 64px"
          :style="
            currentIndex === 13 || currentIndex === 18 || currentIndex === 19
              ? {
                  color: 'rgba(0,0,0,0)',
                  borderColor: 'rgba(0,0,0,0)',
                  background: 'rgba(0,0,0,0)',
                }
              : {}
          "
          :class="currentIndex !== 0 ? 'btn-outline-primary' : 'disabled'"
          @click="preSwitchImg($event)"
        >
          <font-awesome-icon icon="fa-solid fa-caret-left" />
        </button>
        <button
          type="button"
          id="nextSwitchImg"
          class="btn"
          style="width: 64px"
          :style="
            currentIndex === 13 || currentIndex === 18 || currentIndex === 19
              ? {
                  color: 'rgba(0,0,0,0)',
                  borderColor: 'rgba(0,0,0,0)',
                  background: 'rgba(0,0,0,0)',
                }
              : {}
          "
          :class="
            currentIndex !== totalImgsCnt - 1
              ? 'btn-outline-primary'
              : 'disabled'
          "
          @click="nextSwitchImg($event)"
          ref="nextSwitchImg"
        >
          <font-awesome-icon icon="fa-solid fa-caret-right" />
        </button>
        <button
          type="button"
          id="jumpSwitchImg"
          class="btn ms-3"
          style="width: 64px"
          :class="
            currentIndex !== totalImgsCnt - 1
              ? 'btn-outline-primary'
              : 'disabled'
          "
          @click="jumpSwitchImg($event)"
          v-if="hasFinalGame"
        >
          <font-awesome-icon icon="fa-solid fa-forward" />
        </button>
      </div>

      <!-- 連結計分頁 
      <div class="position-absolute top-0 end-0">
        <div class="mt-2 me-2">
          <RouterLink
            to="/rank"
            :class="
              currentIndex == 7 ||
              currentIndex == 9 ||
              currentIndex == 11 ||
              currentIndex == 13
                ? ''
                : 'd-none'
            "
            @click="currentIndex == 13 ? null : autoNext()"
          >
            <button type="button" class="btn btn-outline-primary rounded me-2">
              <font-awesome-icon icon="fa-solid fa-ranking-star" />
            </button>
          </RouterLink>
        </div>
      </div>-->
    </div>
  </div>
</template>
