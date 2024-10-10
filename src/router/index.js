import { createRouter, createWebHistory } from 'vue-router'
import HeatmapChartView from '../views/HeatmapChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/heatmapcharts',
      name: 'heatmapcharts',
      component: HeatmapChartView
    },
    {
      path: '/piecharts',
      name: 'piecharts',
      component: () => import('../views/PieChartView.vue')
    }
  ]
})

export default router
