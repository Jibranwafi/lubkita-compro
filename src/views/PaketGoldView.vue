<!-- SyaratKetentuan.vue -->
<template>
    <div class="bg-red-200 p-6 flex flex-col">
        <div class="bg-blue-200 border-2 border-black">
            <div class="flex flex-col ">
                <div class="border-2 border-black p-5 ">PAKET GOLD Image</div>
                <div class="flex w-full">
                    <div class="w-1/6 border-2 border-black p-3">insert image here</div>
                    <div class="flex flex-col mx-auto w-2/3">
                        <div class="border-2 border-black p-3 text-center text-4xl font-bold italic">Siap membuka grosir toko online anda? </div>
                        <div class="border-2 border-black p-3 text-center text-2xl italic">Paket Gold kami dirancang khusus untuk Anda yang baru memulai perjalanan bisnis. Nikmati kemudahan dalam mendaftar produk, dukungan pelanggan yang responsif, dan berbagai fitur lainnya untuk membantu bisnis Anda berkembang dengan cepat. Bergabunglah sekarang dan wujudkan ide-ide Anda menjadi keuntungan nyata!</div>
                    </div>
                    <div class="w-1/6 border-2 border-black p-3">insert image here</div>
                </div>
                <div class="border-2 border-black p-5 mt-20 text-center">Mengapa memilih paket gold?</div>
                <div class="border-2 border-black flex">
                    <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 1</div>
                    <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 2</div>
                    <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 3</div>
                    <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 4</div>
                </div>
                <div class="border-2 border-black p-5 mt-20 text-center flex">
                    <div class="border-2 border-black w-1/2">cek paket Platinum kita</div>
                    <div class="border-2 border-black w-1/2">cek paket LDR kita</div>
                </div>
            </div>             
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaketGold',
    data() {
    return {
        activeTab: 'lubkita'
    }
    }
}
</script>