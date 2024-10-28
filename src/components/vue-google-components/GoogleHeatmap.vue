<template>
  <GChart v-if="ready" :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { GChart } from 'vue-google-charts'

// Función para cargar Google Charts
const loadGoogleCharts = () => {
  return new Promise((resolve) => {
    if (window.google && window.google.visualization) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.src = 'https://www.gstatic.com/charts/loader.js'
      script.onload = () => {
        window.google.charts.load('current', { packages: ['calendar'] })
        window.google.charts.setOnLoadCallback(() => {
          resolve()
        })
      }
      document.body.appendChild(script)
    }
  })
}

const ready = ref(false)
const type = ref('Calendar')

// Datos: cada fila representa una combinación de día y hora
const data = ref([
  ['Date', 'Emails Sent'],
  [new Date(2023, 9, 30, 0), 1], // Saturday, 0:00
  [new Date(2023, 9, 30, 1), 3], // Saturday, 1:00
  [new Date(2023, 9, 30, 2), 2], // Saturday, 2:00
  [new Date(2023, 9, 30, 3), 4], // Saturday, 3:00
  [new Date(2023, 9, 30, 4), 5], // Saturday, 4:00
  [new Date(2023, 9, 30, 5), 3], // Saturday, 5:00
  [new Date(2023, 9, 31, 0), 2], // Sunday, 0:00
  [new Date(2023, 9, 31, 1), 5] // Sunday, 1:00
  // Agrega más datos según sea necesario
])

const options = ref({
  title: 'Emails Sent by Hour and Day of the Week',
  height: 350,
  calendar: {
    cellSize: 15,
    cellColor: { stroke: '#fff', strokeWidth: 1 },
    noDataColor: '#eeeeee' // Color para días sin datos
  }
})

// Cargar Google Charts al montar el componente
onMounted(async () => {
  await loadGoogleCharts()
  ready.value = true // Indica que Google Charts está listo
})
</script>

<style scoped>
.chart {
  margin: auto;
}
</style>

<!-- <template>
  <GChart :type="type" :data="data" :options="options" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('ScatterChart')

// Generamos los datos en un formato compatible con ScatterChart
const generateData = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = [['Day', 'Hour', 'Emails Sent']]

  for (let hour = 0; hour < 24; hour++) {
    for (let i = 0; i < daysOfWeek.length; i++) {
      const emailsSent = Math.floor(Math.random() * 50)
      data.push([daysOfWeek[i], hour, emailsSent])
    }
  }

  return data
}

const data = ref(generateData())

const options = ref({
  title: 'Weekly Email Activity',
  hAxis: {
    title: 'Day of the Week',
    ticks: [
      { v: 0, f: 'Mon' },
      { v: 1, f: 'Tue' },
      { v: 2, f: 'Wed' },
      { v: 3, f: 'Thu' },
      { v: 4, f: 'Fri' },
      { v: 5, f: 'Sat' },
      { v: 6, f: 'Sun' }
    ]
  },
  vAxis: {
    title: 'Hour of the Day',
    minValue: 0,
    maxValue: 23
  },
  sizeAxis: { minValue: 0, maxSize: 50 },
  colorAxis: { colors: ['#f7fbff', '#08306b'] },
  legend: 'none',
  width: 800,
  height: 600
})
</script>

<style scoped>
.chart {
  margin: auto;
}
</style> -->

<!-- <template>
  <GChart :type="type" :data="data" :options="options" :settings="settings" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('Calendar')

// Generamos datos simulados para representar la cantidad de correos por hora en cada día
const generateData = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = [
    [
      { type: 'string', id: 'Day' },
      { type: 'number', id: 'Hour' },
      { type: 'number', id: 'Emails Sent' }
    ]
  ]

  for (let hour = 0; hour < 24; hour++) {
    for (const day of daysOfWeek) {
      // Genera un número aleatorio de correos enviados (ejemplo de 0 a 50)
      const emailsSent = Math.floor(Math.random() * 50)
      data.push([day, hour, emailsSent])
    }
  }

  return data
}

const data = ref(generateData())

const options = ref({
  title: 'Weekly Email Activity',
  hAxis: { title: 'Day of the Week' },
  vAxis: { title: 'Hour of the Day' },
  colorAxis: {
    colors: ['#f7fbff', '#08306b'], // Degradado de claro a oscuro
    minValue: 0,
    maxValue: 50
  },
  width: 800,
  height: 600
})

const settings = ref({
  packages: ['calendar']
})
</script>

<style scoped>
.chart {
  margin: auto;
}
</style> -->

<!-- <template>
  <GChart :type="type" :data="data" :options="options" :settings="settings" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

// Tipo de gráfico Calendar
const type = ref('Calendar')

// Datos de muestra para el calendario
const data = ref([
  [
    { type: 'date', id: 'Date' },
    { type: 'number', id: 'Won/Loss' }
  ],
  [new Date(2012, 3, 13), 37032],
  [new Date(2012, 3, 14), 38024],
  [new Date(2012, 3, 15), 38024],
  [new Date(2012, 3, 16), 38108],
  [new Date(2012, 3, 17), 38229],

  [new Date(2013, 9, 4), 38177],
  [new Date(2013, 9, 5), 38705],
  [new Date(2013, 9, 12), 38210],
  [new Date(2013, 9, 13), 38029],
  [new Date(2013, 9, 19), 38823],
  [new Date(2013, 9, 23), 38345],
  [new Date(2013, 9, 24), 38436],
  [new Date(2013, 9, 30), 38447]
])

// Opciones de personalización del gráfico
const options = ref({
  title: 'Red Sox Attendance',
  width: 800,
  height: 700
})

// Configuración adicional para cargar el paquete Calendar de Google Charts
const settings = ref({
  packages: ['calendar']
})
</script>

<style scoped>
.chart {
  margin: auto;
}
</style> -->
