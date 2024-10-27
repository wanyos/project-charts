<template>
  <div class="div__main">
    <AgCharts :options="options" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { AgCharts } from 'ag-charts-vue3'

// const options = ref({
//   // Data: Data to be displayed in the chart
//   data: [
//     { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
//     { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
//     { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
//     { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
//     { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
//     { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 }
//   ],
//   // Series: Defines which chart type and data to use
//   series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }]
// })

const options = ref({
  // Datos del gráfico: lista de tiempos y correos que responden en esos tiempos
  data: [
    { responseTime: '< 15m', emailCount: 15 },
    { responseTime: '1h', emailCount: 4 },
    { responseTime: '4h', emailCount: 3 },
    { responseTime: '12h', emailCount: 0 },
    { responseTime: '1d', emailCount: 2 },
    { responseTime: '2d', emailCount: 4 },
    { responseTime: '> 2d', emailCount: 1 }
  ],

  // Series del gráfico: define el tipo de gráfico y las claves de datos
  series: [
    {
      type: 'bar', // Tipo de gráfico
      xKey: 'responseTime', // Clave para el eje X (etiquetas)
      yKey: 'emailCount' // Clave para el eje Y (valores de conteo de correos)
    }
  ]

  // Opciones adicionales para personalizar el gráfico
  //   axes: [
  //     {
  //       type: 'category', // Tipo de eje X para categorías
  //       position: 'bottom', // Posición del eje X en la parte inferior
  //       title: { text: 'Tiempo de respuesta' }
  //     },
  //     {
  //       type: 'number', // Tipo de eje Y para valores numéricos
  //       position: 'left', // Posición del eje Y en el lado izquierdo
  //       title: { text: 'Número de correos' }
  //     }
  //   ]

  //   title: {
  //     text: 'Tiempo de respuesta para el primer correo',
  //     fontSize: 16
  //   }
})
</script>

<style scoped>
.div__main {
  border: 1px solid black;
}
</style>
