<template>
    <div>
      <h3>BarChart</h3>
  
      <section>
     <AgBarChart />
      </section>
    </div>
  </template>
  
  <script setup>
import AgBarChart from '@/components/vue-agchart-components/AgBarChart.vue';
  </script>
  
  <style lang="scss" scoped>
  section {
    display: flex;
  }
  </style>
  