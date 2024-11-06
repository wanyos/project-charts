<template>
  <div>
    <h3>HeatMap</h3>

    <section>
      <HeatMapChart :color-series="colorSent" />
      <HeatMapChart :color-series="colorReceived" />
    </section>

    <section class="scatter">
      <ApexScatterChart />
    </section>
  </div>
</template>

<script setup>
import HeatMapChart from '@/components/vue-apexchart-components/HeatMapChart.vue'
import ApexScatterChart from '@/components/vue-apexchart-components/ApexScatterChart.vue';
const colorSent = ['#08B545']
const colorReceived = ['#0096FB']
</script>

<style lang="scss" scoped>
section {
  display: flex;
}

.scatter {
  border: 1px solid black;
  width: 70%;
  margin: 0 auto;
  padding: 1em;
}
</style>
