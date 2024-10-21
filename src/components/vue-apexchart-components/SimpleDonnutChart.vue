<template>
  <div class="div__main">
    <VueApexCharts type="donut" :options="chartOptions" :series="series" />
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

const series = ref([14, 32])

const chartOptions = reactive({
  chart: {
    type: 'donut'
  },
  labels: [props.labelsSeries[0], props.labelsSeries[1]],
  colors: [props.colorSeries[0], props.colorSeries[1]],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '50%'
      }
    }
  },
  //   fill: {
  //     colors: ['#08B545', '#CEF0DA'], // Colores predeterminados
  //     hover: {
  //       opacity: 1 // Desactivar cualquier cambio de opacidad en hover
  //     }
  //   },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'normal',
      colors: ['#1a1a1a']
    }
  },
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
          position: 'bottom'
        }
      }
    }
  ]
})
</script>

<style lang="scss" scoped>
.div__main {
  border: 1px solid black;
}
</style>
