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

const props = defineProps({
  colorSeries: {
    type: Array,
    default: () => []
  },
  textSeries: {
    type: Array,
    default: () => []
  }
})

const option = ref({
  title: {
    text: 'Sent',
    left: 'center',
    textStyle: {
      color: '#4A4A4A',
      fontFamily: 'Inter, sant-serif',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '10%',
    left: 'center',
    orient: 'vertical',
    itemGap: 20,
    itemWidth: 30,
    itemHeight: 23,
    textStyle: {
      fontSize: 16,
      color: '#4A4A4A'
    },
    data: props.textSeries
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      color: props.colorSeries,
      radius: ['25%', '55%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 4
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 40,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 13, name: props.textSeries[0] },
        { value: 32, name: props.textSeries[1] }
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
