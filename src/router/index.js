import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/shared/components/main/AppMain.vue'
  const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
      // {
      //   path: '/privacy',
      //   name: 'Privacy',
      //   component: Privacy
      // },
  ]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
