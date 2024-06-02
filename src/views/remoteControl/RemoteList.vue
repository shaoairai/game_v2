<script>
import { RouterLink, RouterView } from "vue-router";
import { confirmPw } from "@/utils/localStoragePw";

// firebase
import { db } from "@/utils/firebase.js";
import { ref, onValue } from "firebase/database";
import firebaseCrud from "@/utils/firebaseCrud";

export default {
  mixins: [firebaseCrud],
  data() {
    return {
      // 遠端控制路由
      controlRouter: "",
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    // 即時監聽讀取
    onReadData() {
      const vm = this;
      onValue(ref(db), (snapshot) => {
        console.log(snapshot.val());

        // 路由判斷
        vm.controlRouter = snapshot.val().router.controlRouter;
      });
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
  <div class="bg-dark text-white w-100 vh-100 p-5">
    <h2 class="text-center pb-3">遠端控制</h2>
    <RouterLink
      :to="'/remote/' + controlRouter"
      class="text-dark btn btn-warning fs-3 w-100"
    >
      進入目前頁面
    </RouterLink>
  </div>
</template>
