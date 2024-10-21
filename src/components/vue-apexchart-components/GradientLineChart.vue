<template>
  <div class="div__main">
    <VueApexCharts
      type="line"
      height="275px"
      :options="chartOptions"
      :series="series"
      class="chart"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

// function generateRandomTime() {
//   const hours = Math.floor(Math.random() * 6) // Genera horas entre 0 y 5
//   const minutes = Math.floor(Math.random() * 60) // Genera minutos entre 0 y 59
//   const seconds = Math.floor(Math.random() * 60) // Genera segundos entre 0 y 59

//   // Formatear las horas, minutos y segundos con dos dígitos
//   const formattedTime = [
//     hours.toString().padStart(2, '0'), // Asegura que las horas tengan 2 dígitos
//     minutes.toString().padStart(2, '0'), // Asegura que los minutos tengan 2 dígitos
//     seconds.toString().padStart(2, '0') // Asegura que los segundos tengan 2 dígitos
//   ].join(':')

//   return formattedTime
// }

// const yAxisTimes = Array.from({ length: 5 }, generateRandomTime)
// const yAxisTimes = ['00:00:00', '01:20:00', '02:40:00', '04:00:00', '05:20:00']

const series = ref([
  {
    name: 'Response Time',
    data: [0, 75, 120, 540, 12300, 12900, 10600, 9500, 800, 1200, 3300, 450]
  }
])

const chartOptions = reactive({
  chart: {
    height: 350,
    type: 'line'
  },
  //   forecastDataPoints: {
  //     count: 7
  //   },
  stroke: {
    width: 7,
    curve: 'smooth'
  },
  colors: ['#08B545'],
  markers: {
    size: 5,
    colors: ['#fff'],
    strokeColors: ['#08B545'],
    strokeWidth: 4,
    hover: {
      size: 7
    }
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '10 Apr',
      '11 Apr',
      '12 Apr',
      '13 Apr',
      '14 Apr',
      '15 Apr',
      '16 Apr',
      '17 Apr',
      '18 Apr',
      '19 Apr',
      '20 Apr',
      '21 Apr'
    ],
    tickAmount: 12,
    labels: {
      //   formatter: function (value, timestamp, opts) {
      //     return opts.dateFormatter(new Date(timestamp), 'dd MMM')
      //   }
    }
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        const hours = Math.floor(value / 3600)
        const minutes = Math.floor((value % 3600) / 60)
        const seconds = value % 60
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      },
      style: {
        fontSize: '12px',
        colors: ['#1a1a1a']
      },
      offsetX: 20
    },
    tickAmount: 5 // Muestra solo 5 ticks en el eje Y
  },
  grid: {
    padding: {
      top: 30,
      left: 50,
      right: 0
    }
  },
  //   title: {
  //     text: 'Forecast',
  //     align: 'left',
  //     style: {
  //       fontSize: '16px',
  //       color: '#666'
  //     }
  //   },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      gradientToColors: ['#005B26'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100]
    }
  }
})
</script>

<style lang="scss" scoped>
.div__main {
  width: 25em;
  margin: 0 auto;
}
</style>
