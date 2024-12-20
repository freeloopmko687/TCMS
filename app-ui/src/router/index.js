import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { name: '笔记' }
    },
    {
      path: '/formula',
      name: 'formula',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Formula.vue'),
      meta: { name: '方剂' }
    },
    {
      path: '/medicine',
      name: 'medicine',
      component: () => import('@/views/Medicine.vue'),
      meta: { name: '中药' }
    },
  ],
})

export default router
