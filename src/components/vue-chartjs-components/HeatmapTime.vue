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

function isoDayOfWeek(dt) {
  let wd = dt.getDay(); 
  wd = (wd + 6) % 7 + 1; 
  return '' + wd; 
}

function startOfToday() {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
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
  console.log('data', data);
  return data
}

// function generateData() {
//   const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']; // Iniciales de los días de la semana
//   const data = [];
  
//   // Iteramos sobre cada día de la semana y cada hora del día
//   for (let dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
//     for (let hour = 0; hour < 24; hour++) {
//       data.push({
//         x: hour,               // Hora del día (0 a 23)
//         y: dayIndex + 1,       // Representación numérica del día (1 a 7)
//         d: daysOfWeek[dayIndex], // Día en formato de inicial
//         v: Math.random() * 50  // Valor aleatorio entre 0 y 50
//       });
//     }
//   }
  
//   return data;
// }

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')

  const data = {
  datasets: [{
    label: 'My Matrix',
    data: generateData(),
    backgroundColor(c) {
      const value = c.dataset.data[c.dataIndex].v;
      const alpha = (10 + value) / 60;
      return `rgba(8, 181, 69, ${alpha})`
    },
    borderColor(c) {
      const value = c.dataset.data[c.dataIndex].v;
      const alpha = (10 + value) / 60;
       return `rgba(8, 181, 69, ${alpha})`
    },
    borderWidth: 1,
    hoverBackgroundColor: 'yellow',
    hoverBorderColor: 'yellowgreen',
    width(c) {
      const a = c.chart.chartArea || {};
      return (a.right - a.left) / 24 - 1;
    },
    height(c) {
      const a = c.chart.chartArea || {};
      return (a.bottom - a.top) / 7 - 1;
    }
  }]
};


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
      tickLength: 0,
    }
  }
};

const options = {
  aspectRatio: 5,
  plugins: {
    legend: false,
    tooltip: {
      displayColors: false,
      callbacks: {
        title() {
          return '';
        },
        label(context) {
          const v = context.dataset.data[context.dataIndex];
          return ['d: ' + v.d, 'v: ' + v.v.toFixed(2)];
        }
      }
    },
  },
  scales: scales,
  layout: {
    padding: {
      top: 10
    }
  }
};

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
   
}

canvas {
  height: 450px !important;
  width: 80% !important;
}
</style>
