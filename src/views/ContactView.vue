<template>
    <div id="contact" class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Get in Touch
            </h2>
            <p class="mt-4 text-lg text-gray-500">
                Have questions? We'd love to hear from you.
            </p>
            </div>
            <div class="mt-8 max-w-lg mx-auto">
            <div class="grid grid-cols-1 gap-6">
                <input
                type="text"
                placeholder="Your Name"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                <input
                type="email"
                placeholder="Your Email"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                <textarea
                rows="4"
                placeholder="Your Message"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
                <button
                type="submit"
                class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                Send Message
                </button>
            </div>
            </div>
        </div>
    </div>
</template>