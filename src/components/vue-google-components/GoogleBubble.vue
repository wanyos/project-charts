<template>
    <GChart :type="type" :data="data" :options="options" class="chart" />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { GChart } from 'vue-google-charts'
  
  const type = ref('BubbleChart')
  
  // Datos para representar días de la semana en el eje X y horas en el eje Y con un valor de intensidad
  const data = ref([
    ['ID', 'Day', 'Hour', 'Intensity', 'Size'],
    ['Mon', 0, 8, 5, 0.1],
    ['Mon', 0, 9, 15, 0.1],
    ['Mon', 0, 10, 12, 0.1],
    ['Tue', 1, 8, 7, 0.1],
    ['Tue', 1, 9, 10, 0.1],
    ['Wed', 2, 10, 20, 0.1],
    ['Thu', 3, 12, 3, 0.1],
    ['Fri', 4, 15, 18, 0.1],
    ['Sat', 5, 20, 0, 0.1],
    ['Sun', 6, 23, 8, 0.1]
    // Agrega más datos en el formato ['Día', 'Posición X', 'Hora Y', 'Intensidad', 'Tamaño']
  ])
  
  // Opciones para configurar los colores y el tamaño fijo de las burbujas
  const options = ref({
    hAxis: {
    title: 'Day',
    ticks: [
      { v: 0.5, f: 'Mon' },
      { v: 1.5, f: 'Tue' },
      { v: 2.5, f: 'Wed' },
      { v: 3.5, f: 'Thu' },
      { v: 4.5, f: 'Fri' },
      { v: 5.5, f: 'Sat' },
      { v: 6.5, f: 'Sun' }
    ],
  },
    vAxis: {
      title: 'Hour',
      ticks: Array.from({ length: 24 }, (_, i) => i) // Solo horas enteras de 0 a 23
    },
    bubble: {
      opacity: 0.8,
      stroke: 'none'
    },
    colorAxis: {
      colors: ['#E0F7FA', '#006064'] // Escala de colores de claro a oscuro
    },
    width: 800,
    height: 600,
    chartArea: { width: '80%', height: '65%' },
    legend: { position: 'none' }
  })
  </script>
  
  <style scoped>
  .chart {
    border: 1px solid black;
  }
  </style>















<!-- <template>
    <GChart :type="type" :data="data" :options="options" class="chart" />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { GChart } from 'vue-google-charts'
  
  const type = ref('BubbleChart')
  const data = ref([
  ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
  ['CAN', 80.66, 1.67, 'North America', 33739900],
  ['DEU', 79.84, 1.36, 'Europe', 81902307],
  ['DNK', 78.6, 1.84, 'Europe', 5523095],
  ['EGY', 72.73, 2.78, 'Middle East', 79716203],
  ['GBR', 80.05, 2, 'Europe', 61801570],
  ['IRN', 72.49, 1.7, 'Middle East', 73137148],
  ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
  ['ISR', 81.55, 2.96, 'Middle East', 7485600],
  ['RUS', 68.6, 1.54, 'Europe', 141850000],
  ['USA', 78.09, 2.05, 'North America', 307007000],
  ])

  const options = ref({
  bubble: { textStyle: { fontSize: 11 } },
  width: 800,
  height: 600,
    chartArea: { width: '80%', height: '65%' },
    colors: ['#08B545', '#CEF0DA'],
    legend: { position: 'none' }
  })
  </script>
  
  <style scoped>
  .chart {
    border: 1px solid black;
  }
  </style> -->
  