<template>
  <section>
    <v-chart class="chart" :option="option" autoresize />
  </section>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'
import * as echarts from 'echarts'

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])

provide(THEME_KEY, 'light')

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  sliderColor: {
    type: String,
    default: ''
  },
  seriesName: {
    type: String,
    default: ''
  },
  itemStyle: {
    type: Array,
    default: () => []
  },
  areaStyle: {
    type: Array,
    default: () => []
  }
})

// let base = +new Date(2021, 9, 3)
// let oneDay = 24 * 3600 * 1000
// let date = []
// let data = [Math.random() * 30]
// for (let i = 1; i < 20000; i++) {
//   var now = new Date((base += oneDay))
//   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
//   data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
// }

let base = +new Date(2021, 9, 1) // Empezamos en el 1 de Octubre de 2021
let oneDay = 24 * 3600 * 1000 // Milisegundos en un día
let date = []
let data = []

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

// Generamos datos para un mes (30 días)
for (let i = 0; i < 30; i++) {
  var now = new Date(base + i * oneDay)

  // Formato de fecha "D MMM" (por ejemplo: 19 Apr)
  let formattedDate = `${now.getDate()} ${monthNames[now.getMonth()]}`
  date.push(formattedDate)

  // Generar los datos de emails enviados, valores entre 0 y 10
  let emailsSent = Math.round(Math.random() * 10)
  data.push(emailsSent)
}

const option = ref({
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%']
    }
  },
  title: {
    left: 50,
    text: props.title
  },
  grid: {
    height: 260
  },
  xAxis: {
    type: 'category',
    data: date
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'slider',
      backgroundColor: props.sliderColor,
      start: 0,
      end: 50
    },
    {
      start: 0,
      end: 100
    }
  ],
  series: [
    {
      name: 'Messages Sent',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: props.itemStyle[0]
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: props.areaStyle[0]
          },
          {
            offset: 1,
            color: props.areaStyle[1]
          }
        ])
      },
      data: data
    }
  ]
})

//   const option = ref({
//     title: {
//       text: 'Sent',
//       left: 'center',
//       textStyle: {
//         color: '#4A4A4A',
//         fontFamily: 'Inter, sant-serif',
//         fontSize: 16
//       }
//     },
//     legend: {
//       top: '10%',
//       left: 'center',
//       orient: 'vertical',
//       itemGap: 20,
//       itemWidth: 30,
//       itemHeight: 23,
//       textStyle: {
//         fontSize: 16,
//         color: '#4A4A4A'
//       }
//     },
//     toolbox: {
//       show: true,
//       feature: {
//         mark: { show: true },
//         dataView: { show: true, readOnly: false },
//         restore: { show: true },
//         saveAsImage: { show: true }
//       }
//     },
//     series: [
//       {
//         name: 'Nightingale Chart',
//         type: 'pie',
//         color: ['#08B545', '#CEF0DA'],
//         radius: [50, 250],
//         center: ['50%', '50%'],
//         roseType: 'area',
//         itemStyle: {
//           borderRadius: 8
//         },
//         data: [
//           { value: 70, name: 'Replied' },
//           { value: 38, name: 'No replied' },
//           { value: 14, name: 'Direct' }
//         ]
//       }
//     ]
//   })
</script>

<style scoped>
section {
  border: 1px solid black;
  height: 400px;
}

.chart {
  /* border: 1px solid red;
      margin-top: 4em;
      width: 50%;
      height: 50%; */
}
</style>
