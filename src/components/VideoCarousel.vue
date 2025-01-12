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
        <div class="relative w-full h-full">
          <video
            ref="lastCloneVideo"
            class="w-full h-full object-cover"
            :src="slides[slides.length - 1].videoUrl"
            controls
            preload="auto"
            @ended="next"
          />
        </div>
      </div>

      <!-- Original slides -->
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="w-full h-full flex-shrink-0"
      >
        <div class="relative w-full h-full">
          <video
            :ref="(el) => { if(el) videoRefs[index] = el }"
            class="w-full h-full object-cover"
            :src="slide.videoUrl"
            controls
            preload="auto"
            @ended="next"
          />
        </div>
      </div>

      <!-- First slide clone -->
      <div class="w-full h-full flex-shrink-0">
        <div class="relative w-full h-full">
          <video
            ref="firstCloneVideo"
            class="w-full h-full object-cover"
            :src="slides[0].videoUrl"
            controls
            preload="auto"
            @ended="next"
          />
        </div>
      </div>
    </div>

    <!-- Navigation buttons - only show if more than one slide -->
    <template v-if="slides.length > 1">
      <button 
        @click="manualPrev"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

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
    </template>

    <!-- Indicators - only show if more than one slide -->
    <div v-if="slides.length > 1" class="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    validator: value => {
      return value.every(slide => typeof slide.videoUrl === 'string')
    }
  }
})

const track = ref(null)
const videoRefs = ref([])
const currentIndex = ref(0)
const position = ref(100)
const isAnimating = ref(false)

onMounted(() => {
  // Initialize videos after component is mounted
  nextTick(() => {
    playCurrentVideo()
  })
})

function playCurrentVideo() {
  const currentVideo = videoRefs.value[currentIndex.value]
  if (currentVideo) {
    currentVideo.play().catch(error => {
      console.log('Video autoplay prevented:', error)
    })
  }
}

function stopCurrentVideo() {
  const currentVideo = videoRefs.value[currentIndex.value]
  if (currentVideo) {
    currentVideo.pause()
    currentVideo.currentTime = 0
  }
}

function prev() {
  if (isAnimating.value) return
  
  stopCurrentVideo()
  isAnimating.value = true
  currentIndex.value = currentIndex.value === 0 
    ? props.slides.length - 1 
    : currentIndex.value - 1
  position.value -= 100
}

function next() {
  if (isAnimating.value) return
  
  stopCurrentVideo()
  isAnimating.value = true
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
  position.value += 100
}

function manualPrev() {
  stopCurrentVideo()
  prev()
}

function manualNext() {
  stopCurrentVideo()
  next()
}

function goToSlide(index) {
  if (isAnimating.value || index === currentIndex.value) return
  
  stopCurrentVideo()
  isAnimating.value = true
  const diff = index - currentIndex.value
  position.value += diff * 100
  currentIndex.value = index
}

function onTransitionEnd() {
  if (position.value >= (props.slides.length + 1) * 100) {
    isAnimating.value = false
    position.value = 100
  } else if (position.value === 0) {
    isAnimating.value = false
    position.value = props.slides.length * 100
  } else {
    isAnimating.value = false
  }
  
  playCurrentVideo()
}

// Cleanup on component destroy
onBeforeUnmount(() => {
  videoRefs.value.forEach(video => {
    if (video) {
      video.pause()
    }
  })
})
</script>

<style scoped>
video {
  max-width: 100%;
  height: 100%;
}

/* Optional: Custom video controls styling */
video::-webkit-media-controls-panel {
  background-color: rgba(0, 0, 0, 0.5);
}

video::-webkit-media-controls-play-button {
  background-color: white;
  border-radius: 50%;
}

video::-webkit-media-controls-timeline {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>