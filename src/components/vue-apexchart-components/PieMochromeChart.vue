<template>
  <div class="div__main">
    <VueApexCharts type="pie" :options="chartOptions" :series="series" />
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
    width: '100%',
    height: '100%',
    type: 'pie'
  },
  labels: [props.labelsSeries[0], props.labelsSeries[1]],
  colors: [props.colorSeries[0], props.colorSeries[1]],
  //   theme: {
  //     monochrome: {
  //       enabled: true
  //     }
  //   },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -15,
        dropShadow: {
          enabled: false // Desactiva la sombra para que el color se aplique correctamente
        }
      },
      expandOnClick: true, // Expandir la sección al hacer click
      customScale: 1.05 // Escalar un poco al hacer hover
      //   donut: {
      //     labels: {
      //       show: false,
      //       total: {
      //         show: true,
      //         label: 'Total',
      //         color: '#08B545' // Color del label principal en hover
      //       }
      //     }
      //   }
    }
  },
  grid: {
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex]
      return [name, val.toFixed(1) + '%']
    },
    style: {
      fontSize: '12px',
      fontWeight: 200,
      fontFamily: 'Arial, sans-serif',
      colors: ['#fff']
    }
  },
  //   fill: {
  //     colors: ['#08B545', '#CEF0DA'],
  //     hover: {
  //       opacity: 0.9
  //     }
  //   },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  legend: {
    show: false
  }
})
</script>

<style lang="scss" scoped>
.div__main {
  // border: 1px solid black;
}
</style>
