<template>
  <div>
    <h3>AreaChart</h3>
    <section>
      <AreaChart :color-serires="colorSent" />
      <AreaChart :color-serires="colorReceived" />
    </section>
  </div>
</template>

<script setup>
import AreaChart from '@/components/vue-apexchart-components/AreaChart.vue'

const colorSent = '#08B545'
const colorReceived = '#0096FB'
</script>

<style lang="scss" scoped>
section {
  border: 1px solid black;
}
</style>
