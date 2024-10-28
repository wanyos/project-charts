<template>
    <div class="heatmap-container">
      <div class="heatmap-grid" :style="gridStyle">
        <div
          v-for="(value, index) in data"
          :key="index"
          class="heatmap-cell"
          :style="getCellStyle(value)"
          :title="`Valor: ${value}`"
        >
          {{ showValues ? value : '' }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Number,
      required: true
    },
    showValues: {
      type: Boolean,
      default: false
    },
    colorScale: {
      type: String,
      default: 'blue', // 'blue' | 'red' | 'green'
    }
  });
  
  // Calcula el estilo del grid basado en el número de columnas
  const gridStyle = computed(() => ({
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`
  }));
  
  // Obtiene el color basado en el valor y la escala de color seleccionada
  const getCellStyle = (value) => {
    // Normaliza el valor entre 0 y 1
    const normalized = (value - Math.min(...props.data)) / 
      (Math.max(...props.data) - Math.min(...props.data));
  
    // Define los colores base según la escala seleccionada
    const colorScales = {
      blue: `rgba(0, 0, 255, ${normalized})`,
      red: `rgba(255, 0, 0, ${normalized})`,
      green: `rgba(0, 255, 0, ${normalized})`
    };
  
    return {
      backgroundColor: colorScales[props.colorScale] || colorScales.blue
    };
  };
  </script>
  
  <style scoped>
  .heatmap-container {
    padding: 1rem;
    max-width: 100%;
    overflow: auto;
  }
  
  .heatmap-grid {
    display: grid;
    gap: 2px;
    background-color: #f0f0f0;
    padding: 2px;
    border-radius: 4px;
  }
  
  .heatmap-cell {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 0.875rem;
    color: white;
    border-radius: 2px;
    transition: transform 0.2s;
  }
  
  .heatmap-cell:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  </style>