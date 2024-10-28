<template>
  <GChart :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('LineChart')

function timeToMinutes(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number)
  return hours * 60 + minutes + seconds / 60
}

// Convertir minutos a formato HH:mm:ss
function formatMinutesToHHMMSS(minutes) {
  const hours = Math.floor(minutes / 60)
  const mins = Math.floor(minutes % 60)
  const secs = Math.round((minutes % 1) * 60)
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const data = ref([
  ['Date', 'Response (minutes)'],
  ['10 Apr', timeToMinutes('00:00:00')],
  ['11 Apr', timeToMinutes('00:00:00')],
  ['12 Apr', timeToMinutes('00:00:00')],
  ['13 Apr', timeToMinutes('01:23:00')],
  ['14 Apr', timeToMinutes('01:11:00')],
  ['15 Apr', timeToMinutes('02:46:00')],
  ['16 Apr', timeToMinutes('04:10:00')],
  ['17 Apr', timeToMinutes('03:02:00')],
  ['18 Apr', timeToMinutes('03:31:00')],
  ['19 Apr', timeToMinutes('04:46:00')]
])

const maxMinutes = 300 // Puedes ajustar este valor según tus datos
const tickInterval = 30 // Intervalo entre etiquetas, por ejemplo, cada 30 minutos
const ticks = Array.from(
  { length: Math.ceil(maxMinutes / tickInterval) + 1 },
  (_, i) => i * tickInterval
).map((minutes) => ({
  v: minutes,
  f: formatMinutesToHHMMSS(minutes)
}))

const options = ref({
  title: 'Response Time Trends',
  curveType: 'function',
  width: 600,
  height: 400,
  vAxis: {
    // title: 'Response Time (HH:mm:ss)',
    ticks: ticks, // Usa las etiquetas personalizadas
    viewWindow: { min: 0 } // Asegura que el valor mínimo sea 0
  },
  //   hAxis: {
  //     title: 'Date'
  //   },
  legend: { position: 'none' },
  series: {
    0: {
      color: '#08B545', // Cambiar color de la línea
      lineWidth: 5, // Grosor de la línea
      pointsVisible: true, // Mostrar puntos en cada valor
      pointSize: 8 // Tamaño de los puntos
    }
  }
})
</script>

<style scoped>
.chart {
  border: 1px solid black;
  margin: auto;
}
</style>
