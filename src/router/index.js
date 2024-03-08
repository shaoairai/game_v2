import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PptView from "../views/clientside/PptView.vue";
import RankView from "../views/clientside/RankView.vue";
import CharadesView from "../views/clientside/CharadesView.vue";
import CountdownView from "../views/clientside/CountdownView.vue";
import WordchainView from "../views/clientside/WordchainView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ppt",
      name: "ppt",
      component: PptView,
    },
    {
      path: "/rank",
      name: "rank",
      component: RankView,
    },
    {
      path: "/charades",
      name: "charades",
      component: CharadesView,
    },
    {
      path: "/countDown",
      name: "countDown",
      component: CountdownView,
    },
    {
      path: "/wordChain",
      name: "wordChain",
      component: WordchainView,
    },
  ],
});

export default router;
