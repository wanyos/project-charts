<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'

Chart.register(MatrixController, MatrixElement)

const chartRef = ref(null)

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')

  const data = {
    datasets: [
      {
        label: 'My Matrix',
        data: [
          { x: 1, y: 1, v: 11 },
          { x: 1, y: 2, v: 12 },
          { x: 1, y: 3, v: 13 },
          { x: 2, y: 1, v: 21 },
          { x: 2, y: 2, v: 22 },
          { x: 2, y: 3, v: 23 },
          { x: 3, y: 1, v: 31 },
          { x: 3, y: 2, v: 32 },
          { x: 3, y: 3, v: 33 }
        ],
        backgroundColor(context) {
          const value = context.dataset.data[context.dataIndex].v
          const alpha = (value - 5) / 40
          // return `rgba(144, 238, 144, ${alpha})`
          return `rgba(98, 157, 203, ${alpha})`
        },
        borderColor(context) {
          const value = context.dataset.data[context.dataIndex].v
          const alpha = (value - 5) / 40
          // return `rgba(0, 100, 0, ${alpha})`
          return `rgba(98, 157, 203, ${alpha})`
        },
        borderWidth: 1,
        width: ({ chart }) => (chart.chartArea || {}).width / 3 - 1,
        height: ({ chart }) => (chart.chartArea || {}).height / 3 - 1
      }
    ]
  }

  const config = {
    type: 'matrix',
    data: data,
    options: {
      plugins: {
        legend: false,
        tooltip: {
          callbacks: {
            title() {
              return ''
            },
            label(context) {
              const v = context.dataset.data[context.dataIndex]
              return ['x: ' + v.x, 'y: ' + v.y, 'v: ' + v.v]
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            stepSize: 1
          },
          grid: {
            display: false
          }
        },
        y: {
          offset: true,
          ticks: {
            stepSize: 1
          },
          grid: {
            display: false
          }
        }
      }
    }
  }

  new Chart(ctx, config)
})
</script>

<style scoped>
canvas {
  height: 400px !important;
  width: 100% !important;
}
</style>
