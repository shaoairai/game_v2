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
  <div>
    <div
      class="d-flex flex-column justify-content-center align-items-center bg-primary text-white text-center m-0"
    >
      <h4 class="pt-3 m-0">
        <font-awesome-icon icon="fa-solid fa-wifi" /> 活動流程
      </h4>
      <div class="d-flex flex-wrap">
        <div class="p-2">
          <RouterLink to="ppt" class="text-white">活動流程</RouterLink>
        </div>
        <div class="p-2">
          <RouterLink to="rank" class="text-white">排行榜</RouterLink>
        </div>
      </div>
    </div>

    <RouterView></RouterView>
  </div>
</template>
