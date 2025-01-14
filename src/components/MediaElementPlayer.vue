<template>
    <div class="container mx-auto p-4">
      <div class="max-w-3xl mx-auto">
        <video
          ref="mediaPlayer"
          class="mejs__player rounded-lg shadow-lg"
          width="100%"
          height="auto"
        >
          <source :src="videoUrl" type="video/mp4" />
        </video>
      </div>
    </div>
  </template>
  
  <script>
  import 'mediaelement/build/mediaelementplayer.min.css'
  import 'mediaelement-plugins/dist/quality/quality.css'
  import 'mediaelement'
  import 'mediaelement-plugins/dist/quality/quality'
  
  export default {
    name: 'MediaElementPlayer',
    data() {
      return {
        videoUrl: '/lubkita-animasi.mp4',
        player: null,
      }
    },
    mounted() {
      this.initializeMediaElement()
    },
    methods: {
      initializeMediaElement() {
        this.player = new MediaElementPlayer(this.$refs.mediaPlayer, {
          stretching: 'responsive',
          features: [
            'playpause',
            'current',
            'progress',
            'duration',
            'volume',
            'fullscreen',
            'speed',
            'quality',
          ],
          enableAutosize: true,
          videoWidth: '100%',
          videoHeight: '100%',
          pluginPath: '/path/to/shims/', // Required for some features
          success: (mediaElement, originalNode, instance) => {
            // Player is ready
            this.player = instance
  
            mediaElement.addEventListener('play', () => {
              console.log('Playing')
            })
  
            mediaElement.addEventListener('pause', () => {
              console.log('Paused')
            })
          },
        })
      },
    },
    beforeUnmount() {
      if (this.player) {
        this.player.remove()
      }
    },
  }
  </script>
  
  <style>
  /* Custom styles for MediaElement */
  .mejs__overlay-button {
    @apply bg-blue-500;
  }
  
  .mejs__time-current {
    @apply bg-blue-500;
  }
  
  .mejs__controls {
    @apply bg-gray-900 bg-opacity-75;
  }
  </style>