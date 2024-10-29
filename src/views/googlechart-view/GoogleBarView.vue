<template>
  <div>
    <h3>BarChart</h3>

    <section>
      <GoogleBar />
    </section>
  </div>
</template>

<script setup>
import GoogleBar from '@/components/vue-google-components/GoogleBar.vue'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
