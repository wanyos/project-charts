<template>
  <section>
    <h3>Scale Chart</h3>
    <ScaleChart
      title="Messages Sent By Day"
      :slider-color="sliderColorSent"
      :item-style="itemColorSent"
      :area-style="areaStyleSent"
    />
    <ScaleChart
      title="Messages Received By Day"
      :slider-color="sliderColorReceived"
      :item-style="itemColorReceived"
      :area-style="areaStyleReceived"
    />
  </section>
</template>

<script setup>
import ScaleChart from '@/components/vue-chart-components/scale-chart/ScaleChart.vue'
const sliderColorSent = '#08B545'
const sliderColorReceived = '#0096FB'

const itemColorSent = ['#08B545']
const itemColorReceived = ['#0096FB']

const areaStyleSent = ['#19cf59', '#08B545']
const areaStyleReceived = ['#33a1ea', '#0096FB']
</script>

<style lang="css" scoped></style>
