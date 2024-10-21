<template>
  <div class="div__main">
    <VueApexCharts type="pie" height="275px" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  colorSeries: {
    type: Array,
    default: () => []
  },
  labelsSeries: {
    type: Array,
    default: () => []
  }
})

const series = ref([13, 32])

const chartOptions = reactive({
  chart: {
    width: 380,
    type: 'pie'
  },
  labels: [props.labelsSeries[0], props.labelsSeries[1]],
  colors: [props.colorSeries[0], props.colorSeries[1]],
  stroke: {
    show: true,
    width: 1,
    colors: ['#000']
  },
  //   fill: {
  //     type: 'solid',
  //     opacity: 1,
  //     colors: ['#08B545', '#CEF0DA']
  //   },
  //   states: {
  //     hover: {
  //       filter: {
  //         type: 'lighten', // Cambiar color a uno más claro en hover
  //         value: 0.15 // Cantidad de aclarado
  //       }
  //     }
  //   },
  legend: {
    show: false
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'right'
        }
      }
    }
  ]
})
</script>

<style lang="scss" scoped>
.div__main {
  border: 1px solid black;
  width: 25em;
}
</style>
