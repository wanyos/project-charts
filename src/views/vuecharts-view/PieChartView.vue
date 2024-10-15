<template>
  <section>
    <h3>Pie Charts</h3>
    <section class="section__charts">
      <PieChart :color-series="colorSeriesSent" :text-series="textSeries" />
      <DonnutChart :color-series="colorSeriesSent" :text-series="textSeries" />
      <NightinChart :color-series="colorSeriesReceived" :text-series="textSeriesReceived" />
    </section>
  </section>
</template>

<script setup>
import PieChart from '@/components/pie-chart/PieChart.vue'
import DonnutChart from '@/components/pie-chart/DonnutChart.vue'
import NightinChart from '@/components/pie-chart/NightinChart.vue'

const colorSeriesSent = ['#08B545', '#CEF0DA']
const colorSeriesReceived = ['#0096FB', '#8DBCFD', '#CCEAFE']

const textSeries = ['Replied', 'No Replied']
const textSeriesReceived = ['Direct Messages', 'CC', 'Others']
</script>

<style>
.section__charts {
  display: flex;
}
</style>
