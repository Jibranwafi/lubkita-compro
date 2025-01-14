// DPlayerComponent.vue
<template>
  <div class="container mx-auto p-4">
    <div ref="dplayer" class="max-w-3xl mx-auto rounded-lg shadow-lg"></div>
  </div>
</template>

<script>
// Import DPlayer differently for Vite
import DPlayer from 'dplayer'
// CSS import is not needed as it's included in the DPlayer package

export default {
  name: 'DPlayerComponent',
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    this.initializeDPlayer()
  },
  methods: {
    initializeDPlayer() {
      this.player = new DPlayer({
        container: this.$refs.dplayer,
        video: {
          url: '/lubkita-animasi.mp4',
          type: 'auto',
        },
        autoplay: false,
        theme: '#3b82f6',
        screenshot: true,
        hotkey: true,
      })

      // Event listeners
      this.player.on('play', () => {
        console.log('Video started playing')
      })

      this.player.on('pause', () => {
        console.log('Video paused')
      })
    },
  },
  beforeUnmount() {
    if (this.player) {
      this.player.destroy()
    }
  },
}
</script>

<style>
/* The styles will be automatically injected by DPlayer */
.dplayer {
  @apply w-full rounded-lg overflow-hidden;
}
</style>