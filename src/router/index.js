import { createRouter, createWebHistory } from 'vue-router'
import HeatmapChartView from '../views/vuecharts-view/HeatmapChartView.vue'
import ScaleChartView from '@/views/vuecharts-view/ScaleChartView.vue'
import BarChartView from '@/views/vuecharts-view/BarChartView.vue'
import VueCharts from '@/views/VueCharts.vue'
import VueDataUIView from '@/views/VueDataUIView.vue'
import VueUiXyView from '@/views/vuedataui-view/VueUiXyView.vue'
import VueUiHeatmapView from '@/views/vuedataui-view/VueUiHeatmapView.vue'
import VueUiQuickChartView from '@/views/vuedataui-view/VueUiQuickChartView.vue'
import VueLightweightView from '@/views/VueLightweightView.vue'
import VueApexChartView from '@/views/VueApexChartView.vue'
import VueChartJsView from '@/views/VueChartJsView.vue'

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
        },
        {
          path: '/vueuiheatmap',
          name: 'vueuiheatmap',
          component: VueUiHeatmapView
        },
        {
          path: '/vueuiquickchart',
          name: 'vueuiquickchart',
          component: VueUiQuickChartView
        },
        {
          path: '/vueuipie',
          name: 'vueuipie',
          component: () => import('../views/vuedataui-view/VueUiPieView.vue')
        }
      ]
    },
    {
      path: '/vue-lightweight',
      name: 'vuelightweight',
      component: VueLightweightView,
      children: [
        {
          path: '/vuelightlw',
          name: 'vuelightlw',
          component: () => import('../views/vuelightweight-view/VueLwView.vue')
        }
      ]
    },
    {
      path: '/vue-apexchart',
      name: 'apexchart',
      component: VueApexChartView,
      children: [
        {
          path: '/apexchartheatmap',
          name: 'apexchartheatmap',
          component: () => import('../views/vueapexchart-view/HeatMapView.vue')
        },
        {
          path: '/apexchartarea',
          name: 'apexchartarea',
          component: () => import('../views/vueapexchart-view/AreaChartView.vue')
        },
        {
          path: '/apexchartbar',
          name: 'apexchartbar',
          component: () => import('../views/vueapexchart-view/BarChartView.vue')
        },
        {
          path: '/apexchartdonnut',
          name: 'apexchartdonnut',
          component: () => import('../views/vueapexchart-view/DonnutChartView.vue')
        }
      ]
    },
    {
      path: '/vue-chart-js',
      name: 'vue-chart-js',
      component: VueChartJsView,
      children: [
        {
          path: '/heatmapjs',
          name: 'heatmapjs',
          component: () => import('../views/vuechartjs-view/HeatmapView.vue')
        },
        {
          path: '/barchartjs',
          name: 'barchartjs',
          component: () => import('../views/vuechartjs-view/BarChartView.vue')
        },
        {
          path: '/areachartjs',
          name: 'areachartjs',
          component: () => import('../views/vuechartjs-view/AreaChartView.vue')
        },
        {
          path: '/piechartjs',
          name: 'pechartjs',
          component: () => import('../views/vuechartjs-view/PieChartView.vue')
        }
      ]
    }
  ]
})

export default router
