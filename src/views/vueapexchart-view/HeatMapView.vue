<template>
  <div>
    <h3>HeatMap</h3>

    <section>
      <HeatMapChart :color-series="colorSent" />
      <HeatMapChart :color-series="colorReceived" />
    </section>
  </div>
</template>

<script setup>
import HeatMapChart from '@/components/vue-apexchart-components/HeatMapChart.vue'
const colorSent = ['#08B545']
const colorReceived = ['#0096FB']
</script>

<style lang="scss" scoped>
section {
  display: flex;
}
</style>
