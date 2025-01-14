//PlyrVideoPlayer.vue
<template>
  <div class="container mx-auto p-4">
    <div class="max-w-3xl mx-auto">
      <video
        ref="videoPlayer"
        :src="videoUrl"
        class="w-full rounded-lg shadow-lg"
        crossorigin="anonymous"
        playsinline
      >
        <!-- Optional: Add tracks for subtitles/captions -->
        <track 
          kind="captions"
          label="English"
          srclang="en"
          src="/path/to/captions.vtt"
        >
      </video>
    </div>
  </div>
</template>

<script>
import 'plyr/dist/plyr.css' // Import Plyr CSS
import Plyr from 'plyr'

export default {
  name: 'PlyrVideoPlayer',
  
  data() {
    return {
      videoUrl: '/lubkita-animasi.mp4',
      player: null,
      playerOptions: {
        controls: [
          'play-large', // The large play button in the center
          'restart', // Restart playback
          'rewind', // Rewind by the seek time (default 10 seconds)
          'play', // Play/pause playback
          'fast-forward', // Fast forward by the seek time (default 10 seconds)
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          'duration', // The full duration of the media
          'mute', // Toggle mute
          'volume', // Volume control
          'captions', // Toggle captions
          'settings', // Settings menu
          'pip', // Picture-in-Picture
          'airplay', // Airplay (currently Safari only)
          'fullscreen', // Toggle fullscreen
        ],
        settings: ['captions', 'quality', 'speed', 'loop'],
        quality: {
          default: 1080,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
        },
        speed: {
          selected: 1,
          options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
        }
      }
    }
  },

  mounted() {
    // Initialize Plyr
    this.player = new Plyr(this.$refs.videoPlayer, this.playerOptions)

    // Event listeners
    this.player.on('ready', () => {
      console.log('Player is ready')
    })

    this.player.on('play', () => {
      console.log('Video started playing')
    })

    this.player.on('ended', () => {
      console.log('Video ended')
    })
  },

  beforeUnmount() {
    // Cleanup
    if (this.player) {
      this.player.destroy()
    }
  },

  methods: {
    // Example method to control player programmatically
    togglePlay() {
      if (this.player) {
        this.player.togglePlay()
      }
    },

    // Method to change video quality
    setQuality(quality) {
      if (this.player) {
        this.player.quality = quality
      }
    },

    // Method to change playback speed
    setPlaybackSpeed(speed) {
      if (this.player) {
        this.player.speed = speed
      }
    }
  }
}
</script>

<!-- Add these styles to override Plyr's default theme if needed -->
<style>
:root {
  --plyr-color-main: #3b82f6; /* Tailwind blue-500 */
  --plyr-control-radius: 0.5rem;
}

.plyr--video {
  @apply rounded-lg overflow-hidden;
}

/* Optional: Custom styles for the control bar */
.plyr--video .plyr__controls {
  @apply bg-gradient-to-t from-black/75 to-transparent;
}
</style>