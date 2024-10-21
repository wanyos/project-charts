<template>
  <div>
    <h3>DonnutChart</h3>
    <section>
      <PieChart :color-series="colorSeriesSent" :labels-series="labelsReplied" />
      <PieMochromeChart :color-series="colorSeriesReceived" :labels-series="labelsThreads" />
    </section>

    <section>
      <SimpleDonnutChart :color-series="colorSeriesSent" :labels-series="labelsInt" />
      <UpdateDonnutChart :color-series="colorSeriesBreak" :labels-series="labelsDirect" />
    </section>
  </div>
</template>

<script setup>
import PieChart from '@/components/vue-apexchart-components/PieChart.vue'
import PieMochromeChart from '@/components/vue-apexchart-components/PieMochromeChart.vue'
import SimpleDonnutChart from '@/components/vue-apexchart-components/SimpleDonnutChart.vue'
import UpdateDonnutChart from '@/components/vue-apexchart-components/UpdateDonnutChart.vue'

const colorSeriesSent = ['#08B545', '#CEF0DA']
const colorSeriesReceived = ['#0096FB', '#CCEAFE']
const colorSeriesBreak = ['#0096FB', '#8DBCFD', '#CCEAFE']

const labelsReplied = ['Replied', 'Not Replied']
const labelsInt = ['Internal messages', 'External messages']
const labelsThreads = ['Threads you started', 'To existing threads']
const labelsDirect = ['Direct Messages', 'CC', 'Others']
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
