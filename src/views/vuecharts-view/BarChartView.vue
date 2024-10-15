<template>
  <section>
    <h3>Bar Charts</h3>
    <BarChart :color-chart="colorBar" />
    <LineGradientChart />
  </section>
</template>

<script setup>
import BarChart from '@/components/bar-chart/BarChart.vue'
import LineGradientChart from '@/components/bar-chart/LineGradientChart.vue'

const colorBar = '#08B545'
</script>

<style lang="css" scoped></style>
