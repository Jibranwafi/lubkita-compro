<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AboutUsDropdown from './components/AboutUsDropdown.vue';
import PackageDropdown from './components/PackageDropdown.vue';

</script>

<template>

    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex">
                        <div>logo</div>
                        <div class="text-2xl font-bold flex">LUMBUNG DIGITAL RAKYAT</div>
                    </div>
                    <div class="hidden md:flex ml-10 space-x-8">
                        <RouterLink to="/" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Beranda </RouterLink>
                        <RouterLink to="/about" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Lubkita.com</RouterLink>
                        <RouterLink to="/services" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Packages</RouterLink>
                        <RouterLink to="/contact" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Pendaftaran</RouterLink>
                        <PackageDropdown />
                        <AboutUsDropdown />
                    </div>
                </div>
                <div class="flex items-center border-black border-2 w-full h-full">
                    <div class="w-1/3">instagram</div>
                    <div class="w-1/3">Email</div>
                    <div class="w-1/3">WhatsApp</div>
                </div>
            </div>
        </div>
    </nav>




<RouterView />





<footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
            <h3 class="text-white text-lg font-bold mb-4">Company</h3>
            <ul class="space-y-2">
            <li><RouterLink to="/about" class="text-gray-300 hover:text-white">About</RouterLink></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Careers</a></li>
            <li><a href="#contact" class="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-white text-lg font-bold mb-4">Resources</h3>
            <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Documentation</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Help Center</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-white text-lg font-bold mb-4">Legal</h3>
            <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Privacy</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Terms</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Security</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-white text-lg font-bold mb-4">Social</h3>
            <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Twitter</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">LinkedIn</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">GitHub</a></li>
            </ul>
        </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8 text-center">
        <p class="text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</footer>



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
