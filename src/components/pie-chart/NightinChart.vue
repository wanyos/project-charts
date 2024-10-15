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
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      color: props.colorSeries,
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 70, name: props.textSeries[0] },
        { value: 38, name: props.textSeries[1] },
        { value: 14, name: props.textSeries[2] }
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
