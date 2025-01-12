<!-- Carousel.vue -->
<template>
  <div class="overflow-hidden relative w-full h-full">
    <!-- Slides container -->
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
        <slot :name="'slide-' + (slides.length - 1)">
          <div class="w-full h-full bg-gray-100 flex items-center justify-center">
            <span class="text-gray-500">Slide {{ slides.length }}</span>
          </div>
        </slot>
      </div>

      <!-- Original slides -->
      <div 
        v-for="(_, index) in slides" 
        :key="index"
        class="w-full h-full flex-shrink-0"
      >
        <slot :name="'slide-' + index" :index="index">
          <div class="w-full h-full bg-gray-100 flex items-center justify-center">
            <span class="text-gray-500">Slide {{ index + 1 }}</span>
          </div>
        </slot>
      </div>

      <!-- First slide clone -->
      <div class="w-full h-full flex-shrink-0">
        <slot name="slide-0">
          <div class="w-full h-full bg-gray-100 flex items-center justify-center">
            <span class="text-gray-500">Slide 1</span>
          </div>
        </slot>
      </div>
    </div>

    <!-- Navigation buttons -->
    <button 
      @click="prev"
      class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
      aria-label="Previous slide"
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
      @click="next"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
      aria-label="Next slide"
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
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-colors duration-300"
        :class="[
          index === currentIndex ? 'bg-white' : 'bg-white/50',
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    slides: {
      type: Array,
      required: true
    },
    autoplayInterval: {
      type: Number,
      default: 5000
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      position: 100, // Start at first actual slide (after clone)
      isAnimating: false,
      autoplayTimer: null
    };
  },
  methods: {
    next() {
      if (this.isAnimating) return;
      
      this.isAnimating = true;
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.position += 100;
    },
    prev() {
      if (this.isAnimating) return;
      
      this.isAnimating = true;
      this.currentIndex = this.currentIndex === 0 
        ? this.slides.length - 1 
        : this.currentIndex - 1;
      this.position -= 100;
    },
    goToSlide(index) {
      if (this.isAnimating || index === this.currentIndex) return;
      
      this.isAnimating = true;
      const diff = index - this.currentIndex;
      this.position += diff * 100;
      this.currentIndex = index;
    },
    onTransitionEnd() {
      // If we've gone past the right clone
      if (this.position >= (this.slides.length + 1) * 100) {
        this.isAnimating = false;
        this.position = 100;
      }
      // If we've gone past the left clone
      else if (this.position === 0) {
        this.isAnimating = false;
        this.position = this.slides.length * 100;
      }
      else {
        this.isAnimating = false;
      }
      
      this.resetAutoplay();
    },
    startAutoplay() {
      if (this.autoplay && !this.autoplayTimer) {
        this.autoplayTimer = setInterval(() => {
          this.next();
        }, this.autoplayInterval);
      }
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    },
    resetAutoplay() {
      this.stopAutoplay();
      this.startAutoplay();
    }
  },
  mounted() {
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  }
};
</script>