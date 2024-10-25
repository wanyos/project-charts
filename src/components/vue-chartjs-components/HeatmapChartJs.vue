<template>
  <div class="div__main">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js/auto'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'

Chart.register(MatrixController, MatrixElement)

const props = defineProps({
  colorSeries: {
    type: String,
    default: ''
  }
})

const chartRef = ref(null)

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')

  const generateData = () => {
    const data = []
    for (let x = 1; x <= 7; x++) {
      for (let y = 1; y <= 24; y++) {
        data.push({
          x: x,
          y: y,
          v: Math.floor(Math.random() * 100)
        })
      }
    }
    return data
  }

  const data = {
    datasets: [
      {
        label: 'Matrix',
        data: generateData(),
        backgroundColor(context) {
          const value = context.dataset.data[context.dataIndex].v
          const alpha = value / 100
          // return `rgba(98, 157, 203, ${alpha})`
          return `${props.colorSeries} ${alpha})`
        },
        borderColor: 'white',
        borderWidth: 0.5,
        width: ({ chart }) => {
          const chartArea = chart.chartArea || {}
          // Ajustamos el divisor para las 7 columnas y reducimos el espacio
          return chartArea.width / 7 - 0.5
        },
        height: ({ chart }) => {
          const chartArea = chart.chartArea || {}
          // Ajustamos el divisor para las 24 filas
          return chartArea.height / 24 - 0.5
        }
      }
    ]
  }

  const config = {
    type: 'matrix',
    data: data,
    options: {
      maintainAspectRatio: false,
      responsive: true,
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
          min: 1,
          max: 7,
          ticks: {
            stepSize: 1,
            maxRotation: 0,
            callback: function (value) {
              const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
              return days[value - 1] || ''
            },
            padding: 10,
            font: {
              size: 12
            },
            color: '#1a1a1a' // Color de las etiquetas en el eje x
          },
          grid: {
            display: false
          }
        },
        y: {
          reverse: true,
          min: 1,
          max: 24,
          ticks: {
            stepSize: 1,
            callback: function (value) {
              return value - 1
            },
            padding: 10,
            font: {
              size: 12
            },
            color: '#1a1a1a' // Color de las etiquetas en el eje y
          },
          grid: {
            display: false
          }
        }
      }

      // scales: {
      //   x: {
      //     min: 0.5,
      //     max: 7.5,
      //     ticks: {
      //       stepSize: 1,
      //       maxRotation: 0
      //       callback: function (value) {
      //         if (value < 1 || value > 7) return ''
      //         const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
      //         return days[value - 1]
      //       }
      //     },
      //     grid: {
      //       display: false
      //     },
      //     offset: false
      //   },
      //   y: {
      //     min: 0.5,
      //     max: 24.5,
      //     ticks: {
      //       stepSize: 1
      //       callback: function (value) {
      //         if (value < 1 || value > 24) return ''
      //         return (value - 1).toString().padStart(2, '0')
      //       }
      //     },
      //     grid: {
      //       display: false
      //     },
      //     offset: true
      //   }
      // }
      // scales: {
      //   x: {
      //     min: 0.5,
      //     max: 7.5,
      //     ticks: {
      //       stepSize: 1,
      //       maxRotation: 0
      //     },
      //     grid: {
      //       display: false
      //     },
      //     offset: false // Esto ayuda a reducir el espacio entre columnas
      //   },
      //   y: {
      //     min: 0.5,
      //     max: 24.5,
      //     ticks: {
      //       stepSize: 1
      //     },
      //     grid: {
      //       display: false
      //     },
      //     offset: true
      //   }
      // }
    }
  }

  new Chart(ctx, config)

  // const data = {
  //   datasets: [
  //     {
  //       label: 'My Matrix',
  //       data: [
  //         { x: 1, y: 1, v: 11 },
  //         { x: 1, y: 2, v: 12 },
  //         { x: 1, y: 3, v: 13 },
  //         { x: 2, y: 1, v: 21 },
  //         { x: 2, y: 2, v: 22 },
  //         { x: 2, y: 3, v: 23 },
  //         { x: 3, y: 1, v: 31 },
  //         { x: 3, y: 2, v: 32 },
  //         { x: 3, y: 3, v: 33 }
  //       ],
  //       backgroundColor(context) {
  //         const value = context.dataset.data[context.dataIndex].v
  //         const alpha = (value - 5) / 40
  //         return `rgba(98, 157, 203, ${alpha})`
  //       },
  //       borderColor(context) {
  //         const value = context.dataset.data[context.dataIndex].v
  //         const alpha = (value - 5) / 40
  //         return `rgba(98, 157, 203, ${alpha})`
  //       },
  //       borderWidth: 1,
  //       // width: ({ chart }) => (chart.chartArea || {}).width / 3 - 1,
  //       // height: ({ chart }) => (chart.chartArea || {}).height / 3 - 1

  //       width: ({ chart }) => {
  //         const chartArea = chart.chartArea || {}
  //         return Math.min(chartArea.width, chartArea.height) / 2.9 // Valor menor que 3 para celdas más grandes
  //       },
  //       height: ({ chart }) => {
  //         const chartArea = chart.chartArea || {}
  //         return Math.min(chartArea.width, chartArea.height) / 2.9
  //       }
  //     }
  //   ]
  // }

  // const config = {
  //   type: 'matrix',
  //   data: data,
  //   options: {
  //     aspectRatio: 1,
  //     plugins: {
  //       legend: false,
  //       tooltip: {
  //         callbacks: {
  //           title() {
  //             return ''
  //           },
  //           label(context) {
  //             const v = context.dataset.data[context.dataIndex]
  //             return ['x: ' + v.x, 'y: ' + v.y, 'v: ' + v.v]
  //           }
  //         }
  //       }
  //     },
  //     scales: {
  //       x: {
  //         ticks: {
  //           stepSize: 1
  //         },
  //         grid: {
  //           display: false
  //         }
  //       },
  //       y: {
  //         offset: true,
  //         ticks: {
  //           stepSize: 1
  //         },
  //         grid: {
  //           display: false
  //         }
  //       }
  //     }
  //   }
  // }

  // new Chart(ctx, config)
})
</script>

<style scoped>
.div__main {
  border: 1px soli black;
  padding: 10px;
  display: flex;
  justify-content: center;
}

canvas {
  height: 700px !important;
  width: 225px !important;
}
</style>
