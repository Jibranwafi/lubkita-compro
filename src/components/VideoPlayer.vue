<!-- VideoPlayer.vue -->
<template>
    <div class="w-full">
      <div class="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <video-player
          ref="player"
          :options="playerOptions"
          class="video-js vjs-big-play-centered w-full h-full"
          @ready="onPlayerReady"
        />
      </div>
      
      <!-- Optional metadata section -->
      <div v-if="title || description" class="mt-4">
        <h3 v-if="title" class="text-lg font-semibold text-gray-800">{{ title }}</h3>
        <p v-if="description" class="mt-2 text-gray-600">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  
  export default defineComponent({
    name: 'CustomVideoPlayer',
    
    components: {
      VideoPlayer
    },
  
    props: {
      source: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'video/mp4'
      },
      poster: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      controls: {
        type: Boolean,
        default: true
      },
      fluid: {
        type: Boolean,
        default: true
      },
      playbackRates: {
        type: Array,
        default: () => [0.5, 1, 1.5, 2]
      }
    },
  
    setup(props, { emit }) {
      const playerOptions = computed(() => ({
        autoplay: props.autoplay,
        controls: props.controls,
        fluid: props.fluid,
        playbackRates: props.playbackRates,
        sources: [{
          src: props.source,
          type: props.type
        }],
        poster: props.poster,
        responsive: true,
        controlBar: {
          children: [
            'playToggle',
            'volumePanel',
            'currentTimeDisplay',
            'timeDivider',
            'durationDisplay',
            'progressControl',
            'playbackRateMenuButton',
            'fullscreenToggle'
          ]
        }
      }))
  
      const onPlayerReady = (player) => {
        // Set up event listeners
        player.on('play', () => emit('play'))
        player.on('pause', () => emit('pause'))
        player.on('ended', () => emit('ended'))
        player.on('timeupdate', () => emit('timeupdate', player.currentTime()))
        
        emit('ready', player)
      }
  
      return {
        playerOptions,
        onPlayerReady
      }
    }
  })
  </script>
  
  <style>
  .video-js {
    @apply w-full h-full;
  }
  
  .vjs-big-play-button {
    @apply !absolute !left-1/2 !top-1/2 !transform !-translate-x-1/2 !-translate-y-1/2;
  }
  </style>