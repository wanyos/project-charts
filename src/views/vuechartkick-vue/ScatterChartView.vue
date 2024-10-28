<template>
  <div>
    <h3>ScatterChart</h3>
    <section>
      <ScatterChart />
    </section>
  </div>
</template>

<script setup>
import ScatterChart from '@/components/vue-chartkick-components/ScatterChart.vue'

// const colorSent = ['#08B545', '#CEF0DA']
// const colorReceived = ['#0096FB', '#CCEAFE']
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
</style>
