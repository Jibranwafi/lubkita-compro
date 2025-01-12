<template>
    <div class="relative inline-block text-left" 
        @mouseenter="isOpen = true"
        @mouseleave="isOpen = false">
    <div>
        <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50">
        Paket kami
        <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
        </button>
    </div>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
        <div v-if="isOpen" class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Paket Gold
                </a>
            </div>
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Paket Platinum
                </a>
            </div>
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Paket LDR
                </a>
            </div>
        </div>
    </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const isOpen = ref(false)
</script>