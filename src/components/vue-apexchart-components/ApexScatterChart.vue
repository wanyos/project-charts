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
    data: generateDayWiseTimeSeries(new Date('20 Mar 2017 GMT').getTime(), 30, {
      min: 0,
      max: 300
    })
  },

  {
    name: 'Received',
    data: generateDayWiseTimeSeries(new Date('10 Apr 2017 GMT').getTime(), 30, {
      min: 0,
      max: 300
    })
  }
])

const chartOptions = reactive({
  chart: {
    type: 'scatter',
    zoom: {
      type: 'xy'
    }
  },
  colors: [
    '#08B545',
    '#0096FB',
    
  ],
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
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    min: 0, // Límite inferior del eje Y
    max: 300, // Límite superior del eje Y
    title: {
      text: 'Peso (KB)'
    },
    labels: {
      formatter: function (value) {
        return value + ' KB'; // Añade el sufijo "KB" al eje Y
      }
    }
  },
  legend: {
    markers: {
      strokeWidth: [1, 1, 3, 3, 1, 4, 1, 1, 1]
    }
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
  width: 70%;
  margin: 0 auto;
}
</style>
