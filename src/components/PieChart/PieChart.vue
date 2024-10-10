<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'light')

const option = ref({
  title: {
    text: 'Sent',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
    // formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    top: '10%',
    orient: 'vertical',
    left: 'center',
    data: ['Replied', 'No Replied']
  },
  series: [
    {
      name: 'Sent',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      color: ['#08B545', '#CEF0DA'],
      data: [
        { value: 13, name: 'Replied' },
        { value: 32, name: 'No Replied' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
  /* margin-top: 4em;
    width: 50%;
    height: 50%; */
}
</style>
