import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PptView from "../views/clientside/PptView.vue";
import RankView from "../views/clientside/RankView.vue";
import CharadesView from "../views/clientside/CharadesView.vue";
import CountdownView from "../views/clientside/CountdownView.vue";
import WordchainView from "../views/clientside/WordchainView.vue";
import RemoteList from "../views/remoteControl/RemoteList.vue";
import RemoteControl from "../views/remoteControl/RemoteControl.vue";
import PptControl from "../views/remoteControl/controlPages/PptControl.vue";
import RankControl from "@/views/remoteControl/controlPages/RankControl.vue";
import CharadesControl from "@/views/remoteControl/controlPages/CharadesControl.vue";
import JumpControl from "@/views/remoteControl/controlPages/JumpControl.vue";
import SelftalkControl from "@/views/remoteControl/controlPages/SelftalkControl.vue";
import JumpView from "../views/clientside/JumpView.vue";
import SelftalkView from "../views/clientside/SelftalkView.vue";

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
    {
      path: "/jump",
      name: "jump",
      component: JumpView,
    },
    {
      path: "/selftalk",
      name: "selftalk",
      component: SelftalkView,
    },
    {
      path: "/remotelist",
      name: "remotelist",
      component: RemoteList,
    },
    {
      path: "/remote",
      name: "remote",
      component: RemoteControl,
      children: [
        {
          path: "ppt",
          name: "pptControl",
          component: PptControl,
        },
        {
          path: "rank",
          name: "rankControl",
          component: RankControl,
        },
        {
          path: "charades",
          name: "charadesControl",
          component: CharadesControl,
        },
        {
          path: "jump",
          name: "jumpControl",
          component: JumpControl,
        },
        {
          path: "selftalk",
          name: "selftalkControl",
          component: SelftalkControl,
        },
      ],
    },
  ],
});

export default router;
