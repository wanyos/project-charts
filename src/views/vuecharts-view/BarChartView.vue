<template>
  <h3>Bar Charts</h3>
  <section class="section-bar">
    <BarChart :color-chart="colorBar" class="item" />
    <LineGradientChart class="item" />
  </section>

  <section class="section-stacked">
    <StakedChart :address="addressObj" :data="dataObj" class="item emailBar" />
  </section>
</template>

<script setup>
import BarChart from '@/components/vue-chart-components/bar-chart/BarChart.vue'
import LineGradientChart from '@/components/vue-chart-components/bar-chart/LineGradientChart.vue'
import StakedChart from '@/components/vue-chart-components/bar-chart/StakedChart.vue'

const colorBar = '#08B545'

const addressObj = ['juanjor99@gmail.com', 'sonia@gmail.com']

const dataObj = [
  {
    interactions: 22,
    sent: 12,
    received: 10
  },
  {
    interactions: 36,
    sent: 16,
    received: 20
  }
]
</script>

<style lang="css" scoped>
.section-bar {
  display: flex;
}

.item {
  margin: 3em;
}

.emailBar {
  width: 85em;
}

.section-stacked {
  border: 1px solid black;
}
</style>
