<template>
  <div>
    <h3>BubbleChart</h3>
    <section>
      <BubbleChart />
    </section>
  </div>
</template>

<script setup>
import BubbleChart from '@/components/vue-chartkick-components/BubbleChart.vue'

// const colorSent = ['#08B545', '#CEF0DA']
// const colorReceived = ['#0096FB', '#CCEAFE']
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
</style>
