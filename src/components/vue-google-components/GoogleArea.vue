<template>
  <GChart :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('AreaChart')

const props = defineProps({
  colorSeries: {
    type: String,
    default: ''
  }
})

const data = ref([
  ['Date', 'Messages'],
  ['02 Oct', 10],
  ['03 Oct', 7],
  ['04 Oct', 5],
  ['05 Oct', 2],
  ['06 Oct', 0],
  ['07 Oct', 9],
  ['08 Oct', 12],
  ['09 Oct', 3],
  ['10 Oct', 5],
  ['11 Oct', 1]
])

const options = ref({
  title: 'Company Performance',
  hAxis: {
    titleTextStyle: { color: '#333' },
    slantedText: true, // Inclina el texto del eje X si es necesario
    slantedTextAngle: 45, // Ajusta el ángulo de inclinación
    textPosition: 'out' // Coloca las etiquetas fuera del gráfico
  },
  vAxis: {
    minValue: 0,
    textPosition: 'out' // Coloca las etiquetas fuera del gráfico en el eje Y
  },
  chartArea: { width: '90%', height: '65%' }, // Ajustar el área de la gráfica
  width: 800,
  height: 300,
  legend: { position: 'none' },
  colors: [props.colorSeries], // Color de la línea y del área
  areaOpacity: 0.6
})
</script>

<style scoped>
.chart {
  border: 1px solid black;
}
</style>
