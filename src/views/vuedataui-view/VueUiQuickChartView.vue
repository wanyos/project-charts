<template>
  <div>
    <h3>VueUiQuickChart</h3>

    <section class="section__quick">
      <VueUiXy class="item" :color-chart="colorChartSent" name-type="Sent" />
      <VueUiXy class="item" :color-chart="colorChartReceived" name-type="Received" />
    </section>

    <section class="section__xy">
      <VueUIXiCanvas class="item" />
      <VueUiXiLine class="item" />
    </section>

    <section>
      <VueUiQuickChart class="item" />
    </section>
  </div>
</template>

<script setup>
import VueUiQuickChart from '@/components/vue-data-ui-components/VueUiQuickChart.vue'
import VueUiXy from '@/components/vue-data-ui-components/VueUiXy.vue'
import VueUIXiCanvas from '@/components/vue-data-ui-components/VueUIXiCanvas.vue'
import VueUiXiLine from '@/components/vue-data-ui-components/VueUiXiLine.vue'

const colorChartSent = '#08B545'
const colorChartReceived = '#0096FB'

// const dataTypeChartSent = {
//   name: 'Sent',
//   series: [5, 14, 11, 13, 8, 5, 3, 2, 1, 1, 0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5],
//   type: 'line',
//   color: '#08B545',
//   useProgression: false,
//   dataLabels: false,
//   useArea: true,
//   shape: '',
//   scaleSteps: 10,
//   scaleLabel: ''
// }
</script>

<style lang="css" scoped>
section {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

section .item {
  margin: 5px 55px;
}
</style>
