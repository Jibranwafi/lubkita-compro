<!-- SyaratKetentuan.vue -->
<template>
    <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="bg-gray-600 text-white py-6 rounded-t-lg">
            <h1 class="text-4xl font-bold text-center">Syarat Dan Ketentuan</h1>
        </div>

        <!-- Tabs -->
        <div class="flex justify-center border-b my-8">
        <div class="inline-flex bg-gray-100 rounded-lg p-1">
            <button 
            @click="activeTab = 'lubkita'"
            :class="[
                'px-8 py-2 rounded-lg font-medium transition-colors duration-200',
                activeTab === 'lubkita' 
                ? 'bg-white text-yellow-500 shadow-sm' 
                : 'text-gray-500 hover:bg-gray-200'
            ]"
            >
            Lubkita
            </button>
            <button 
            @click="activeTab = 'ldr'"
            :class="[
                'px-8 py-2 rounded-lg font-medium transition-colors duration-200',
                activeTab === 'ldr' 
                ? 'bg-white text-yellow-500 shadow-sm' 
                : 'text-gray-500 hover:bg-gray-200'
            ]"
            >
            LDR
            </button>
        </div>
        </div>

        <!-- Content -->
        <div class="bg-white shadow-lg rounded-b-lg p-6">
        <div v-if="activeTab === 'lubkita'" class="space-y-4">
            <h2 class="text-xl font-bold mb-4">Terms & Conditions</h2>
            <p class="text-gray-600 mb-4">
            Selamat datang di www.lubkita.com.<br>
            Syarat & ketentuan yang ditetapkan di bawah ini mengatur pemakaian jasa yang ditawarkan oleh PT. Lumbung Artha Kita terkait penggunaan situs www.lubkita.com. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna di bawah hukum.
            </p>

            <div class="space-y-4">
            <h3 class="font-bold">A. Definisi</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600">
                <li>PT Lumbung Artha Kita adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.lubkita.com, yakni situs pencarian toko dan Barang yang dijual oleh penjual terdaftar. Selanjutnya disebut Lubkita.</li>
                <li>Situs Lubkita adalah www.lubkita.com.</li>
                <li>Syarat & ketentuan adalah perjanjian antara Pengguna dan Lubkita yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Lubkita, serta tata cara penggunaan sistem layanan Lubkita.</li>
                <li>Pengguna adalah pihak yang menggunakan layanan Lubkita, termasuk namun tidak terbatas pada pembeli, penjual maupun pihak lain yang sekedar berkunjung ke Situs Lubkita.</li>
                <li>Pembeli adalah Pengguna terdaftar yang melakukan permintaan atas Barang yang dijual oleh Penjual di Situs Lubkita.</li>
                <li>Penjual adalah Pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran atas suatu Barang kepada para Pengguna Situs Lubkita.</li>
                <li>Barang adalah benda yang berwujud / memiliki fisik Barang yang dapat diantar / memenuhi kriteria pengiriman oleh perusahaan jasa pengiriman Barang.</li>
            </ol>
            </div>
        </div>

        <div v-else class="text-gray-600">
            <!-- LDR content here -->
            <p>LDR content will go here...</p>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'SyaratKetentuan',
    data() {
    return {
        activeTab: 'lubkita'
    }
    }
}
</script>