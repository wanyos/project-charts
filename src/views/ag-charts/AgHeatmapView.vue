<template>
    <div>
      <h3>HeatMap</h3>
  
      <section>
      <AgHeatmap />
      </section>
    </div>
  </template>
  
  <script setup>
 import AgHeatmap from '@/components/vue-agchart-components/AgHeatmap.vue';
  </script>
  
  <style lang="scss" scoped>
  section {
    display: flex;
  }
  </style>
  