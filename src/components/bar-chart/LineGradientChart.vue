<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'
import * as echarts from 'echarts'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
])

provide(THEME_KEY, 'light')

// Lista de fechas (eje X)
// const dateList = ['10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr', '15 Apr', '16 Apr', '17 Apr']

// Lista de valores de tiempo (eje Y) en formato HH:MM:SS
// const timeList = ['00:00:00', '01:23:20', '02:48:40', '04:10:10', '05:25:50']

// Generar datos aleatorios para el eje Y (fluctuaciones)
// const generateRandomTime = () => {
//   const hours = Math.floor(Math.random() * 4) // Entre 0 y 3 horas
//   const minutes = Math.floor(Math.random() * 60) // Entre 0 y 59 minutos
//   const seconds = Math.floor(Math.random() * 60) // Entre 0 y 59 segundos
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
// }

// Lista de tiempos generados aleatoriamente
// const timeList = Array(5).fill(0).map(generateRandomTime)

// Convertir horas a segundos para el eje Y
// const timeListInSeconds = timeList.map((time) => {
//   const [hours, minutes, seconds] = time.split(':').map(Number)
//   return hours * 3600 + minutes * 60 + seconds
// })

function generateRandomValues(count, min, max) {
  const values = []
  for (let i = 0; i < count; i++) {
    // Generar un valor aleatorio entre min y max (en segundos)
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min
    values.push(randomValue)
  }
  return values
}

function generateDateRange(startDate, days) {
  const dateList = []
  const start = new Date(startDate)
  for (let i = 0; i < days; i++) {
    const date = new Date(start)
    date.setDate(start.getDate() + i) // Incrementar días
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short'
    })
    dateList.push(formattedDate)
  }
  return dateList
}

const valueList = generateRandomValues(25, 0, 300)
const dateList = generateDateRange('2024-04-01', 25)

const option = ref({
  visualMap: {
    min: 0,
    max: 19980,
    type: 'continuous',
    show: false,
    seriesIndex: 0,
    inRange: {
      color: ['#08B545']
    }
  },
  title: {
    left: 150,
    text: 'Response Time Trends'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: dateList, // Fechas en el eje X
    axisLabel: {
      formatter: (value) => `${value}` // Mostrar las fechas tal cual en el eje X
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: function (value) {
        // Convertir los valores en segundos a formato HH:MM:SS
        const hours = Math.floor(value / 3600)
        const minutes = Math.floor((value % 3600) / 60)
        const seconds = value % 60
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      }
    }
  },
  grid: {
    height: '400'
  },
  series: {
    type: 'line',
    symbol: 'circle',
    symbolSize: 14,
    lineStyle: {
      width: 8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#004D1A' }, // Verde oscuro en la parte alta
        { offset: 1, color: '#08B545' } // Verde claro en la parte baja
      ])
    },
    // data: valueList
    data: valueList
  }
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
