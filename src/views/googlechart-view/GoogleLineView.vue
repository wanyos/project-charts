<template>
  <div>
    <h3>LineChat</h3>

    <section>
      <GoogleLine />
    </section>
  </div>
</template>

<script setup>
import GoogleLine from '@/components/vue-google-components/GoogleLine.vue'
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
