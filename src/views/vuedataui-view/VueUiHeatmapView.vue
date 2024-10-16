<template>
  <div>
    <h3>VueUiHeatmap</h3>
    <VueUiHeatmap :color-series="colorSeriesSent" />
    <VueUiHeatmap :color-series="colorSeriesReceived" />
  </div>
</template>

<script setup>
import VueUiHeatmap from '@/components/vue-data-ui-components/VueUiHeatmap.vue';

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

<style lang="css" scoped></style>
