<template>
  <div>
    <h3>LineChat</h3>

    <section>
      <GoogleLine :color-series="colorSent" />
    </section>
  </div>
</template>

<script setup>
import GoogleLine from '@/components/vue-google-components/GoogleLine.vue'

const colorSent = '#08B545'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
