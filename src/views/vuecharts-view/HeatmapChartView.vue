<template>
  <section class="section__main">
    <h3>Heatmap Charts</h3>
    <HeatMapChart
      title="Sent Messages"
      :color-primary="colorSent"
      :visual-map-color="colorsSent"
      class="section__heatmap"
    />
    <HeatMapChart
      title="Received Messages"
      :color-primary="colorReceived"
      :visual-map-color="colorsReceived"
      class="section__heatmap"
    />
  </section>

  <section>
    <DistributionChart />
  </section>
</template>

<script setup>
import HeatMapChart from '@/components/vue-chart-components/heatmap-chart/HeatMapChart.vue'
import DistributionChart from '@/components/vue-chart-components/heatmap-chart/DistributionChart.vue';

const colorsSent = ['#ffffff', '#a8e6a3', '#08B545']
const colorsReceived = ['#ffffff', '#4FC3F7', '#0096FB']
const colorSent = '#08B545'
const colorReceived = '#0096FB'
</script>

<style scoped>
.section__main {
  display: flex;
  justify-content: center;
}

.section__heatmap {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  width: 450px;
  margin: 25px;
}
</style>
