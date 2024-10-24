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
  
  const chartRef = ref(null)
  
  function generateHeatmapData() {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];  // Iniciales de los días de la semana
  const data = [];

  // Iteramos sobre cada hora del día (x) y cada día de la semana (y)
  for (let hour = 0; hour < 24; hour++) {
    for (let dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
      data.push({
        x: hour,                   // Hora del día como número (0 a 23)
        y: daysOfWeek[dayIndex],   // Día de la semana como inicial
        v: Math.floor(Math.random() * 20) + 1  // Valor entre 1 y 20 para evitar celdas en blanco
      });
    }
  }

  return data;
}

  
  onMounted(() => {
    const ctx = chartRef.value.getContext('2d')
  

    const data = {
  datasets: [{
    label: 'My Matrix',
    data: generateHeatmapData(),
    backgroundColor(context) {
      const value = context.dataset.data[context.dataIndex].v;
      const alpha = (value - 1) / 20; // Ajustamos el alpha para una mejor visibilidad
      return `rgba(8, 181, 69, ${alpha})`;
    },
    borderColor(context) {
      const value = context.dataset.data[context.dataIndex].v;
      const alpha = (value - 1) / 20;
      return `rgba(8, 181, 69, ${alpha})`;
    },
    borderWidth: 1,
    // Ajustamos el tamaño de las celdas del heatmap
    width: ({chart}) => (chart.chartArea || {}).width / 24 - 1, // 24 horas en el eje x
    height: ({chart}) => (chart.chartArea || {}).height / 7 - 1  // 7 días en el eje y
  }]
};


//     const data = {
//   datasets: [{
//     label: 'My Matrix',
//     data: generateHeatmapData(),
//     // data: [
//     //   {x: 'A', y: 'X', v: 11},
//     //   {x: 'A', y: 'Y', v: 12},
//     //   {x: 'A', y: 'Z', v: 13},
//     //   {x: 'B', y: 'X', v: 21},
//     //   {x: 'B', y: 'Y', v: 22},
//     //   {x: 'B', y: 'Z', v: 23},
//     //   {x: 'C', y: 'X', v: 31},
//     //   {x: 'C', y: 'Y', v: 32},
//     //   {x: 'C', y: 'Z', v: 33}
//     // ],
//     backgroundColor(context) {
//       const value = context.dataset.data[context.dataIndex].v;
//       const alpha = (value - 5) / 40;
//        return `rgba(8, 181, 69, ${alpha})`
//     },
//     borderColor(context) {
//       const value = context.dataset.data[context.dataIndex].v;
//       const alpha = (value - 5) / 40;
//        return `rgba(8, 181, 69, ${alpha})`
//     },
//     borderWidth: 1,
//     width: ({chart}) => (chart.chartArea || {}).width / 3 - 1,
//     height: ({chart}) =>(chart.chartArea || {}).height / 3 - 1
//   }]
// };

// const options = {
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: 'Days of the Week'
//       }
//     },
//     y: {
//       title: {
//         display: true,
//         text: 'Hours of the Day'
//       },
//       ticks: {
//         stepSize: 1, // Mostrar todas las horas
//         callback: function(value) {
//           // Convertimos la hora a formato "HH:00"
//           return `${value < 10 ? '0' : ''}${value}:00`;
//         }
//       }
//     }
//   }
// };
const config = {
  type: 'matrix',
  data: data,  // Datos generados con generateHeatmapData()
  options: {
    plugins: {
      legend: false,  // No mostrar leyenda
      tooltip: {
        callbacks: {
          title() {
            return '';  // Sin título en los tooltips
          },
          label(context) {
            const v = context.dataset.data[context.dataIndex];
            return ['Hora: ' + v.x + ':00', 'Día: ' + v.y, 'Valor: ' + v.v];
          }
        }
      }
    },
    scales: {
      x: {
        type: 'category',  // Categoría para las horas
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        ticks: {
          display: true,  // Mostrar todas las horas
        },
        grid: {
          display: false  // No mostrar la cuadrícula en X
        }
      },
      y: {
        type: 'category',  // Categoría para los días de la semana
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],  // Iniciales de los días
        offset: true,  // Espaciado para una mejor alineación
        ticks: {
          display: true,  // Mostrar todas las iniciales de los días
        },
        grid: {
          display: false  // No mostrar la cuadrícula en Y
        }
      }
    }
  }
};
  
    new Chart(ctx, config)
  })
  </script>
  
  <style scoped>
  .div__main {
     border: 1px solid black;
     width: 100%;
  }
  
  canvas {
    height: 275px !important;
    width: 100% !important;
  }
  </style>
  