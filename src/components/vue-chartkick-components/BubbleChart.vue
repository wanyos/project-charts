<template>
  <div>
    <scatter-chart :data="bubbleData" :library="chartOptions" height="600px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bubbleData = ref([
  {
    name: 'Heatmap',
    data: [
      { x: 0, y: 0, r: 10, value: 30 }, // Ejemplo: Domingo a la medianoche con valor 30
      { x: 1, y: 1, r: 10, value: 45 } // Ejemplo: Lunes a la 1am con valor 45
      // Añadir puntos para todas las horas y días de la semana
    ]
  }
])

const chartOptions = ref({
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      ticks: {
        stepSize: 1,
        callback: (value) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value] // Etiquetas de días
      },
      title: {
        display: true,
        text: 'Days of the Week'
      }
    },
    y: {
      type: 'linear',
      ticks: {
        stepSize: 1,
        callback: (value) => `${value}:00` // Etiquetas de horas
      },
      title: {
        display: true,
        text: 'Hour of the Day'
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => `Value: ${context.raw.value}` // Texto del tooltip con el valor
      }
    }
  },
  elements: {
    point: {
      backgroundColor: (context) => {
        const value = context.raw.value
        return value < 20 ? '#88e8c6' : value < 50 ? '#4fc1c0' : value < 80 ? '#356897' : '#203d5c'
      },
      borderColor: 'transparent',
      radius: 10 // Tamaño de los puntos
    }
  }
})
</script>

<style lang="scss" scoped></style>
