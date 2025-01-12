<!-- VisiMisi.vue -->
<template>
    <div class="min-h-screen bg-gray-100 p-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="bg-yellow-500 text-white px-6 py-2 rounded-lg inline-block mb-8">
          <h1 class="text-2xl font-bold">Visi Misi</h1>
        </div>
  
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Vision Section -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-center">Visi</h2>
            <div class="flex justify-center mb-4">
              <div class="flex">
                <span v-for="i in 5" :key="i" class="text-yellow-500 text-2xl">★</span>
              </div>
            </div>
            <p class="text-gray-700 text-center">
              Menjadi penyedia dan penggerak utama produk pangan berkualitas serta
              infrastruktur logistik berteknologi tinggi untuk mendukung ketahanan pangan
              nasional dan mendorong kemandirian ekonomi masyarakat Indonesia
              melalui inovasi dan digitalisasi yang berkelanjutan.
            </p>
          </div>
  
          <!-- Mission Section -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-4 text-center">Misi</h2>
            <div class="flex justify-center mb-4">
              <div class="flex">
                <span v-for="i in 5" :key="i" class="text-yellow-500 text-2xl">★</span>
              </div>
            </div>
            <ul class="space-y-3 text-gray-700">
              <li>• Mendukung Program Ketahanan Pangan Nasional</li>
              <li>• Berperan aktif dalam menyediakan produk pangan berkualitas dengan distribusi yang
                efisien, tepat waktu, dan merata di seluruh Indonesia.</li>
              <li>• Mendorong Pembangunan Ekonomi Kerakyatan</li>
              <li>• Mengoptimalkan sistem digitalisasi pangan untuk mempercepat pemerataan pasokan,
                mendukung kesejahteraan rakyat, dan menguatkan ekonomi kerakyatan nasional.</li>
              <li>• Memberikan Solusi Kompetitif</li>
              <li>• Menyediakan layanan dan infrastruktur logistik premium dengan teknologi terkini yang
                mendukung pertumbuhan usaha pemerintah, mitra bisnis, dan masyarakat.</li>
              <li>• Inovasi dan Pertumbuhan Berkelanjutan</li>
              <li>• Terus mencari ide-ide baru untuk mengembangkan produk, teknologi, dan kemitraan
                yang kuat demi kemajuan sektor pangan nasional.</li>
              <li>• Kolaborasi yang Strategis</li>
              <li>• Bekerja sama dengan pemerintah, asosiasi, dan sektor swasta untuk menciptakan
                ekosistem pangan yang kokoh, mandiri, dan berkelanjutan.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisiMisi'
  }
  </script>