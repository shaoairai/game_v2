<script>
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
import pptImg21 from "@/assets/pptImg/21.jpg";

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
        { id: "img-id-21", src: pptImg21, alt: "21" },
      ],

      page: 0,
      lastPage: 20,

      // 遠端控制路由
      controlRouter: "",
    };
  },
  methods: {
    // 即時監聽讀取
    onReadData() {
      const vm = this;
      onValue(ref(db), (snapshot) => {
        console.log(snapshot.val());

        vm.page = snapshot.val().ppt.page;

        // 路由判斷
        vm.controlRouter = snapshot.val().router.controlRouter;
        const fullPath = vm.$route.fullPath;
        const pathSegments = fullPath.split("/");
        if (vm.controlRouter != pathSegments[1]) {
          vm.$router.push(vm.controlRouter);
        }
      });
    },
    // 上頁
    pre() {
      const vm = this;
      if (vm.page > 0) {
        vm.updateData({ page: vm.page - 1 }, "/ppt");
      }
    },
    // 下頁
    next() {
      const vm = this;
      if (vm.page < vm.lastPage) {
        vm.updateData({ page: vm.page + 1 }, "/ppt");
      }
    },
    // 跳頁
    nextPop() {
      const vm = this;
      if (vm.page < vm.lastPage) {
        vm.updateData({ page: vm.page + 2 }, "/ppt");
      }
    },
  },
  mounted() {
    if (confirmPw(this.$router)) {
      // 即時監聽 Firebase 資料
      this.onReadData();
    }
  },
};
</script>

<template>
  <div>
    <div
      v-for="(item, i) in imgList"
      :key="item.id"
      :id="item.id"
      class="imgs w-100"
      :class="{ 'd-none': page !== i }"
    >
      <img
        :src="item.src"
        :alt="item.alt"
        class="w-100 w-100"
        style="object-fit: cover"
      />
    </div>

    <div class="d-flex flex-md-row w-100 mt-3">
      <div class="p-1 w-100 h-50">
        <button
          type="button"
          class="btn w-100 h-100"
          :class="[page != 0 ? 'btn-primary' : 'btn-secondary']"
          @click="pre"
        >
          <font-awesome-icon
            icon="fa-solid fa-caret-left"
            style="font-size: 72px"
          />
        </button>
      </div>
      <div class="p-1 w-100 h-50">
        <button
          type="button"
          class="btn w-100 h-100"
          :class="[page != lastPage ? 'btn-primary' : 'btn-secondary']"
          @click="next"
        >
          <font-awesome-icon
            icon="fa-solid fa-caret-right"
            style="font-size: 72px"
          />
        </button>
      </div>
      <div class="p-1 w-100 h-50" v-if="page === 12">
        <button
          type="button"
          class="btn btn-primary w-100 h-100 fs-1"
          @click="nextPop"
        >
          <font-awesome-icon
            icon="fa-solid fa-caret-right"
            style="font-size: 72px"
          />*2
        </button>
      </div>
    </div>
  </div>
</template>
