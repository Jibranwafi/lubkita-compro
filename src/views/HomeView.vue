<script setup>
import Carousel from '@/components/Carousel.vue';
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import VideoCarousel from '@/components/VideoCarousel.vue';


import VideoPlayer from '@/components/VideoPlayer.vue';
import PlyrVideoPlayer from '@/components/PlyrVideoPLayer.vue'
import MediaElementPlayer from '@/components/MediaElementPlayer.vue';
import DPlayerComponent from '@/components/DPlayerComponent.vue';

const slides = ref([{}, {}, {}])
const video_sliders = ref([{ videoUrl: '/testimoni-seller.mp4' }])
const video_home = ref([{ videoUrl: '/lubkita-animasi.mp4' }])
const videoUrl = ref('/lubkita-animasi.mp4')

const components = {
  PlyrVideoPlayer,
  DPlayerComponent,
  MediaElementPlayer,
  VideoPlayer
}

</script>

<template>
<div class="min-h-screen bg-gray-50">

    <!-- Hero Section -->
    <div class="flex flex-col">

        <div class="p-4 md:p-8 mx-4 md:mx-10 rounded-b-3xl bg-cover bg-top bg-no-repeat" 
             style="background-image: url('/page-home-header1.jpg')">
            <div class="flex flex-col md:flex-row md:space-x-32">
                <div class="w-full md:w-1/2 flex flex-col p-4 md:p-9">
                    <div class="text-3xl md:text-5xl font-bold text-white">
                        Lumbung Digital Rakyat (LDR) Mitra sukses pengusaha desa.
                    </div>
                    <div class="text-xl md:text-2xl text-white my-5 md:my-10 pt-48 md:pt-20">
                        Lumbung Digital Rakyat (LDR), kunci sukses dalam memperluas jangkauan bisnis anda di Lubkita.com, platform dikhususkan untuk mengembangkan memberdayakan ekonomi lokal dalam digitalisasi dan pelatihan.
                    </div>
                    <div class="flex space-x-10">
                    <RouterLink to="/pendaftaran" class="text-2xl md:text-3xl text-center p-3 bg-yellow-400 rounded-2xl font-bold w-full md:w-1/2 flex flex-col justify-center">
                        Pendaftaran
                    </RouterLink>
                    <RouterLink to="/pendaftaran/LDR0A" class="text-2xl md:text-3xl text-center p-3 bg-yellow-400 rounded-2xl font-bold w-full md:w-1/2">
                        Pendaftaran LDR0A
                    </RouterLink>
                    </div>
                </div>

                <div class="w-full md:w-1/2 mt-6 md:mt-0 h-full flex flex-col justify-center text-right md:pl-32 md:pt-32"> 
                    <VideoCarousel :slides="video_home" />
                    <!--
                    <Carousel :slides="slides">
                        
                        <template #slide-0>
                            <div class="w-full h-full flex items-center justify-center">
                                <span class="text-3xl bg-blue-300 w-full h-full rounded-3xl">
                                    Image1
                                </span>
                            </div>
                        </template>

                        <template #slide-1>
                            <div class="w-full h-full flex items-center justify-center">
                                <span class="text-3xl bg-red-200 w-full h-full rounded-3xl">
                                    Image2
                                </span>
                            </div>
                        </template>

                        <template #slide-2>
                            <div class="w-full h-full flex items-center justify-center">
                                <span class="text-3xl bg-yellow-300 w-full h-full rounded-3xl">
                                    Image3
                                </span>
                            </div>
                        </template>
                    </Carousel>
                    -->

                </div>
            </div>
        </div>


        <div class="w-11/12 md:w-5/6 flex flex-col md:flex-row justify-center mx-auto my-10 shadow-lg rounded-2xl p-5 border">
            <div class="flex w-full md:w-1/3 hover:bg-slate-300 mb-4 md:mb-0">
                <div class="p-2 w-1/5">
                    <img src="/page-home-networking-icon.png" alt="networking" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base">OUR NETWORKING</div>
            </div>
            <RouterLink to="/pelatihan-ldr" class="flex w-full md:w-1/3 hover:bg-slate-300 mb-4 md:mb-0">
                <div class="p-2 w-1/5">
                    <img src="/page-home-pelatihan-icon.png" alt="pelatihan" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base">PELATIHAN DIGITAL</div>
            </RouterLink>
            <RouterLink to="/syarat-ketentuan" class="flex w-full md:w-1/3 hover:bg-slate-300">
                <div class="p-2 w-1/5">
                    <img src="/page-home-credential-icon.png" alt="credential" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base">SYARAT & KETENTUAN</div>
            </RouterLink>
        </div>
        <div class="flex flex-col bg-amber-300 mx-4 md:mx-10 rounded-t-3xl">
            <div class="p-5 md:p-10 text-center flex flex-col">
                <div class="text-3xl md:text-4xl">Review</div>
                <div class="text-4xl md:text-5xl font-bold">Pengguna LDR</div>
            </div>
            <div class="px-4 md:px-20 pb-10 md:pb-20 pt-5 rounded-full flex flex-col justify-center"> <!-- Adjust height as needed -->
                <VideoCarousel :slides="video_sliders" />
                <div class="mb-8">
                    <video
                        class="w-full max-w-2xl rounded-lg shadow-lg"
                        controls
                        controlsList="nodownload"
                    >
                        <source :src="videoUrl" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <PlyrVideoPlayer />
                <MediaElementPlayer />
                <DPlayerComponent />
                <VideoPlayer 
                    :video-url="videoUrl"
                    @play="onPlay"
                    @pause="onPause"
                />



                
            </div>
            <!--
            <div class="flex justify-center w-full border-2 border-black h-[600px] p-8">
                <Carousel :slides="slides">
                        <template #slide-0>
                            <div class="w-full h-full flex items-center justify-center p-16">
                                <span class="text-3xl bg-blue-300 w-full h-full rounded-3xl">
                                    Image1
                                </span>
                            </div>
                        </template>

                        <template #slide-1>
                            <div class="w-full h-full flex flex-col items-center justify-center p-16">
                                <div class="text-2xl italic">"quotes"</div>
                                <div class="border-t border-red-200 w-full mx-10 my-8"></div>
                                <div class="text-2xl font-bold">Name</div>
                            </div>
                        </template>

                        <template #slide-2>
                            <div class="w-full h-full flex items-center justify-center p-16">
                                <span class="text-3xl bg-yellow-300 w-full h-full rounded-3xl">
                                    Image3
                                </span>
                            </div>
                        </template>
                    </Carousel>
            </div>
            -->
            <!--
            <div class="grid grid-cols-2 bg-blue-400 p-10">
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
            </div>
            -->
        </div>
    </div>

    <!-- Contact Section -->

</div>
</template>

<style scoped>
/* Add any component-specific styles here */

input, textarea {
@apply p-3;
}
</style>