<template>
  <GChart :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('ColumnChart')
const data = ref([
  ['Time', 'First Responses'],
  ['< 15m', 13],
  ['1h', 5],
  ['4h', 1],
  ['12h', 7],
  ['1d', 2],
  ['2d', 3],
  ['> 2d', 8]
])
const options = ref({
  title: 'First Responses',
  width: 500,
  height: 400,
  hAxis: {
    slantedText: true,
    slantedTextAngle: 45
  },
  chartArea: { width: '80%', height: '65%' },
  colors: ['#08B545', '#CEF0DA'],
  legend: { position: 'none' }
})
</script>

<style scoped>
.chart {
  border: 1px solid black;
}
</style>
