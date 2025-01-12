<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Form Pendaftaran</h2>
        
        <!-- Success Message -->
        <div v-if="submitted" class="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Terima kasih! Data Anda telah berhasil disimpan.
        </div>
  
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Two columns layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Nama Field -->
            <div>
              <label for="nama" class="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                id="nama"
                v-model="formData.nama"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama lengkap"
              />
            </div>
  
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="contoh@email.com"
              />
            </div>
  
            <!-- NIK Field -->
            <div>
              <label for="nik" class="block text-sm font-medium text-gray-700 mb-1">
                NIK
              </label>
              <input
                id="nik"
                v-model="formData.nik"
                type="text"
                required
                maxlength="16"
                pattern="\d{16}"
                title="NIK harus 16 digit angka"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan 16 digit NIK"
              />
              <p v-if="formData.nik && !validateNIK(formData.nik)" class="mt-1 text-sm text-red-600">
                NIK harus terdiri dari 16 digit angka
              </p>
            </div>
  
            <!-- Kode Referensi Field -->
            <div>
              <label for="kodeReferensi" class="block text-sm font-medium text-gray-700 mb-1">
                Kode Referensi
              </label>
              <input
                id="kodeReferensi"
                v-model="formData.kodeReferensi"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan kode referensi (opsional)"
              />
            </div>
  
            <!-- Jalan Field -->
            <div class="md:col-span-2">
              <label for="jalan" class="block text-sm font-medium text-gray-700 mb-1">
                Alamat Jalan
              </label>
              <input
                id="jalan"
                v-model="formData.jalan"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan alamat lengkap"
              />
            </div>
  
            <!-- Provinsi Field -->
            <div>
              <label for="provinsi" class="block text-sm font-medium text-gray-700 mb-1">
                Provinsi
              </label>
              <select
                id="provinsi"
                v-model="formData.provinsi"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option v-for="provinsi in provinsiList" :key="provinsi" :value="provinsi">
                  {{ provinsi }}
                </option>
              </select>
            </div>
  
            <!-- Kota Field -->
            <div>
              <label for="kota" class="block text-sm font-medium text-gray-700 mb-1">
                Kota/Kabupaten
              </label>
              <input
                id="kota"
                v-model="formData.kota"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan kota/kabupaten"
              />
            </div>
  
            <!-- Kecamatan Field -->
            <div>
              <label for="kecamatan" class="block text-sm font-medium text-gray-700 mb-1">
                Kecamatan
              </label>
              <input
                id="kecamatan"
                v-model="formData.kecamatan"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan kecamatan"
              />
            </div>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Kirim Data
          </button>
        </form>
      </div>
    </div>
  </template>

<script>

import { ref } from 'vue'

const formData = ref({
  nama: '',
  email: '',
  nik: '',
  jalan: '',
  provinsi: 'DKI Jakarta', // Default value
  kota: '',
  kecamatan: '',
  kodeReferensi: ''
})

const submitted = ref(false)

// List of provinces in Indonesia (sample)
const provinsiList = [
  'DKI Jakarta',
  'Jawa Barat',
  'Jawa Tengah',
  'Jawa Timur',
  'Banten',
  'DI Yogyakarta',
  'Bali',
  // Add more provinces as needed
]

const handleSubmit = () => {
  // Here you would typically send the data to your backend
  console.log('Form submitted:', formData.value)
  submitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    formData.value = {
      nama: '',
      email: '',
      nik: '',
      jalan: '',
      provinsi: 'DKI Jakarta',
      kota: '',
      kecamatan: '',
      kodeReferensi: ''
    }
    submitted.value = false
  }, 3000)
}

// NIK validation (basic 16-digit check)
const validateNIK = (nik) => {
  return /^\d{16}$/.test(nik)
}



export default {
    name: 'Pendaftaran',
    data() {
    return {
        activeTab: 'lubkita'
    }
    }
}
</script>