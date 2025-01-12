<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import HelloWorld from './components/HelloWorld.vue'
    import AboutUsDropdown from './components/AboutUsDropdown.vue';
    import { MenuButton } from '@headlessui/vue';
    import PackageDropdown from './components/PackageDropdown.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-white shadow-lg">
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 mb-10">
                <div class="flex items-center w-4/5">
                    <div class="flex w-1/2 pl-5 space-x-2">
                        <div>
                            <img src="/page-home-lubkitalogo-icon.png" alt="Lubkita Logo" class="h-12 w-12 object-cover">
                        </div>  
                        <div class="text-2xl font-bold flex flex-col justify-center">LUMBUNG DIGITAL RAKYAT</div>
                    </div>
                    <div class="hidden md:flex ml-10 space-x-8 justify-center w-1/2">
                        <div class="flex flex-col justify-center text-sm text-gray-900 ring-gray-300 hover:bg-gray-50 font-semibold">
                            <RouterLink to="/">Beranda </RouterLink>
                        </div>
                        <PackageDropdown />
                        <AboutUsDropdown />
                    </div>
                </div>
                <div class="flex items-center w-1/6">
                    <div class="w-1/3 h-full flex flex-col justify-center text-center">
                        <a href="https://www.instagram.com/lubkita.id" target="_blank" rel="noopener noreferrer">
                            <img src="/page-home-instagram-icon.png" alt="Instagram" class="h-8 w-8 mx-auto">
                        </a>
                    </div>
                    <div class="w-1/3 h-fullflex flex-col justify-center text-center">
                        <a href="mailto:info@lubkita.com">
                            <img src="/page-home-email-icon.png" alt="email" class="h-8 w-8 mx-auto">
                        </a>
                    </div>
                    <div class="w-1/3 h-full flex flex-col justify-center text-center">
                        <a href="https://wa.me/6282177726868" target="_blank" rel="noopener noreferrer">
                            <img src="/page-home-whatsapp-icon.png" alt="WhatsApp" class="h-8 w-8 mx-auto">
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
