<template>
  <div>
    <h3>HeatmapChat</h3>

    <section>
      <GoogleHeatmap />
    </section>
  </div>
</template>

<script setup>
import GoogleHeatmap from '@/components/vue-google-components/GoogleHeatmap.vue'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
