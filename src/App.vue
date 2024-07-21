<script>
import firebaseAuth from "@/utils/firebaseAuth.js";
import { RouterView } from "vue-router";

// 背景音樂
import music1 from "@/assets/music/music1.mp3";
import music2 from "@/assets/music/music2.mp3";
import music3 from "@/assets/music/music3.mp3";
import music4 from "@/assets/music/music4.mp3";

export default {
  data() {
    return {
      music1: music1,
      music2: music2,
      music3: music3,
      music4: music4,
      // 音樂總數
      musicTotal: 4,
      // 播放第幾個音樂檔
      currentMusic: 1,
      // 播放秒數
      currentMusicSec: 0,

      musicAllDisplay: false,
    };
  },
  components: { RouterView },
  methods: {
    musicAllDisplayBtn() {
      this.musicAllDisplay = !this.musicAllDisplay;
    },
    // 音樂fadein
    fadeInAudio(ref) {
      const audio = this.$refs[ref];
      // audio.volume = 0;
      audio.play();
      const fadeIn = setInterval(() => {
        audio.volume = Math.min(1, audio.volume + 0.1);
        if (audio.volume === 1) {
          clearInterval(fadeIn);
        }
      }, 100); // 可以調整這裡的時間以控制淡入的速度
    },
    // 音樂fadeout
    fadeOutAudio(ref) {
      const audio = this.$refs[ref];
      const fadeOut = setInterval(() => {
        audio.volume = Math.max(0, audio.volume - 0.1);
        if (audio.volume === 0) {
          clearInterval(fadeOut);
          audio.pause();
        }
      }, 100); // 可以調整這裡的時間以控制淡出的速度
    },
    switchToMusic() {
      if (Number(this.currentMusic) === this.musicTotal) {
        localStorage.setItem("currentMusic", 1);
        this.currentMusic = 1;
        // 重新加載並播放新的音樂
        const audio = this.$refs.refMusic1Audio;
        audio.load();
        audio.play();
      } else {
        localStorage.setItem("currentMusic", Number(this.currentMusic) + 1);
        this.currentMusic += 1;
        // 重新加載並播放新的音樂
        const audio = this.$refs.refMusic1Audio;
        audio.load();
        audio.play();
      }
    },
    updateCurrentTime() {
      const audio = this.$refs.refMusic1Audio;
      this.currentTime = audio.currentTime;
      localStorage.setItem("currentMusicSec", this.currentTime);
    },
    loadCurrentTime() {
      this.currentMusic = localStorage.getItem("currentMusic");
      const savedTime = localStorage.getItem("currentMusicSec");
      if (savedTime) {
        this.currentTime = savedTime;
        const audio = this.$refs.refMusic1Audio;
        audio.currentTime = this.currentTime;
      }
    },
  },
  created() {
    // 驗證是否可操作DB
    firebaseAuth.methods.watchAuthState(this.$router, this.$route);
  },
  mounted() {
    this.loadCurrentTime();
  },
};
</script>

<template>
  <RouterView
    @fadeInAudio="fadeInAudio"
    @fadeOutAudio="fadeOutAudio"
    :musicAllDisplay="musicAllDisplay"
  />
  <div
    class="musicAllDisplayBtnHover position-absolute p-2 cursor-pointer"
    style="top: 10px; left: 10px; z-index: 99999"
    @click="musicAllDisplayBtn"
  >
    <font-awesome-icon icon="fa-solid fa-gear" class="text-white" />
  </div>
  <!-- 音樂音效 -->
  <div v-show="musicAllDisplay">
    <div class="d-flex align-items-center">
      全場音樂：
      <audio
        ref="refMusic1Audio"
        controls
        @ended="switchToMusic"
        @timeupdate="updateCurrentTime"
      >
        <source
          :src="[
            Number(currentMusic) === 1
              ? music1
              : Number(currentMusic) === 2
              ? music2
              : Number(currentMusic) === 3
              ? music3
              : Number(currentMusic) === 4
              ? music4
              : music1,
          ]"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<style scoped lang="scss">
.musicAllDisplayBtnHover {
  opacity: 0;
  transition: all 0.25s;
  &:hover {
    opacity: 1;
  }
}
</style>
