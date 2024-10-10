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
  },
  legend: {
    top: '10%',
    left: 'center',
    orient: 'vertical'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      color: ['#08B545', '#CEF0DA'],
      radius: ['40%', '70%'],
      top: '25%',
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      // emphasis: {
      //   label: {
      //     show: true,
      //     fontSize: 40,
      //     fontWeight: 'bold',
      //     color: '#CEF0DA'
      //   }
      // },
      labelLine: {
        show: false
      },
      data: [
        { value: 13, name: 'Replied' },
        { value: 32, name: 'No replied' }
      ]
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
  /* border: 1px solid red;
  margin-top: 4em;
  width: 50%;
  height: 50%; */
}
</style>
