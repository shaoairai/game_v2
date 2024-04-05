import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 載入bs
import "./assets/all.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUpRightAndDownLeftFromCenter,
  faCaretLeft,
  faCaretRight,
  faForward,
  faRankingStar,
  faGamepad,
  faMedal,
  faHandsAslInterpreting,
  faFont,
  faMusic,
  faPlus,
  faMinus,
  faHouse,
  faGear,
  faUserPlus,
  faFlagCheckered,
  faFloppyDisk,
  faRotateRight,
  faPlay,
  faPause,
  faCircleLeft,
  faCircleRight,
  faHeart,
  faUpLong,
  faDownLong,
  faSkullCrossbones,
  faWifi,
  faPeopleArrows,
  faComments,
  faListUl,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
// 所有要嵌入的 icon 都要加在這裡

import {
  faPenToSquare,
  faTrashCan,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons"; // 所有要嵌入的 icon 都要加在這裡

/* add icons to the library */
library.add(
  faUpRightAndDownLeftFromCenter,
  faCaretLeft,
  faCaretRight,
  faForward,
  faRankingStar,
  faGamepad,
  faMedal,
  faHandsAslInterpreting,
  faFont,
  faMusic,
  faPlus,
  faMinus,
  faPenToSquare,
  faHouse,
  faGear,
  faUserPlus,
  faTrashCan,
  faFlagCheckered,
  faFloppyDisk,
  faRotateRight,
  faPlay,
  faPause,
  faCircleLeft,
  faCircleRight,
  faHeart,
  faUpLong,
  faDownLong,
  faSkullCrossbones,
  faWifi,
  faPeopleArrows,
  faComments,
  faListUl,
  faRectangleList,
  faArrowRotateLeft
); // 所有要嵌入的 icon 都要加在這裡

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
