<template>
    <GChart :type="type" :data="data" :options="options" class="chart" />
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { GChart } from 'vue-google-charts'
  
  const type = ref('PieChart')

  const props = defineProps({
    colorSeries: {
        type: Array,
        default: () => []
    },
    titleSeries: {
        type: Array,
        default: () => []
    }
})


const data = computed(() => {
  const baseData = [['Emails', 'Internal vs. External']]
  if(props.titleSeries.length === 2){
    baseData.push([props.titleSeries[0], 5]);
    baseData.push([props.titleSeries[1], 12]);
  } else if(props.titleSeries.length === 3) {
    baseData.push([props.titleSeries[0], 5]);
    baseData.push([props.titleSeries[1], 12]);
    baseData.push([props.titleSeries[2], 2]);
  }
  return baseData
})


//   const data = ref([
//   ['Emails', 'Internal vs. Exernal'],
//   [props.titleSeries[0], 15],
//   [props.titleSeries[1], 32],
//   [props.titleSeries[2], 3],
//   ])


  const options = ref({
    title: 'Internal Vs. External',
    pieHole: 0.4,
  chartArea: { width: '90%', height: '65%' },
  width: 300,
  height: 300,
  legend: { position: 'none' },
  colors: props.colorSeries
  })
  </script>
  
  <style scoped>
  .chart {
    border: 1px solid black;
  }
  </style>
  