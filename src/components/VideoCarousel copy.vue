<!-- VideoCarousel.vue -->
<template>
    <div class="overflow-hidden relative w-full h-full">
      <div 
        ref="track"
        class="flex h-full"
        :style="{
          transform: `translateX(-${position}%)`,
          transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none'
        }"
        @transitionend="onTransitionEnd"
      >
        <!-- Last slide clone -->
        <div class="w-full h-full flex-shrink-0">
          <video-js
            :options="videoOptions"
            :src="slides[slides.length - 1].videoUrl"
            class="video-js vjs-default-skin vjs-big-play-centered h-full"
            @ended="next"
          />
        </div>
  
        <!-- Original slides -->
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="w-full h-full flex-shrink-0"
        >
          <video-js
            :ref="'player-' + index"
            :options="videoOptions"
            :src="slide.videoUrl"
            class="video-js vjs-default-skin vjs-big-play-centered h-full"
            @ended="next"
          />
        </div>
  
        <!-- First slide clone -->
        <div class="w-full h-full flex-shrink-0">
          <video-js
            :options="videoOptions"
            :src="slides[0].videoUrl"
            class="video-js vjs-default-skin vjs-big-play-centered h-full"
            @ended="next"
          />
        </div>
      </div>
  
      <!-- Navigation buttons -->
      <button 
        @click="manualNext"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
      >
        <svg 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
  
      <!-- Indicators -->
      <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="[
            index === currentIndex ? 'bg-white' : 'bg-white/50',
          ]"
        ></button>
      </div>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
  import 'video.js/dist/video-js.css';
  
  export default {
    name: 'VideoCarousel',
    props: {
      slides: {
        type: Array,
        required: true,
        validator: value => {
          return value.every(slide => typeof slide.videoUrl === 'string')
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
        position: 100,
        isAnimating: false,
        videoOptions: {
          autoplay: true,
          controls: true,
          responsive: true,
          fluid: true,
          playbackRates: [0.5, 1, 1.5, 2],
          preload: 'auto',
        },
        players: []
      };
    },
    methods: {
      initVideoPlayers() {
        // Initialize video.js players for each slide
        this.slides.forEach((_, index) => {
          const playerRef = this.$refs[`player-${index}`];
          if (playerRef && playerRef[0]) {
            const player = videojs(playerRef[0].$el);
            this.players[index] = player;
          }
        });
      },
      playCurrentVideo() {
        const currentPlayer = this.players[this.currentIndex];
        if (currentPlayer) {
          currentPlayer.play();
        }
      },
      stopCurrentVideo() {
        const currentPlayer = this.players[this.currentIndex];
        if (currentPlayer) {
          currentPlayer.pause();
          currentPlayer.currentTime(0);
        }
      },
      next() {
        if (this.isAnimating) return;
        
        this.stopCurrentVideo();
        this.isAnimating = true;
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.position += 100;
      },
      manualNext() {
        this.stopCurrentVideo();
        this.next();
      },
      goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        
        this.stopCurrentVideo();
        this.isAnimating = true;
        const diff = index - this.currentIndex;
        this.position += diff * 100;
        this.currentIndex = index;
      },
      onTransitionEnd() {
        if (this.position >= (this.slides.length + 1) * 100) {
          this.isAnimating = false;
          this.position = 100;
        } else if (this.position === 0) {
          this.isAnimating = false;
          this.position = this.slides.length * 100;
        } else {
          this.isAnimating = false;
        }
        
        this.playCurrentVideo();
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initVideoPlayers();
        this.playCurrentVideo();
      });
    },
    beforeDestroy() {
      // Cleanup video players
      this.players.forEach(player => {
        if (player) {
          player.dispose();
        }
      });
    }
  };
  </script>
  
  <style>
  .video-js {
    width: 100%;
  }
  
  /* Optional: Customize video.js theme */
  </style>