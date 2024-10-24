<template>
  <div>
    <h3>BarChartJs</h3>
    <section>
      <BarChartJs />
      <LineChartJs />
    </section>
  </div>
</template>

<script setup>
import BarChartJs from '@/components/vue-chartjs-components/BarChartJs.vue'
import LineChartJs from '@/components/vue-chartjs-components/LineChartJs.vue'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
</style>
