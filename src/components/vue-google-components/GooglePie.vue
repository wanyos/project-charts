<template>
    <GChart :type="type" :data="data" :options="options" class="chart" />
  </template>
  
  <script setup>
  import { ref } from 'vue'
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


  const data = ref([
  ['Emails', 'Emails Replied'],
  [props.titleSeries[0], 11],
  [props.titleSeries[1], 22],
  ])


  const options = ref({
    title: 'Emails Replied',
  chartArea: { width: '90%', height: '65%' }, // Ajustar el área de la gráfica
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
  