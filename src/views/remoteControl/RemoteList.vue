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
  <div class="bg-dark text-white w-100 vh-100 p-5">
    <h2 class="text-center pb-3">遠端控制列表</h2>
    <RouterLink to="/remote/ppt" class="text-dark btn btn-warning fs-3 w-100">
      活動流程
    </RouterLink>
  </div>
</template>
