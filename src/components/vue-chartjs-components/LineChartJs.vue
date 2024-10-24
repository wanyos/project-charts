<template>
  <Line height="250px" :data="chartData" :options="chartOptions" />
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { ref } from 'vue'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

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
  labels: ['10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr', '15 Apr', '16 Apr'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#08B545',
      data: [
        '00:01:23',
        '02:45:36',
        '01:30:00',
        '00:45:30',
        '03:15:45',
        '01:20:15',
        '02:10:30'
      ].map(timeToSeconds),

      borderWidth: 4, // Línea más gruesa
      lineWidth: 3,
      segment: {
        borderWidth: 4 // Asegura el grosor de la línea en los segmentos
      },
      tension: 0.4, // Hace la línea más suave (0 para línea recta, 1 para muy curva)
      fill: false, // No rellenar el área bajo la línea
      pointBackgroundColor: '#08B545', // Color de los puntos
      pointBorderColor: '#08B545',
      pointRadius: 3, // Tamaño de los puntos
      pointHoverRadius: 7
    }
  ]
})

const chartOptions = {
  responsive: false,
  scales: {
    y: {
      grid: {
        color: '#e5e5e5', // Color de las líneas horizontales
        drawBorder: false // No dibujar el borde del eje
      },
      ticks: {
        callback: function (value) {
          return secondsToTime(value)
        },
        padding: 10 // Espacio entre los números y el eje
      }
    },
    x: {
      grid: {
        display: false // Ocultar las líneas verticales del grid
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
        boxWidth: 0 // Ocultar el cuadrado de la leyenda si no lo necesitas
      }
    }
  }
}

// const chartOptions = ref({
//   responsive: false,
//   maintainAspectRatio: false,
//   plugins: {
//     title: {
//       display: true,
//       text: 'Custom Chart Title'
//     },
//     legend: {
//       display: false
//     }
//   },
//   scales: {
//     y: {
//       ticks: {
//         callback: function (value) {
//           return secondsToTime(value)
//         }
//       }
//     }
//   }
// })
</script>

<style lang="scss" scoped></style>
