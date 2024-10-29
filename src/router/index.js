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
import VueAgChartView from '@/views/VueAgChartView.vue'
import VueChartKickView from '@/views/VueChartKickView.vue'
import VueGoogleChartView from '@/views/VueGoogleChartView.vue'

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
    },
    {
      path: '/vue-ag-charts',
      name: 'vue-ag-charts',
      component: VueAgChartView,
      children: [
        {
          path: '/agheatmap',
          name: 'agheatmap',
          component: () => import('../views/ag-charts/AgHeatmapView.vue')
        },
        {
          path: '/agbarchart',
          name: 'agbarchart',
          component: () => import('../views/ag-charts/AgBarChartView.vue')
        }
      ]
    },
    {
      path: '/vue-chartkick',
      name: 'vuechartkick',
      component: VueChartKickView,
      children: [
        {
          path: '/bubblechart',
          name: 'bubblechart',
          component: () => import('../views/vuechartkick-vue/BubbleChartView.vue')
        },
        {
          path: '/scatterchart',
          name: 'scatterchart',
          component: () => import('../views/vuechartkick-vue/ScatterChartView.vue')
        },
        {
          path: '/linechart',
          name: 'linechart',
          component: () => import('../views/vuechartkick-vue/LineChartView.vue')
        }
      ]
    },
    {
      path: '/vue-google',
      name: 'vuegoogle',
      component: VueGoogleChartView,
      children: [
        {
          path: '/googlebar',
          name: 'googlebar',
          component: () => import('../views/googlechart-view/GoogleBarView.vue')
        },
        {
          path: '/googleline',
          name: 'googleline',
          component: () => import('../views/googlechart-view/GoogleLineView.vue')
        },
        {
          path: '/googleheatmap',
          name: 'googleheatmap',
          component: () => import('../views/googlechart-view/GoogleHeatmapView.vue')
        },
        {
          path: '/googlearea',
          name: 'googlearea',
          component: () => import('../views/googlechart-view/GoogleAreaView.vue')
        },
        {
          path: '/googlepie',
          name: 'googlepie',
          component: () => import('../views/googlechart-view/GooglePieView.vue')
        },
        {
          path: '/googlebubble',
          name: 'googlebubble',
          component: () => import('../views/googlechart-view/GoogleBubbleView.vue')
        },
        {
          path: '/googlescatter',
          name: 'googlescatter',
          component: () => import('../views/googlechart-view/GoogleScatterView.vue')
        }
      ]
    }
  ]
})

export default router
