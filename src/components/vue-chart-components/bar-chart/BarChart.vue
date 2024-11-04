<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
])

provide(THEME_KEY, 'light')

const props = defineProps({
  colorChart: {
    type: String,
    default: ''
  }
})

const option = ref({
  title: {
    left: 50,
    text: 'Time Before First Response'
  },
  legend: {
    show: false
  },
  tooltip: {
    position: function (pt) {
      return [pt[0], '10%']
    }
  },
  dataset: {
    dimensions: ['time', 'First Response'],
    source: [
      ['< 15m', 8],
      ['1h', 2],
      ['4h ', 5],
      ['12h', 7],
      ['1d', 15],
      ['2d', 9],
      ['> 2d', 1]
    ]
  },
  grid: {
    height: 280
  },
  xAxis: { type: 'category', axisLabel: { interval: 0, rotate: 30 } },
  yAxis: {},
  series: [
    {
      type: 'bar',
      itemStyle: {
        color: props.colorChart
      }
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
  width: 25em;
  /* margin-top: 4em;
        width: 50%;
        height: 50%; */
}
</style>
