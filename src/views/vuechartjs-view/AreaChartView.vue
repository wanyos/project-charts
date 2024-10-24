<template>
  <div>
    <h3>AreaChartJs</h3>
    <section>
      <AreaChartJs :color-series="colorSent" />
      <AreaChartJs :color-series="colorReceived" />
    </section>
  </div>
</template>

<script setup>
import AreaChartJs from '@/components/vue-chartjs-components/AreaChartJs.vue'

const colorSent = '#08B545'
const colorReceived = '#0096FB'

</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
</style>
