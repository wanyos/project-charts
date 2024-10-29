<template>
  <GChart :type="type" :data="processedData" :options="options" class="chart" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('ScatterChart')

// Datos iniciales con valores que determinarán la opacidad
const rawData = ref([
  ['Day', 'Hour', 'Value'],
  ['Mon', 8, 5],
  ['Tue', 15, 20],
  ['Wed', 10, 12],
  ['Thu', 12, 18],
  ['Fri', 18, 25],
  ['Sat', 6, 8],
  ['Sun', 22, 30]
])

// Color base
const baseColor = '#08B545'

// Función para obtener color con opacidad
function getColorWithOpacity(color, value) {
  const opacity = Math.min(1, Math.max(0.1, value / 30))
  const [r, g, b] = color.match(/\w\w/g).map((c) => parseInt(c, 16))
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Procesar los datos para convertir cada punto en su propia serie con color personalizado
const processedData = computed(() => {
  // Estructura inicial de datos para ScatterChart
  const data = [['Day', 'Hour', { role: 'style' }]]

  // Agregar cada punto con su color y opacidad específica como una nueva entrada en la matriz
  rawData.value.slice(1).forEach(([day, hour, value]) => {
    const color = getColorWithOpacity(baseColor, value)
    data.push([day, hour, color])
  })

  return data
})

const options = ref({
  width: 800,
  height: 600,
  chartArea: { width: '80%', height: '65%' },
  legend: { position: 'none' },
  pointSize: 20,
  hAxis: {
    title: 'Days of the Week',
    ticks: [
      { v: 'Mon', f: 'Mon' },
      { v: 'Tue', f: 'Tue' },
      { v: 'Wed', f: 'Wed' },
      { v: 'Thu', f: 'Thu' },
      { v: 'Fri', f: 'Fri' },
      { v: 'Sat', f: 'Sat' },
      { v: 'Sun', f: 'Sun' }
    ]
  },
  vAxis: {
    title: 'Hour of the Day',
    viewWindow: { min: 0, max: 23 },
    ticks: Array.from({ length: 24 }, (_, i) => i)
  }
})
</script>

<style scoped>
.chart {
  border: 1px solid black;
}
</style>

<!-- <template>
  <GChart :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('ScatterChart')

// Definir los datos con las iniciales de los días de la semana y horas
const data = ref([
  ['Day', 'Hour'],
  ['M', 8],
  ['T', 15],
  ['W', 10],
  ['T', 12],
  ['F', 18],
  ['S', 6],
  ['S', 22]
])

const options = ref({
  width: 800,
  height: 600,
  chartArea: { width: '80%', height: '65%' },
  colors: ['#08B545'],
  legend: { position: 'none' },
  pointSize: 18,
  hAxis: {
    title: 'Days of the Week',
    ticks: [
      { v: 0, f: 'M' },
      { v: 1, f: 'T' },
      { v: 2, f: 'W' },
      { v: 3, f: 'T' },
      { v: 4, f: 'F' },
      { v: 5, f: 'S' },
      { v: 6, f: 'S' }
    ]
  },
  vAxis: {
    title: 'Hour of the Day',
    viewWindow: { min: 0, max: 23 },
    ticks: Array.from({ length: 24 }, (_, i) => i) // Rango de 0 a 23 para las horas
  },
  colorAxis: {
    colors: ['#d1f4e2', '#08B545'] // Degradado de color: claro para valores bajos y oscuro para valores altos
  }
})
</script>

<style scoped>
.chart {
  border: 1px solid black;
}
</style> -->

<!-- <template>
  <GChart :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('ScatterChart')
const data = ref([
  ['Year', 'Sales'],
  ['2004', 1000],
  ['2005', 1170],
  ['2006', 660],
  ['2008', 1030],
  ['2009', 1000],
  ['2010', 1170],
  ['2011', 60],
  ['2012', 1030]
])
const options = ref({
  // title: 'Company Performance',
  curveType: 'function',
  width: 800,
  height: 600,
  chartArea: { width: '80%', height: '65%' },
  colors: ['#08B545', '#CEF0DA'],
  legend: { position: 'none' }
})
</script>

<style scoped>
.chart {
  border: 1px solid black;
}
</style> -->
