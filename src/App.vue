<script>
import { RouterView } from "vue-router";

// 背景音樂
import music1 from "@/assets/music/music1.mp3";
import music2 from "@/assets/music/music2.mp3";

export default {
  data() {
    return {
      music1: music1,
      music2: music2,
      // 播放第幾個音樂檔
      currentMusic: 1,
      // 播放秒數
      currentMusicSec: 0,
    };
  },
  components: { RouterView },
  methods: {
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
      if (this.currentMusic === 1) {
        localStorage.setItem("currentMusic", 2);
        this.currentMusic = 2;
        // 重新加載並播放新的音樂
        const audio = this.$refs.refMusic1Audio;
        audio.load();
        audio.play();
      } else {
        localStorage.setItem("currentMusic", 1);
        this.currentMusic = 1;
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
  mounted() {
    this.loadCurrentTime();
  },
};
</script>

<template>
  <RouterView @fadeInAudio="fadeInAudio" @fadeOutAudio="fadeOutAudio" />
  <!-- 音樂音效 -->
  <div class="d-flex align-items-center">
    全場音樂：
    <audio
      ref="refMusic1Audio"
      controls
      @ended="switchToMusic"
      @timeupdate="updateCurrentTime"
    >
      <source
        :src="[Number(currentMusic) === 1 ? music1 : music2]"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style scoped></style>
