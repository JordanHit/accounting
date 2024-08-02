import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import RefillPage from "@/views/RefillPage.vue";
import RepairPage from "@/views/RepairPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/refill',
      name: 'refill',
      component: RefillPage
    },
    {
      path: '/repair',
      name: 'repair',
      component: RepairPage
    },
  ]
})

export default router
