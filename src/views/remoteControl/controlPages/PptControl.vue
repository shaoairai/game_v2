<script>
import { confirmPw } from "@/utils/localStoragePw";
// firebase
import { db } from "@/utils/firebase.js";
import { ref, onValue } from "firebase/database";
import firebaseCrud from "@/utils/firebaseCrud";

export default {
  mixins: [firebaseCrud],
  data() {
    return {
      page: 0,
      lastPage: 21,

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
      class="d-flex flex-column flex-md-row w-100"
      style="height: calc(100vh - 72px)"
    >
      <div class="p-3 w-100 h-50">
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
      <div class="p-3 w-100 h-50">
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
    </div>
  </div>
</template>
