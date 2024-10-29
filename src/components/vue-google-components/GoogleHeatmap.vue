<!-- <template>
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
</style> -->

<template>
  <GChart :type="type" :data="data" :options="options" :settings="settings" class="chart" />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

// Tipo de gráfico Calendar
const type = ref('Calendar')

// const getTime = (h, m, s) => {
//   const tm = new Date()
//   tm.setHours(h, m, s)
//   return tm
// }

// Datos de muestra para el calendario

const data = ref([
  [
    { type: 'date', id: 'Date' },
    { type: 'number', id: 'Won/Loss' }
  ],
  //   [getTime(13, 0, 0), 37032],
  //   [getTime(14, 0, 0), 38024],
  //   [getTime(15, 0, 0), 38024],
  //   [getTime(16, 0, 0), 38108],
  //   [getTime(17, 0, 0), 38229]

  [new Date(2012, 3, 13), 37032],
  [new Date(2012, 3, 14), 38000],
  [new Date(2012, 3, 15), 12004],
  [new Date(2012, 3, 16), 28108],
  [new Date(2012, 3, 17), 38229]

  //   [new Date(2013, 9, 4), 38177],
  //   [new Date(2013, 9, 5), 38705],
  //   [new Date(2013, 9, 12), 38210],
  //   [new Date(2013, 9, 13), 38029],
  //   [new Date(2013, 9, 19), 38823],
  //   [new Date(2013, 9, 23), 38345],
  //   [new Date(2013, 9, 24), 38436],
  //   [new Date(2013, 9, 30), 38447]
])

const options = ref({
  width: 800,
  height: 800,
  calendar: {
    cellColor: {
      stroke: 'blue', // Color the border of the squares.
      strokeOpacity: 0.5, // Make the borders half transparent.
      strokeWidth: 2
    },
    dayOfWeekLabel: {
      fontName: 'Times-Roman',
      fontSize: 16,
      color: 'black',
      bold: false,
      italic: false
    },
    focusedCellColor: {
      stroke: 'red',
      strokeOpacity: 0.8,
      strokeWidth: 3
    },
    monthLabel: {
      fontName: 'Times-Roman',
      fontSize: 16,
      color: 'blue',
      bold: true,
      italic: false
    },
    colorAxis: {
      minValue: 0,
      colors: ['#FF0000', '#00FF00']
    },
    cellSize: 20,
    height: 600
  }
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
</style>

<!-- <template>
  <GChart
    :type="type"
    :data="data"
    :options="options"
    :settings="settings"
    class="chart"
  />
</template>

<script setup>
import { ref } from 'vue'
import { GChart } from 'vue-google-charts'

const type = ref('Table')


const generateData = () => {
  const days = ['', 'M', 'T', 'W', 'T', 'F', 'S', 'S'] // Encabezados de columna
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`)

  // Crear la estructura de datos con "Hour" como encabezado de primera columna
  const data = [days] // Primera fila como encabezado de columnas

  // Generar los datos aleatorios para cada hora del día
  hours.forEach(hour => {
    const row = [hour]
    days.slice(1).forEach(() => row.push(Math.floor(Math.random() * 21)))
    data.push(row)
  })

  return data
}

const data = ref(generateData())

const options = ref({
  width: 250,
  height: 600,
  chartData: {
    xLabels: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  }
  // allowHtml: true,
  // frozenColumns: 1,
  // sort: 'disable',
  // cssClassNames: {
  //   headerRow: 'header-row',
  //   tableRow: 'table-row',
  //   oddTableRow: 'table-row',
  //   selectedTableRow: 'table-row',
  //   tableCell: 'table-cell',
  //   headerCell: 'header-cell'
  // },
  // formatters: [
  //   {
  //     type: 'ColorFormat',
  //     ranges: [
  //       { from: 0, to: 5, color: '#ffffff', bgcolor: '#f1eef6' },
  //       { from: 6, to: 10, color: '#ffffff', bgcolor: '#bdc9e1' },
  //       { from: 11, to: 15, color: '#ffffff', bgcolor: '#74a9cf' },
  //       { from: 16, to: 20, color: '#ffffff', bgcolor: '#0570b0' }
  //     ],
  //     columns: Array.from({ length: 7 }, (_, i) => i + 1) // columnas de 1 a 7 (días)
  //   }
  // ]
})

const settings = ref({
  packages: ['table']
})
</script>

<style scoped>
.chart {
  margin: auto;
  
}

/* :deep(.header-row) {
  background-color: #f8f9fa !important;
  font-weight: bold;
}

:deep(.table-cell), :deep(.header-cell) {
  text-align: center !important;
  padding: 12px !important;
  border: 1px solid #dee2e6;
}

:deep(.google-visualization-table) {
  border-collapse: collapse;
}

:deep(.google-visualization-table-tr-over), 
:deep(.google-visualization-table-tr-over td), 
:deep(.google-visualization-table-tr-over-nonstrict) {
  background-color: transparent !important;
}

:deep(.google-visualization-table-tr-sel), 
:deep(.google-visualization-table-tr-sel td) {
  background-color: transparent !important;
} */
</style> -->
