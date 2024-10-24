<template>
  <Line height="250px" width="450px" :data="chartData" :options="chartOptions" />
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

const chartData = ref({
  labels: ['10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr', '15 Apr', '16 Apr'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#08B545',
      borderColor: '#08B545', // Color de la línea
      data: [5, 3, 8, 0, 11, 1, 5],
      borderWidth: 4,
      tension: 0.4,
      fill: {
        target: 'origin',
        above: '#08B545', // Area will be red above the origin
        below: 'rgb(0, 0, 255)' // And blue below the origin
      }
      //   pointBackgroundColor: '#08B545',
      //   pointBorderColor: '#08B545',
      //   pointRadius: 0,
      //   pointHoverRadius: 7
    }
  ]
})

const chartOptions = {
  responsive: false,
  scales: {
    y: {
      grid: {
        color: '#e5e5e5',
        drawBorder: false
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
    legend: {
      labels: {
        boxWidth: 0
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 10,
      titleColor: '#1a1a1a',
      titleFont: {
        size: 14,
        weight: 'normal'
      },
      bodyColor: '#fff',
      bodyFont: {
        size: 14
      },
      displayColors: false,
      callbacks: {
        label: function (context) {
          return `Sent: ${context.parsed.y}`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
