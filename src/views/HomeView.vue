<script>
import { RouterLink, RouterView } from "vue-router";

// firebase
import firebaseCrud from "@/utils/firebaseCrud";

export default {
  mixins: [firebaseCrud],
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    remoteSwitchPage(routerPage) {
      // 路由不同
      this.updateData({ controlRouter: routerPage }, "/router/");
    },
  },
};
</script>

<template>
  <div class="bg position-relative">
    <table class="w-100">
      <tbody>
        <tr>
          <td class="w-100 h-100" style="overflow: auto">
            <div
              class="list mx-auto vh-100 my-5 my-md-0 d-md-flex align-items-md-center"
            >
              <div class="container">
                <ul class="list-group">
                  <RouterLink to="/remotelist" class="list-a mb-4">
                    <li class="list-group-item fs-4 w-50 mx-auto">
                      <font-awesome-icon icon="fa-solid fa-wifi" class="me-1" />
                      遙控器
                    </li>
                  </RouterLink>
                  <RouterLink
                    to="/ppt"
                    class="list-a mb-4"
                    @click="remoteSwitchPage('ppt')"
                  >
                    <li class="list-group-item fs-4">
                      <font-awesome-icon icon="fa-solid fa-gamepad" /> 活動流程
                    </li>
                  </RouterLink>
                  <RouterLink
                    to="/rank"
                    class="list-a mb-4"
                    @click="remoteSwitchPage('rank')"
                  >
                    <li class="list-group-item fs-4">
                      <font-awesome-icon icon="fa-solid fa-medal" /> 排行榜
                    </li>
                  </RouterLink>
                  <div class="line mb-4"></div>
                  <RouterLink
                    to="/charades"
                    class="list-a mb-4"
                    @click="remoteSwitchPage('charades')"
                  >
                    <li class="list-group-item fs-4">
                      <font-awesome-icon
                        icon="fa-solid fa-hands-asl-interpreting"
                      />
                      比手畫腳
                    </li>
                  </RouterLink>
                  <RouterLink
                    to="/jump"
                    class="list-a mb-4"
                    @click="remoteSwitchPage('jump')"
                  >
                    <li class="list-group-item fs-4">
                      <font-awesome-icon icon="fa-solid fa-people-arrows" />
                      跳跳 Tempo
                    </li>
                  </RouterLink>
                  <RouterLink
                    to="/selftalk"
                    class="list-a mb-4"
                    @click="remoteSwitchPage('selftalk')"
                  >
                    <li class="list-group-item fs-4">
                      <font-awesome-icon icon="fa-solid fa-comments" />
                      自說字話
                    </li>
                  </RouterLink>
                  <!-- <RouterLink to="/countDown" class="list-a mb-4">
                    <li class="list-group-item fs-4">
                      <font-awesome-icon icon="fa-solid fa-font" />
                      急中生字(單機)
                    </li>
                  </RouterLink>
                  <RouterLink to="/wordChain" class="list-a mb-4">
                    <li class="list-group-item fs-4">
                      <font-awesome-icon
                        icon="fa-solid fa-music"
                        class="me-1"
                      />
                      接龍 Tempo(單機)
                    </li>
                  </RouterLink> -->
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* 背景 */
.bg {
  /* height: 100vh; */
  width: 100%;
  background-image: url("@/assets/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
/* 項目 */
.list {
  width: 100%;
  max-width: 500px;
}
.list-a {
  color: white;
  text-decoration: unset;
  border-radius: 8px;
  text-align: center;
}
.list-a li:hover {
  background: #0d6efd;
  color: white;
  text-decoration: unset;
  border: 1px solid #0d6efd;
}

/* 分隔線 */
.line {
  width: 100%;
  height: 2px;
  background: white;
}

@media screen and (min-width: 992px) {
  /* 項目 */
  .list {
    width: 50%;
  }
}
</style>
