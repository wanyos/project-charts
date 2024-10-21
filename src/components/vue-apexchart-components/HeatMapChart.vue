<template>
  <div id="chart" class="chart">
    <VueApexCharts
      type="heatmap"
      width="100%"
      height="700px"
      :options="chartOptions"
      :series="series"
      class="apex"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  colorSeries: {
    type: String,
    default: ''
  }
})

// Función para generar datos
const generateData = (count, yrange) => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  let series = []
  for (let i = 0; i < count; i++) {
    let x = days[i]
    let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    series.push({ x: x, y: y })
  }
  return series
}

// Definir series de datos y opciones del gráfico como ref reactivo
const series = ref([
  { name: '00:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '02:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '03:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '01:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '04:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '05:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '06:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '07:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '08:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '09:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '10:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '11:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '12:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '13:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '14:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '15:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '16:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '17:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '18:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '19:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '20:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '21:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '22:00', data: generateData(7, { min: 0, max: 20 }) },
  { name: '23:00', data: generateData(7, { min: 0, max: 20 }) }
])

const chartOptions = ref({
  chart: {
    type: 'heatmap'
  },
  grid: {
    padding: {
      top: 20,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  xaxis: {
    labels: {
      show: true,
      offsetY: 0,
      style: {
        fontSize: '12px',
        colors: '#1a1a1a'
      }
    }
  },
  yaxis: {
    labels: {
      offsetX: -20,
      style: {
        fontSize: '12px',
        colors: '#1a1a1a'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: props.colorSeries
})
</script>

<style lang="scss" scoped>
.chart {
  max-width: 250px;
  height: 700px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 25px;
}

.apex {
}
</style>
