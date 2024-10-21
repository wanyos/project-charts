<template>
  <div>
    <h3>BarChart</h3>
    <section>
      <BarChart />
      <GradientLineChart />
    </section>
  </div>
</template>

<script setup>
import BarChart from '@/components/vue-apexchart-components/BarChart.vue'
import GradientLineChart from '@/components/vue-apexchart-components/GradientLineChart.vue'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  border: 1px solid black;
}
</style>
