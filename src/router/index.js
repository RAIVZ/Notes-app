import { createRouter, createWebHistory } from 'vue-router'
import Mine from '@/shared/components/main/AppMain.vue'
import DashboardPage from '@/shared/components/main/DashboardPage/DashboardPage.vue'
import AnalyticsPage from '@/shared/components/main/AnalyticsPage/AnalyticsPage.vue'
import ReportsPage from '@/shared/components/main/ReportsPage/ReportsPage.vue'

  const routes = [
    {
      path: '/',
      name: 'Mine',
      component: Mine,
    }, 
    {
      path: '/',
      name: 'DashboardPage',
      component: DashboardPage,
    }, 
    {
      path: '/',
      name: 'AnalyticsPage',
      component: AnalyticsPage,
    },
    {
      path: '/',
      name: 'ReportsPage',
      component: ReportsPage,
    },   
    // {
    //   path: '/analytics',
    //   name: 'Analytics',
    //   component: , // ленивая загрузка
    //   },
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
