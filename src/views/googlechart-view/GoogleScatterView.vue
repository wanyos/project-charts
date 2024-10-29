<template>
  <div>
    <h3>ScatterChart</h3>

    <section>
      <GoogleScatter />
    </section>
  </div>
</template>

<script setup>
import GoogleScatter from '@/components/vue-google-components/GoogleScatter.vue'

// const colorSent = '#08B545'
// const colorReceived = '#0096FB'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
}
</style>
