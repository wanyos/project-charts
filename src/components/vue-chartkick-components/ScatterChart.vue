<template>
  <!-- <scatter-chart :data="data" :library="chartOptions" height="500px" /> -->
  <!-- <scatter-chart
    :data="[
      [174.0, 80.0],
      [176.5, 82.3]
    ]"
    xtitle="Size"
    ytitle="Population"
  ></scatter-chart> -->
  <div class="chart-container">
    <scatter-chart :data="scatterData" :library="chartOptions" ymin="0" ymax="23" height="600px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const generateScatterData = () => {
  const data = []
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const value = Math.floor(Math.random() * 21) // Valor entre 0 y 20
      data.push([day, hour, value]) // Formato [x, y, valor]
    }
  }
  console.log('data', data)
  return data
}

// Datos generados
const scatterData = ref(generateScatterData())

// Generar valores aleatorios entre 0 y 20 para representar el número de correos enviados
// const generateRandomValue = () => Math.floor(Math.random() * 21)

// Generar datos para un scatter-heatmap
// const scatterData = computed(() => {
//   const data = []
//   for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
//     for (let hour = 0; hour < 24; hour++) {
//       data.push([
//         dayIndex, // x: día de la semana (0 para Lunes, 6 para Domingo)
//         hour, // y: hora del día
//         generateRandomValue() // valor entre 0 y 20 para representar intensidad
//       ])
//     }
//   }
//   return data
// })

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'linear',
      min: -1, // Ajuste para centrar el primer día
      max: 7, // Ajuste para incluir la columna del último día (Sunday)
      ticks: {
        stepSize: 1,
        callback: function (value) {
          const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
          return days[value] || '' // Mapear el valor al día correspondiente
        },
        padding: 10,
        font: {
          size: 12
        },
        color: '#1a1a1a'
      },
      grid: {
        display: false
      }
    },
    y: {
      min: 0,
      max: 23,
      ticks: {
        stepSize: 1,
        // callback: function (value) {
        //   return value + 1
        // },
        padding: 10,
        font: {
          size: 12
        },
        color: '#1a1a1a'
      },
      grid: {
        display: false
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const dayNames = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ]
          const day = dayNames[context.raw[0]] || ''
          const hour = context.raw[1].toString().padStart(2, '0') + ':00'
          const value = context.raw[2]
          return `${day} ${hour} - Emails: ${value}`
        }
      }
    },
    legend: {
      display: false
    }
  },
  elements: {
    point: {
      backgroundColor: (context) => {
        const value = context.raw[2]
        const blueIntensity = Math.floor((value / 20) * 255) // Escala de azul
        return `rgba(0, 0, ${blueIntensity}, 0.8)` // Más oscuro con valores más altos
      },
      radius: 10
    }
  }
})

// const chartOptions = ref({
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       min: 1,
//       max: 7,
//       ticks: {
//         stepSize: 1,
//         maxRotation: 0,
//         callback: function (value) {
//           const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
//           return days[value - 1] || ''
//         },
//         padding: 10,
//         font: {
//           size: 12
//         },
//         color: '#1a1a1a'
//       },
//       grid: {
//         display: false
//       }
//     },
//     y: {
//       reverse: true,
//       min: 1,
//       max: 24,
//       ticks: {
//         stepSize: 1,
//         callback: function (value) {
//           return value - 1
//         },
//         padding: 10,
//         font: {
//           size: 12
//         },
//         color: '#1a1a1a'
//       },
//       grid: {
//         display: false
//       }
//     }
//   },
//   plugins: {
//     tooltip: {
//       callbacks: {
//         label: function (context) {
//           const dayNames = [
//             'Monday',
//             'Tuesday',
//             'Wednesday',
//             'Thursday',
//             'Friday',
//             'Saturday',
//             'Sunday'
//           ]
//           const day = dayNames[context.raw[0]]
//           const hour = context.raw[1].toString().padStart(2, '0') + ':00'
//           const value = context.raw[2]
//           return `${day} ${hour} - Emails: ${value}`
//         }
//       }
//     },
//     legend: {
//       display: false
//     }
//   },
//   elements: {
//     point: {
//       backgroundColor: (context) => {
//         const value = context.raw[2]
//         const intensity = Math.floor((value / 20) * 255)
//         return `rgba(255, 0, 0, ${intensity / 255})` // Color rojo para intensidad
//       },
//       radius: 7
//     }
//   }
// })

// Crear datos para toda la semana y todas las horas
// const generateHeatmapData = () => {
//   const data = []
//   // eslint-disable-next-line no-unused-vars
//   const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

//   for (let hour = 0; hour < 24; hour++) {
//     for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
//       data.push({
//         x: dayIndex,
//         y: hour,
//         v: generateRandomValue() // valor entre 0 y 20
//       })
//     }
//   }
//   return data
// }

// const heatmapData = ref({
//   datasets: [
//     {
//       data: generateHeatmapData(),
//       backgroundColor: function (context) {
//         if (!context.raw) return
//         const value = context.raw.v

//         // Escala de colores de azul claro a azul oscuro
//         const intensity = Math.floor((value / 20) * 255)
//         return `rgba(0, 0, ${intensity}, 0.8)`

//         // Alternativa: escala de calor (rojo para valores altos)
//         // return `rgba(${Math.floor((value/20) * 255)}, 0, 0, 0.8)`
//       },
//       pointRadius: 15, // Tamaño fijo para todos los puntos
//       pointHoverRadius: 15
//     }
//   ]
// })

// const chartOptions = ref({
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       type: 'linear',
//       position: 'bottom',
//       min: -0.5,
//       max: 6.5,
//       ticks: {
//         callback: function (value) {
//           const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
//           return days[value]
//         },
//         stepSize: 1
//       },
//       grid: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: 'Día de la semana'
//       }
//     },
//     y: {
//       type: 'linear',
//       min: -0.5,
//       max: 23.5,
//       ticks: {
//         callback: function (value) {
//           return value.toString().padStart(2, '0') + ':00'
//         },
//         stepSize: 1
//       },
//       grid: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: 'Hora'
//       }
//     }
//   },
//   plugins: {
//     tooltip: {
//       callbacks: {
//         label: function (context) {
//           const day = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'][
//             context.raw.x
//           ]
//           const hour = context.raw.y.toString().padStart(2, '0') + ':00'
//           return `${day} ${hour} - Valor: ${context.raw.v}`
//         }
//       }
//     },
//     legend: {
//       display: false
//     }
//   }
// })
</script>

<style scoped>
/* Opcional: Ajustar el contenedor del gráfico */
.chart-container {
  height: 900px;
  width: 235px;
}
</style>
