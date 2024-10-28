<template>
  <line-chart height="250px" :data="chartData" :library="chartOptions" />
</template>

<script setup>
import { ref } from 'vue'

const timeToSeconds = (timeString) => {
  const [hours, minutes, seconds] = timeString.split(':').map(Number)
  return hours * 3600 + minutes * 60 + seconds
}

// Función auxiliar para convertir segundos a formato HH:MM:SS
const secondsToTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const chartData = ref({
  '10 Apr': timeToSeconds('00:01:23'),
  '11 Apr': timeToSeconds('02:45:36'),
  '12 Apr': timeToSeconds('01:30:00'),
  '13 Apr': timeToSeconds('00:45:30'),
  '14 Apr': timeToSeconds('03:15:45'),
  '15 Apr': timeToSeconds('01:20:15'),
  '16 Apr': timeToSeconds('02:10:30')
})

// Las opciones en Chartkick van en library
const chartOptions = {
  responsive: false,
  elements: {
    line: {
      borderWidth: 4,
      tension: 0.4
    },
    point: {
      backgroundColor: '#08B545',
      borderColor: '#08B545',
      radius: 3,
      hoverRadius: 7
    }
  },
  scales: {
    y: {
      grid: {
        color: '#e5e5e5',
        drawBorder: false
      },
      ticks: {
        callback: function (value) {
          return secondsToTime(value)
        },
        padding: 10
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        padding: 10
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `Response time: ${secondsToTime(context.raw)}`
        }
      }
    },
    legend: {
      labels: {
        boxWidth: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.div__main {
  border: 1px solid black;
  width: 450px;
  height: 250px;
}
</style>
