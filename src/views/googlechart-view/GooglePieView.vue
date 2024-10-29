<template>
  <div>
    <h3>PieChart</h3>

    <section>
      <GooglePie :color-series="colorSeriesSent" :title-series="labelsReplied" />
      <GooglePie :color-series="colorSeriesReceived" :title-series="labelsReplied" />
    </section>
    <section>
      <GoogleDonut :color-series="colorSeriesSent" :title-series="labelsInt" />
      <GoogleDonut :color-series="colorSeriesReceived" :title-series="labelsInt" />
    </section>
    <section>
      <GoogleDonut :color-series="colorSeriesSent" :title-series="labelsThreads" />
      <GoogleDonut :color-series="colorSeriesBreak" :title-series="labelsDirect" />
    </section>
  </div>
</template>

<script setup>
import GooglePie from '@/components/vue-google-components/GooglePie.vue'
import GoogleDonut from '@/components/vue-google-components/GoogleDonut.vue'

const colorSeriesSent = ['#08B545', '#CEF0DA']
const colorSeriesReceived = ['#0096FB', '#CCEAFE']
const colorSeriesBreak = ['#0096FB', '#8DBCFD', '#CCEAFE']

const labelsReplied = ['Replied', 'Not Replied']
const labelsInt = ['Internal', 'External']
const labelsThreads = ['Threads', 'To existing']
const labelsDirect = ['Direct Messages', 'CC', 'Others']
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
