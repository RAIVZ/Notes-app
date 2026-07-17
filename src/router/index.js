import { createRouter, createWebHistory } from 'vue-router'

import DashboardPage from '@/shared/components/main/page/DashboardPage/DashboardPage.vue'
import AnalyticsPage from '@/shared/components/main/page/AnalyticsPage/AnalyticsPage.vue'
import ReportsPage from '@/shared/components/main/page/ReportsPage/ReportsPage.vue'

  const routes = [
  {
    path: '/',                    // ✅ Главная
    name: 'DashboardPage',
    component: DashboardPage,
  },
  {
    path: '/analytics',           // ✅ Аналитика
    name: 'AnalyticsPage',
    component: AnalyticsPage,
  },
  {
    path: '/reports',             // ✅ Отчеты  
    name: 'ReportsPage',
    component: ReportsPage,
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
