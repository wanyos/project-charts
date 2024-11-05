<template>
  <GChart :type="type" :data="rawData" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('ScatterChart')

// Datos iniciales con valores que determinarán la opacidad
// const rawData = ref([
//   ['Day', 'Hour', 'Value'],
//   [1, 8, 5],   // Mon (1)
//   [1, 9, 10],  // Mon (1)
//   [1, 10, 15], // Mon (1)
//   [2, 15, 20], // Tue (2)
//   [2, 16, 25], // Tue (2)
//   [3, 10, 12], // Wed (3)
//   [3, 11, 18], // Wed (3)
//   [4, 12, 18], // Thu (4)
//   [4, 13, 22], // Thu (4)
//   [5, 18, 25], // Fri (5)
//   [5, 19, 30], // Fri (5)
//   [6, 6, 8],   // Sat (6)
//   [6, 7, 12],  // Sat (6)
//   [7, 22, 30], // Sun (7)
//   [7, 23, 35]  // Sun (7)
// ]);

const rawData = ref([
  ['Day', 'Hour', 'Value'], // Asegúrate de que estás usando 'Hour' también
  [0, 5, 1],   // Mon (0), 5 emails enviados
  [1, 20, 1],  // Tue (1), 20 emails enviados
  [2, 12, 1],  // Wed (2), 12 emails enviados
  [3, 18, 1],  // Thu (3), 18 emails enviados
  [4, 25, 1],  // Fri (4), 25 emails enviados
  [5, 8, 1],   // Sat (5), 8 emails enviados
  [6, 30, 1]   // Sun (6), 30 emails enviados
]);

const options = ref({
  width: 800,
  height: 600,
  chartArea: { width: '80%', height: '65%' },
  legend: { position: 'none' },
  pointSize: 20,
  colors: ['#FF5733'], // Cambia el color aquí
  hAxis: {
    title: 'Days of the Week',
    ticks: [
      { v: 0, f: 'M' },  // Mon
      { v: 1, f: 'T' },  // Tue
      { v: 2, f: 'W' },  // Wed
      { v: 3, f: 'T' },  // Thu
      { v: 4, f: 'F' },  // Fri
      { v: 5, f: 'S' },  // Sat
      { v: 6, f: 'S' }   // Sun
    ],
    gridlines: { color: '#ccc' } // Líneas verticales visibles
  },
  vAxis: {
    title: 'Emails Sent',
    viewWindow: { min: 0, max: 30 }, // Ajusta según el máximo de emails enviados
    ticks: Array.from({ length: 31 }, (_, i) => i)  // Muestra hasta 30
  }
});
</script>

<style scoped>
.chart {
  border: 1px solid black;
}
</style>




<!-- // Color base
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
}) -->








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
