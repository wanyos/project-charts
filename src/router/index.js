import { createRouter, createWebHistory } from 'vue-router'
import HeatmapChartView from '../views/vuecharts-view/HeatmapChartView.vue'
import ScaleChartView from '@/views/vuecharts-view/ScaleChartView.vue'
import BarChartView from '@/views/vuecharts-view/BarChartView.vue'
import VueCharts from '@/views/VueCharts.vue'
import VueDataUIView from '@/views/VueDataUIView.vue'
import VueUiXyView from '@/views/vuedataui-view/VueUiXyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vue-charts',
      name: 'vue-charts',
      component: VueCharts,
      children: [
        {
          path: '/heatmapcharts',
          name: 'heatmapcharts',
          component: HeatmapChartView
        },
        {
          path: '/piecharts',
          name: 'piecharts',
          component: () => import('../views/vuecharts-view/PieChartView.vue')
        },
        {
          path: '/scalecharts',
          name: 'scalecharts',
          component: ScaleChartView
        },
        {
          path: '/barcharts',
          name: 'barcharts',
          component: BarChartView
        }
      ]
    },
    {
      path: '/vue-data-ui',
      name: 'vue-data-ui',
      component: VueDataUIView,
      children: [
        {
          path: '/vueuixy',
          name: 'vueuixy',
          component: VueUiXyView
        }
      ]
    },
    {
      path: '/',
      redirect: '/main' // Redirige a la ruta principal
    }
  ]
})

export default router
