<template>
  <div class="div__main">
    <VueApexCharts type="bar" height="80%" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  emailCategories: {
    type: Array,
    default: () => []
  },
  dataTop: {
    type: Array,
    default: () => []
  }
})

const series = ref([
  {
    name: 'Interactions',
    // data: [44, 10, 41],
    data: props.dataTop.map((userData) => userData.interactions || 0)
  },
  {
    name: 'Sent messages',
    // data: [53, 32, 33],
    data: props.dataTop.map((userData) => userData.sent || 0)
  },
  {
    name: 'Received messages',
    // data: [12, 17, 11],
    data: props.dataTop.map((userData) => userData.received || 0)
  }
])

const chartOptions = reactive({
  chart: {
    type: 'bar',
    stacked: true
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
      borderRadius: 6,
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
    // categories: ['juanjor@gmail.com', 'ivak@mail.com', 'sonia@mail.com'],
    categories: props.emailCategories || 'empty',
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
    colors: ['#DC73FC', '#0096FB', '#08B545'],
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    offsetX: 40,
    markers: {
      fillColors: ['#DC73FC', '#0096FB', '#08B545'] // Colores de los marcadores de la leyenda
    }
  }
})
</script>

<style lang="scss" scoped>
.div__main {
  width: 45em;
  height: 350px;
  margin: 0 auto;
}
</style>
