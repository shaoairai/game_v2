<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div class="bg position-relative">
    <div class="list position-absolute top-50 start-50 translate-middle">
      <div class="container">
        <ul class="list-group">
          <RouterLink to="/ppt" class="list-a mb-4">
            <li class="list-group-item fs-4">
              <font-awesome-icon icon="fa-solid fa-gamepad" /> 活動流程
            </li>
          </RouterLink>
          <RouterLink to="/rank" class="list-a mb-4">
            <li class="list-group-item fs-4">
              <font-awesome-icon icon="fa-solid fa-medal" /> 排行榜
            </li>
          </RouterLink>
          <div class="line mb-4"></div>
          <RouterLink to="/charades" class="list-a mb-4">
            <li class="list-group-item fs-4">
              <font-awesome-icon icon="fa-solid fa-hands-asl-interpreting" />
              比手畫腳
            </li>
          </RouterLink>
          <RouterLink to="/countDown" class="list-a mb-4">
            <li class="list-group-item fs-4">
              <font-awesome-icon icon="fa-solid fa-font" /> 急中生字
            </li>
          </RouterLink>
          <RouterLink to="/wordChain" class="list-a mb-4">
            <li class="list-group-item fs-4">
              <font-awesome-icon icon="fa-solid fa-music" class="me-1" /> Tempo
              遊戲
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 背景 */
.bg {
  height: 100vh;
  width: 100%;
  background-image: url("@/assets/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
/* 項目 */
.list {
  width: 50%;
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
</style>
