<template>
  <div>
    <h3>BubbleChart</h3>

    <section>
      <GoogleBubble :color-series="colorsReceived" />
      <GoogleBubble :color-series="colorsSent" />
    </section>
  </div>
</template>

<script setup>
import GoogleBubble from '@/components/vue-google-components/GoogleBubble.vue'

const colorsReceived = ['#CCEAFE', '#8DBCFD', '#0096FB']
const colorsSent = ['#ffffff', '#a8e6a3', '#08B545']
</script>

<style lang="scss" scoped>
section {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>
