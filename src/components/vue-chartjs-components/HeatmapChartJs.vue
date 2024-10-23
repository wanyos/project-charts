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
        type: 'matrix',
        data: [
          { x: 0, y: 0, v: 10 },
          { x: 1, y: 0, v: 20 },
          { x: 2, y: 0, v: 30 },
          { x: 0, y: 1, v: 40 },
          { x: 1, y: 1, v: 50 },
          { x: 2, y: 1, v: 60 },
          { x: 0, y: 2, v: 70 },
          { x: 1, y: 2, v: 80 },
          { x: 2, y: 2, v: 90 }
        ],
        backgroundColor(context) {
          const value = context.dataset.data[context.dataIndex].v
          const alpha = value / 90
          return `rgba(255, 0, 0, ${alpha})`
        },
        borderWidth: 0,
        width: 200, // Casi el ancho completo de la celda
        height: 200 // Casi el alto completo de la celda
      }
    ]
  }

  const config = {
    type: 'matrix',
    responsive: true,
    data: data,
    options: {
      scales: {
        x: {
          display: true,
          min: -0.5,
          max: 2.5,
          ticks: {
            stepSize: 1
          }
        },
        y: {
          display: true,
          min: -0.5,
          max: 2.5,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  }

  //   const data = {
  //     datasets: [
  //       {
  //         type: 'matrix',
  //         data: [
  //           { x: 0, y: 0, v: 10 },
  //           { x: 1, y: 0, v: 20 },
  //           { x: 2, y: 0, v: 30 },
  //           { x: 0, y: 1, v: 40 },
  //           { x: 1, y: 1, v: 50 },
  //           { x: 2, y: 1, v: 60 },
  //           { x: 0, y: 2, v: 70 },
  //           { x: 1, y: 2, v: 10 },
  //           { x: 2, y: 2, v: 90 }
  //         ],
  //         backgroundColor(context) {
  //           const value = context.dataset.data[context.dataIndex].v
  //           const alpha = value / 90
  //           return `rgba(255, 0, 0, ${alpha})`
  //         },
  //         // width: 50, // Tamaño fijo en píxeles
  //         // height: 50 // Tamaño fijo en píxeles
  //         width: 100,
  //         height: 100,
  //         offset: 0
  //       }
  //     ]
  //   }

  //   const config = {
  //     type: 'matrix',
  //     data: data,
  //     options: {
  //       responsive: false,
  //       maintainAspectRatio: false,
  //       scales: {
  //         x: {
  //           type: 'linear',
  //           offset: false,
  //           min: -0.5,
  //           max: 2.5,
  //           ticks: {
  //             stepSize: 1,
  //             callback: (value) => value + 1
  //           },
  //           grid: {
  //             display: true
  //           }
  //         },
  //         y: {
  //           type: 'linear',
  //           offset: false,
  //           min: -0.5,
  //           max: 2.5,
  //           ticks: {
  //             stepSize: 1,
  //             callback: (value) => value + 1
  //           },
  //           grid: {
  //             display: true
  //           }
  //         }
  //       },
  //       plugins: {
  //         legend: {
  //           display: false
  //         },
  //         tooltip: {
  //           callbacks: {
  //             title() {
  //               return ''
  //             },
  //             label(context) {
  //               const v = context.dataset.data[context.dataIndex].v
  //               return `Valor: ${v}`
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }

  new Chart(ctx, config)
})
</script>

<style scoped>
canvas {
  height: 400px !important;
  width: 100% !important;
}
</style>

<!-- <template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Chart as ChartJS, MatrixElement } from 'chart.js'
import { CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import 'chartjs-chart-matrix'

// Registrar los componentes de Chart.js y el plugin de matrix
ChartJS.register(MatrixElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

// Referencia al canvas donde se dibujará el gráfico
const chartCanvas = ref(null)
let chartInstance = null // Instancia del gráfico

// Datos para el heatmap
const chartData = {
  datasets: [
    {
      label: 'Heatmap',
      data: [
        { x: 0, y: 0, v: 10 },
        { x: 1, y: 0, v: 20 },
        { x: 2, y: 0, v: 30 },
        { x: 0, y: 1, v: 40 },
        { x: 1, y: 1, v: 50 },
        { x: 2, y: 1, v: 60 }
      ],
      backgroundColor(ctx) {
        const value = ctx.dataset.data[ctx.dataIndex].v
        return `rgba(255, 0, 0, ${value / 100})` // Escala de color en función del valor
      },
      width: 50, // Ancho de cada celda en el heatmap
      height: 50 // Alto de cada celda
    }
  ]
}

// Opciones del gráfico
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: { stepSize: 1 },
      title: { display: true, text: 'X Axis' }
    },
    y: {
      ticks: { stepSize: 1 },
      title: { display: true, text: 'Y Axis' }
    }
  }
}

// Inicialización del gráfico en el hook onMounted
onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')

  // Crear la instancia del gráfico
  chartInstance = new ChartJS(ctx, {
    type: 'matrix',
    data: chartData,
    options: chartOptions
  })
})

// Destruir la instancia del gráfico en el hook onBeforeUnmount
onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<style scoped>
/* Estilos para el canvas, se ajusta al 100% de ancho y una altura fija */
canvas {
  width: 100%;
  height: 400px;
}
</style> -->

<!-- <template>
  <div>
    <HeatmapChart :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, MatrixController, MatrixElement } from 'chart.js'
import { defineComponent } from 'vue'
import { Chart } from 'vue-chartjs'
import { CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  MatrixController,
  MatrixElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
)

// Definimos un componente personalizado basado en vue-chartjs para el heatmap
const HeatmapChart = defineComponent({
  name: 'HeatmapChart',
  components: {
    Chart
  },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
      <Chart
        :type="'matrix'"
        :data="props.chartData"
        :options="props.chartOptions"
      />
    `
})

const chartData = ref({
  datasets: [
    {
      label: 'Heatmap',
      data: [
        { x: 0, y: 0, v: 10 },
        { x: 1, y: 0, v: 20 },
        { x: 2, y: 0, v: 30 },
        { x: 0, y: 1, v: 40 },
        { x: 1, y: 1, v: 50 },
        { x: 2, y: 1, v: 60 }
      ],
      backgroundColor(ctx) {
        const value = ctx.dataset.data[ctx.dataIndex].v
        return `rgba(255, 0, 0, ${value / 100})` // Escala de color
      },
      width: 50,
      height: 50
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: { stepSize: 1 },
      title: { display: true, text: 'X Axis' }
    },
    y: {
      ticks: { stepSize: 1 },
      title: { display: true, text: 'Y Axis' }
    }
  }
})
</script>

<style scoped>
/* Ajustamos el tamaño del canvas para que sea responsive */
canvas {
  width: 100%;
  height: 400px;
}
</style> -->
