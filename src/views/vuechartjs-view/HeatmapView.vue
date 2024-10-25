<template>
  <div>
    <h3>HeatmapJs</h3>
    <section>
      <HeatmapChartJs :color-series="colorSent" />
      <HeatmapChartJs :color-series="colorReceived" />
      <!-- <HeatmapScale />
      <HeatmapTime />
    
      <HeatmapCalendar /> -->
    </section>
  </div>
</template>

<script setup>
// import HeatmapScale from '@/components/vue-chartjs-components/HeatmapScale.vue'
// import HeatmapTime from '@/components/vue-chartjs-components/HeatmapTime.vue'
import HeatmapChartJs from '@/components/vue-chartjs-components/HeatmapChartJs.vue'
//import HeatmapCalendar from '@/components/vue-chartjs-components/HeatmapCalendar.vue'

const colorSent = 'rgba(8, 181, 69,'
const colorReceived = 'rgb(0, 150, 251,'
</script>

<style lang="scss" scoped>
section {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>
