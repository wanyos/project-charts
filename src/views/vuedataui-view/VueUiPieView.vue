<template>
  <h3>VueUiPie</h3>

  <section>
    <VueUiDonnut :color-series="colorSeriesSent" :title-series="titleSeries" />
    <VueUiDonnut :color-series="colorSeriesReceived" :title-series="titleSeries" />
  </section>

  <section>
    <!-- <VueUiVerticalBar /> -->
    <VueUiPiramid />
  </section>
  <!-- <VueUiOnion /> -->
</template>

<script setup>
import VueUiDonnut from '@/components/vue-data-ui-components/VueUiDonnut.vue'
// import VueUiVerticalBar from '@/components/vue-data-ui-components/VueUiVerticalBar.vue'
import VueUiPiramid from '@/components/vue-data-ui-components/VueUiPiramid.vue'
// import VueUiOnion from '@/components/vue-data-ui-components/VueUiOnion.vue'

const titleSeries = {
  replied: 'Replied',
  noReplied: 'No Replied'
}

const colorSeriesSent = {
  replied: '#08B545',
  noReplied: '#cef0ca'
}

const colorSeriesReceived = {
  replied: '#0096fb',
  noReplied: '#cceafe'
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
