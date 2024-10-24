<template>
  <div class="div__main">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'
import 'chartjs-adapter-date-fns'

Chart.register(MatrixController, MatrixElement)

const chartRef = ref(null)

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')

  // function formatHour(hour) {
  //   return `${hour.toString().padStart(2, '0')}:00`
  // }

  // Función para generar datos aleatorios
  // function generateData() {
  //   const data = []
  //   const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  //   // Para cada día de la semana
  //   for (let day of daysOfWeek) {
  //     // Para cada hora del día (0-23)
  //     for (let hour = 0; hour < 24; hour++) {
  //       data.push({
  //         x: day,
  //         y: formatHour(hour),
  //         v: Math.floor(Math.random() * 21) // Número aleatorio entre 0 y 20
  //       })
  //     }
  //   }
  //   return data
  // }

  // function generateData() {
  //   const data = []
  //   const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   for (let day of daysOfWeek) {
  //     for (let hour = 0; hour < 24; hour++) {
  //       data.push({
  //         x: hour.toString(), // Hora como string
  //         y: day,
  //         v: Math.floor(Math.random() * 21)
  //       })
  //     }
  //   }
  //   return data
  // }

  // const data = {
  //   datasets: [
  //     {
  //       label: 'Heatmap por Hora',
  //       data: generateData(),
  //       backgroundColor(c) {
  //         const value = c.dataset.data[c.dataIndex].v
  //         const alpha = value / 20 // Ajustado para rango 0-20
  //         return `rgba(8, 181, 69, ${alpha})`
  //       },
  //       borderColor(c) {
  //         const value = c.dataset.data[c.dataIndex].v
  //         const alpha = value / 20
  //         return `rgba(8, 181, 69, ${alpha})`
  //       },
  //       borderWidth: 1,
  //       hoverBackgroundColor: 'green',
  //       hoverBorderColor: 'yellowgreen',
  //       width(c) {
  //         const a = c.chart.chartArea || {}
  //         return (a.right - a.left) / 7 - 1
  //       },
  //       height(c) {
  //         const a = c.chart.chartArea || {}
  //         return (a.bottom - a.top) / 24 - 1
  //       }
  //     }
  //   ]
  // }

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
          return `rgba(8, 181, 69, ${alpha})`
        },
        borderColor(c) {
          const value = c.dataset.data[c.dataIndex].v
          const alpha = (10 + value) / 60
          return `rgba(8, 181, 69, ${alpha})`
        },
        borderWidth: 1,
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'yellowgreen',
        width(c) {
          const a = c.chart.chartArea || {}
          return (a.right - a.left) / 24 - 1
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
    aspectRatio: 5,
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
        top: 20
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
.div__main {
  border: 1px solid black;
  padding: 55px;
  /* position: relative;
  height: 40vh;
  width: 80vw; */
}

canvas {
  /* height: 250px !important;
  width: 55em; */
  margin: 0 auto;
}
</style>
