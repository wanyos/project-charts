<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { HeatmapChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'
// import * as echarts from 'echarts'

use([
  CanvasRenderer,
  HeatmapChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent
])

provide(THEME_KEY, 'light')

const props = defineProps({
  visualMapColor: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  },
  colorPrimary: {
    type: String,
    default: ''
  }
})

// function getVirtualData(year) {
//   const date = +echarts.time.parse(year + '-01-01')
//   const end = +echarts.time.parse(+year + 1 + '-01-01')
//   const dayTime = 3600 * 24 * 1000
//   const data = []
//   for (let time = date; time < end; time += dayTime) {
//     data.push([
//       echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
//       Math.floor(Math.random() * 100)
//     ])
//   }
//   return data
// }

// function getData() {
//   const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
//   const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`)
//   const data = days.flatMap((_, dayIndex) =>
//     hours.map((_, hourIndex) => [dayIndex, hourIndex, Math.floor(Math.random() * 100)])
//   )
//   return data
// }

// const getHeatmapData = () => {
//   const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
//   const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`)

//   const data = days.flatMap((_, dayIndex) =>
//     hours.map((_, hourIndex) => [dayIndex, hourIndex, Math.floor(Math.random() * 100)])
//   )

//   return {
//     tooltip: {
//       formatter: (params) => {
//         const day = days[params.value[0]]
//         const hour = hours[params.value[1]]
//         const value = params.value[2]
//         return `Día: ${day}<br>Hora: ${hour}<br>Valor: ${value}`
//       }
//     },
//     xAxis: {
//       type: 'category',
//       data: days
//     },
//     yAxis: {
//       type: 'category',
//       data: hours
//     },
//     visualMap: {
//       min: 0,
//       max: 100,
//       calculable: true,
//       orient: 'vertical',
//       left: 'right',
//       bottom: '40%'
//     },
//     series: [
//       {
//         name: 'Heatmap',
//         type: 'heatmap',
//         data: data,
//         label: {
//           show: true
//         },
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 10,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           }
//         }
//       }
//     ]
//   }
// }

// const optionHeat = shallowRef(getHeatmapData())

// const option = ref({
//   title: {
//     text: 'Sent',
//     left: 'center',
//     textStyle: {
//       color: '#4A4A4A',
//       fontFamily: 'Inter, sant-serif',
//       fontSize: 16
//     }
//   },
//   tooltip: {
//     position: 'top'
//     // formatter: function (p) {
//     //   const format = echarts.time.format(p.data[0], '{yyyy}-{MM}-{dd}', false)
//     //   return format + ': ' + p.data[1]
//     // }
//   },
//   visualMap: {
//     min: 0,
//     max: 100,
//     calculable: true,
//     orient: 'vertical',
//     top: 'center'
//   },
//   calendar: [
//     {
//       orient: 'vertical',
//       range: '2015'
//     }
//   ],
//   series: [
//     {
//       type: 'heatmap',
//       coordinateSystem: 'calendar',
//       calendarIndex: 0,
//       data: getVirtualData('2015')
//     }

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`)
const data = days.flatMap((_, dayIndex) =>
  hours.map((_, hourIndex) => [dayIndex, hourIndex, Math.floor(Math.random() * 10)])
)

const option = ref({
  legend: {
    orient: 'vertical',
    itemWidth: 20,
    itemHeight: 15,
    left: 130,
    top: 60,
    textStyle: {
      fontSize: 16,
      color: '#4A4A4A'
    }
  },
  tooltip: {
    position: 'top',
    formatter: (params) => {
      const day = days[params.value[0]]
      const hour = hours[params.value[1]]
      const value = params.value[2]
      return `Day: ${day}<br>Hour: ${hour}<br>Value: ${value}`
    }
  },
  grid: {
    height: '600',
    width: '220',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: false
    },
    axisLabel: {
      show: true
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: 'vertical',
    top: 110,
    right: '25%',
    text: ['High', 'Low'],
    itemWidth: 20,
    textGap: 18,
    align: 'auto',
    inRange: {
      color: props.visualMapColor,
      symbolSize: [60, 100]
    }
  },
  series: [
    {
      name: props.title,
      type: 'heatmap',
      color: props.colorPrimary,
      data: data,
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
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
