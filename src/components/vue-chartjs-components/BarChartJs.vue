<template>
  <Bar id="my-chart-id" height="275px" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['< 15m', '1h', '4h', '12h', '1d', '2d', '> 2d'],
  datasets: [
    {
      backgroundColor: '#08B545',
      data: [0.1, 2, 1.2, 3.9, 1, 4.0, 9]
    }
  ]
})

const chartOptions = ref({
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Custom Chart Title'
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      grid: {
        display: false
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
