<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import HelloWorld from './components/HelloWorld.vue'
    import AboutUsDropdown from './components/AboutUsDropdown.vue';
    import { MenuButton } from '@headlessui/vue';
    import PackageDropdown from './components/PackageDropdown.vue';
    import { ref } from 'vue'

    const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-white shadow-lg">
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <!-- Logo and Company Name -->
                <div class="flex items-center">
                    <div class="flex space-x-2">
                        <img src="/page-home-lubkitalogo-icon.png" alt="Lubkita Logo" class="h-12 w-12 object-cover">
                        <div class="text-2xl font-bold flex flex-col justify-center sm:block">LUMBUNG DIGITAL RAKYAT</div>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <RouterLink to="/" class="text-sm text-gray-900 hover:bg-gray-50 font-semibold">
                        Beranda
                    </RouterLink>
                    <PackageDropdown />
                    <AboutUsDropdown />
                </div>

                <!-- Social Icons - Desktop -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="https://www.instagram.com/lubkita.id" target="_blank" rel="noopener noreferrer">
                        <img src="/page-home-instagram-icon.png" alt="Instagram" class="h-8 w-8">
                    </a>
                    <a href="mailto:info@lubkita.com">
                        <img src="/page-home-email-icon.png" alt="email" class="h-8 w-8">
                    </a>
                    <a href="https://wa.me/6282177726868" target="_blank" rel="noopener noreferrer">
                        <img src="/page-home-whatsapp-icon.png" alt="WhatsApp" class="h-8 w-8">
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button @click="isMenuOpen = !isMenuOpen" class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-show="isMenuOpen" class="md:hidden pb-4">
                <div class="flex flex-col space-y-4">
                    <RouterLink to="/" class="text-sm text-gray-900 hover:bg-gray-50 font-semibold px-3 py-2">
                        Beranda
                    </RouterLink>
                    <PackageDropdown />
                    <AboutUsDropdown />
                    
                    <!-- Social Icons - Mobile -->
                    <div class="flex justify-center space-x-6 pt-4">
                        <a href="https://www.instagram.com/lubkita.id" target="_blank" rel="noopener noreferrer">
                            <img src="/page-home-instagram-icon.png" alt="Instagram" class="h-8 w-8">
                        </a>
                        <a href="mailto:info@lubkita.com">
                            <img src="/page-home-email-icon.png" alt="email" class="h-8 w-8">
                        </a>
                        <a href="https://wa.me/6282177726868" target="_blank" rel="noopener noreferrer">
                            <img src="/page-home-whatsapp-icon.png" alt="WhatsApp" class="h-8 w-8">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main class="flex-grow">
      <RouterView />
    </main>

    <footer class="bg-gray-800">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="mt-8 border-t border-gray-700 pt-8 text-center">
            <p class="text-gray-400">&copy; 2025 PT Lumbung Artha Kita. All rights reserved.</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<style scoped>
header {
line-height: 1.5;
max-height: 100vh;
}

.logo {
display: block;
margin: 0 auto 2rem;
}

nav {
width: 100%;
font-size: 12px;
text-align: center;
margin-top: 2rem;
}

nav a.router-link-exact-active {
color: var(--color-text);
}

nav a.router-link-exact-active:hover {
background-color: transparent;
}

nav a {
display: inline-block;
padding: 0 1rem;
border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
border: 0;
}

@media (min-width: 1024px) {
header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
}

.logo {
    margin: 0 2rem 0 0;
}

header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
}
}
</style>
