<template>
  <div>
    <h3>AreaChart</h3>

    <section>
      <GoogleArea :color-series="colorSent" />
      <GoogleArea :color-series="colorReceived" />
    </section>
  </div>
</template>

<script setup>
import GoogleArea from '@/components/vue-google-components/GoogleArea.vue'

const colorSent = '#08B545'
const colorReceived = '#0096FB'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
</style>
