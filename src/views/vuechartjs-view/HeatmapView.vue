<template>
  <div>
    <h3>HeatmapJs</h3>
    <section>
      <HeatmapChartJs />
      <HeatmapCalendar />
    </section>
  </div>
</template>

<script setup>
import HeatmapChartJs from '@/components/vue-chartjs-components/HeatmapChartJs.vue'
import HeatmapCalendar from '@/components/vue-chartjs-components/HeatmapCalendar.vue';
</script>

<style lang="scss" scoped>
section {
  margin-top: 15px;
}
</style>
