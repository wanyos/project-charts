<template>
  <div class="div__main">
    <VueApexCharts type="scatter" height="450px" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

function generateDayWiseTimeSeries(baseTime, count, { min, max }) {
  const series = []
  let currentTime = baseTime

  for (let i = 0; i < count; i++) {
    const y = Math.floor(Math.random() * (max - min + 1)) + min
    series.push([currentTime, y])
    currentTime += 86400000
  }

  return series
}

const series = ref([
  {
    name: 'Sent',
    data: generateDayWiseTimeSeries(new Date('20 Mar 2017 GMT').getTime(), 500, {
      min: 0,
      max: 400
    })
  },

  {
    name: 'Received',
    data: generateDayWiseTimeSeries(new Date('10 Apr 2017 GMT').getTime(), 500, {
      min: 0,
      max: 400
    })
  }
])

const chartOptions = reactive({
  chart: {
    type: 'scatter',
    toolbar: {
      show: true,
      offsetY: -20 // Aumenta el espacio entre el chart y los botones de la esquina superior derecha
    },
    zoom: {
      type: 'xy'
    }
  },
  colors: ['#08B545', '#0096FB'],
  dataLabels: {
    enabled: false
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      min: 50, // Ajusta el mínimo del eje y
      max: 400, // Ajusta el máximo del eje y
      tickAmount: 20, // Controla el número de etiquetas en el eje y
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 30, // Aumenta el número de ticks para ver más etiquetas en el eje x
    min: new Date('20 Mar 2017 GMT').getTime(),
    max: new Date('01 Aug 2017 GMT').getTime(),
    labels: {
      rotate: -45, // Opcional: Rota las etiquetas para mejorar la legibilidad
      format: 'dd MMM' // Formato de fecha
    },
    title: {
      text: '',
      offsetX: -500,
      offsetY: 20,
      style: {
        color: undefined,
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-title'
      }
    }
  },
  yaxis: {
    min: 0,
    max: 500, // Ajusta el máximo del eje Y a 500 KB
    tickAmount: 10, // Aumenta el número de etiquetas en el eje Y
    title: {
      text: 'Peso (KB)'
    },
    labels: {
      formatter: function (value) {
        return value + ' KB'
      }
    }
  },
  legend: {
    markers: {
      strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1]
    },
    offsetY: 10
  },
  markers: {
    shape: ['square', 'circle'],
    size: 6,
    fillOpacity: 0.8,
    strokeColors: '#333',
    strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1]
  }
})
</script>

<style lang="scss" scoped>
.div__main {
  width: 60%;
  margin: 0 auto;
}
</style>
