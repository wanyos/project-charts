<template>
  <div class="div__main">
    <VueApexCharts type="bar" height="180" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

//   const props = defineProps({
//     seriesColor: {
//       type: String,
//       default: '#08B545'
//     }
//   })

const series = ref([
  {
    name: 'Interactions',
    data: [44, 10, 41]
  },
  {
    name: 'Sent messages',
    data: [53, 32, 33]
  },
  {
    name: 'Received messages',
    data: [12, 17, 11]
  }
])

const chartOptions = reactive({
  chart: {
    type: 'bar',
    // height: 100,
    stacked: true
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: 'Top Interactions'
  },
  xaxis: {
    categories: ['juanjor@gmail.com', 'ivak@mail.com', 'sonia@mail.com'],
    labels: {
        show: false // Oculta los labels del eje x
    //   formatter: function (val) {
    //     return val + 'K'
    //   }
    },
    axisBorder: {
      show: false // Oculta la línea del eje x
    },
    axisTicks: {
      show: false // Oculta los ticks del eje x
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
    axisBorder: {
      show: false // Oculta la línea del eje y
    },
    axisTicks: {
      show: false // Oculta los ticks del eje y
    }
  },
  tooltip: {
    enabled: false,
    y: {
      formatter: function (val) {
        return val + 'K'
      }
    }
  },
  grid: {
    show: false // Elimina las líneas de la cuadrícula
  },
  fill: {
    colors: ['#6b5b95', '#feb236', '#d64161'],
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetX: 40
  }
})
</script>

<style lang="scss" scoped>
.div__main {
  width: 45em;
  margin: 0 auto;
}
</style>
