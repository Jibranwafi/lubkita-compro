import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import ContactView from '@/views/ContactView.vue'
import PelatihanLdrView from '@/views/PelatihanLdrView.vue'
import DropdownView from '@/components/PackageDropdown.vue'
import VisiMisiView from '@/views/VisiMisiView.vue'
import SyaratView from '@/views/SyaratView.vue'
import LubkitaComView from '@/views/LubkitaComView.vue'
import LdrView from '@/views/LdrView.vue'
import PtLubkitaView from '@/views/PtLubkitaView.vue'
import PendaftaranView from '@/views/PendaftaranView.vue'
import PaketGoldView from '@/views/PaketGoldView.vue'
import PendaftaranLDRView from '@/views/PendaftaranLDRView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView,
    },
    {
      path: '/pelatihan-ldr',
      name: 'pelatihan-ldr',
      component: PelatihanLdrView,
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: DropdownView,
    },
    {
      path: '/visi-misi',
      name: 'VisiMisi',
      component: VisiMisiView
    },
    {
      path: '/pt-lubkita',
      name: 'PtLubkita',
      component: PtLubkitaView
    },
    {
      path: '/Ldr',
      name: 'Ldr',
      component: LdrView
    },
    {
      path: '/pendaftaran/LDR0A',
      name: 'LDR0A',
      component: PendaftaranLDRView
    },
    {
      path: '/paket-gold',
      name: 'PaketGold',
      component: PaketGoldView
    },
    {
      path: '/syarat-ketentuan',
      name: 'SyaratKetentuan',
      component:SyaratView
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component:PendaftaranView
    },
    {
      path: '/lubkitacom',
      name: 'lubkitacom',
      component:LubkitaComView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
