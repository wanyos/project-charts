<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'
import 'chartjs-adapter-date-fns';


Chart.register(MatrixController, MatrixElement)

const chartRef = ref(null)

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')

  function isoDayOfWeek(dt) {
    let wd = dt.getDay()
    wd = ((wd + 6) % 7) + 1
    return '' + wd
  }

  function startOfToday() {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0)
  }

  function generateData() {
    const data = []
    const end = startOfToday()
    let dt = new Date(new Date().setDate(end.getDate() - 365))
    while (dt <= end) {
      const iso = dt.toISOString().substr(0, 10)
      data.push({
        x: iso,
        y: isoDayOfWeek(dt),
        d: iso,
        v: Math.random() * 50
      })
      dt = new Date(dt.setDate(dt.getDate() + 1))
    }
    return data
  }

  const data = {
    datasets: [
      {
        label: 'My Matrix',
        data: generateData(),
        backgroundColor(c) {
          const value = c.dataset.data[c.dataIndex].v
          const alpha = (10 + value) / 60
          return `rgba(144, 238, 144, ${alpha})`
        },
        borderColor(c) {
          const value = c.dataset.data[c.dataIndex].v
          const alpha = (10 + value) / 60
          return `rgba(0, 100, 0, ${alpha})`
        },
        borderWidth: 1,
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'yellowgreen',
        width(c) {
          const a = c.chart.chartArea || {}
          return (a.right - a.left) / 53 - 1
        },
        height(c) {
          const a = c.chart.chartArea || {}
          return (a.bottom - a.top) / 7 - 1
        }
      }
    ]
  }

  const scales = {
    y: {
      type: 'time',
      offset: true,
      time: {
        unit: 'day',
        round: 'day',
        isoWeekday: 1,
        parser: 'i',
        displayFormats: {
          day: 'iiiiii'
        }
      },
      reverse: true,
      position: 'right',
      ticks: {
        maxRotation: 0,
        autoSkip: true,
        padding: 1,
        font: {
          size: 9
        }
      },
      grid: {
        display: false,
        drawBorder: false,
        tickLength: 0
      }
    },
    x: {
      type: 'time',
      position: 'bottom',
      offset: true,
      time: {
        unit: 'week',
        round: 'week',
        isoWeekday: 1,
        displayFormats: {
          week: 'MMM dd'
        }
      },
      ticks: {
        maxRotation: 0,
        autoSkip: true,
        font: {
          size: 9
        }
      },
      grid: {
        display: false,
        drawBorder: false,
        tickLength: 0
      }
    }
  }

  const options = {
    aspectRatio: 6,
    plugins: {
      legend: false,
      tooltip: {
        displayColors: false,
        callbacks: {
          title() {
            return ''
          },
          label(context) {
            const v = context.dataset.data[context.dataIndex]
            return ['d: ' + v.d, 'v: ' + v.v.toFixed(2)]
          }
        }
      }
    },
    scales: scales,
    layout: {
      padding: {
        top: 10
      }
    }
  }

  const config = {
    type: 'matrix',
    data: data,
    options: options
  }

  new Chart(ctx, config)
})
</script>

<style scoped>
canvas {
  height: 200px !important;
  width: 75% !important;
}
</style>
