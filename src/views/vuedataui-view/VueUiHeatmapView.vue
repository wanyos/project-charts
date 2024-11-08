<template>
  <h3>VueUiHeatmap</h3>
  <div>
    <VueUiHeatmap :color-series="colorSeriesSent" />
    <VueUiHeatmap :color-series="colorSeriesReceived" />
  </div>

  <section>
    <VueStripPlot />
  </section>
</template>

<script setup>
import VueUiHeatmap from '@/components/vue-data-ui-components/VueUiHeatmap.vue'
import VueStripPlot from '@/components/vue-data-ui-components/VueStripPlot.vue'
const colorSeriesSent = {
  hot: '#08B545',
  cold: '#ffffff',
  underlayer: '#a8e6a3'
}

const colorSeriesReceived = {
  hot: '#0096FB',
  cold: '#ffffff',
  underlayer: '#4FC3F7'
}
</script>

<style lang="css" scoped>
div {
  padding: 25px;
  display: flex;
  width: 70%;
  margin: 0 auto;
}
</style>
