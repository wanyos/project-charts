<template>
  <div class="div__main">
    <div class="chart-wrap">
      <div id="chart">
        <VueApexCharts type="donut" width="275px" :options="chartOptions" :series="series" />
      </div>
    </div>

    <div class="actions">
      <button @click="appendData">+ ADD</button>

      <button @click="removeData">- REMOVE</button>

      <!-- <button @click="randomize">RANDOMIZE</button> -->

      <button @click="reset">RESET</button>
    </div>
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

const series = ref([178, 23, 14])

const chartOptions = reactive({
  chart: {
    width: 380,
    type: 'donut'
  },
  ///labels: ['Direct Messages', 'CC', 'Others'],
  //colors: ['#0096FB', '#8DBCFD', '#CCEAFE'],
  labels: [props.labelsSeries[0], props.labelsSeries[1], props.labelsSeries[2]],
  colors: [props.colorSeries[0], props.colorSeries[1], props.labelsSeries[2]],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '50%'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }
  ],
  legend: {
    show: false,
    position: 'right',
    offsetY: 0,
    height: 230
  }
})

const appendData = () => {
  let arr = series.value.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  series.value = arr
}

const removeData = () => {
  if (series.value.length === 1) return
  let arr = series.value.slice()
  arr.pop()
  series.value = arr
}

// const randomize = () => {
//   series.value = series.value.map(function () {
//     return Math.floor(Math.random() * (100 - 1 + 1)) + 1
//   })
// }

const reset = () => {
  series.value = [44, 55, 13, 33]
}
</script>

<style lang="scss" scoped>
.div__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.actions button {
  margin: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
</style>
