<template>
  <div>
    <h3>HeatmapJs</h3>
    <section>
      <HeatmapScale />
      <HeatmapTime />
      <HeatmapChartJs />
      <HeatmapCalendar />
    </section>
  </div>
</template>

<script setup>
import HeatmapScale from '@/components/vue-chartjs-components/HeatmapScale.vue';
import HeatmapTime from '@/components/vue-chartjs-components/HeatmapTime.vue';
import HeatmapChartJs from '@/components/vue-chartjs-components/HeatmapChartJs.vue'
import HeatmapCalendar from '@/components/vue-chartjs-components/HeatmapCalendar.vue';
</script>

<style lang="scss" scoped>
section {
  margin-top: 15px;
}
</style>
