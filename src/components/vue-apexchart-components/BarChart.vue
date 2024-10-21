<template>
  <div class="div__main">
    <VueApexCharts type="bar" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  seriesColor: {
    type: String,
    default: '#08B545'
  }
})

const series = ref([
  {
    name: 'First Responses',
    data: [13, 5, 1, 7, 2, 3, 8],
    color: props.seriesColor
  }
])

const chartOptions = reactive({
  //   annotations: {
  //     points: [
  //       {
  //         x: 'Bananas',
  //         seriesIndex: 0,
  //         label: {
  //           borderColor: '#775DD0',
  //           offsetY: 0,
  //           style: {
  //             color: '#fff',
  //             background: '#775DD0'
  //           },
  //           text: 'Bananas are good'
  //         }
  //       }
  //     ]
  //   },
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: '70%'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0
  },
  grid: {
    // row: {
    //   colors: ['#fff', '#f2f2f2']
    // }
  },
  xaxis: {
    type: 'category',
    categories: ['< 15m', '1h', '4h', '12h', '1d', '2d', '> 2d'],
    labels: {
      rotate: -45,
      rotateAlways: true,
      style: {
        fontSize: '12px',
        colors: ['#1a1a1a']
      }
    }
  },
  yaxis: {
    // title: {
    //   text: 'Servings'
    // }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    }
  }
})
</script>

<style lang="scss" scoped>
.div__main {
  width: 15em;
  margin: 0 auto;
}
</style>
