<template>
  <div>
    <h3>BarChart</h3>
    <section>
      <BarChart />
      <GradientLineChart />
    </section>
    <section>
      <StakedBar :email-categories="emails" :data-top="dataObj" />
    </section>
  </div>
</template>

<script setup>
import BarChart from '@/components/vue-apexchart-components/BarChart.vue'
import GradientLineChart from '@/components/vue-apexchart-components/GradientLineChart.vue'
import StakedBar from '@/components/vue-apexchart-components/StakedBar.vue'

const emails = [
  'juanjor99@gmail.com',
  'ivak@mail.com',
  'sonia@mail.com',
  'sonia@mail.com',
  'sonia@mail.com',
  'sonia@mail.com'
]

const dataObj = [
  {
    interactions: 22,
    sent: 12,
    received: 10
  },
  {
    interactions: 36,
    sent: 16,
    received: 20
  },
  {
    interactions: 66,
    sent: 6,
    received: 50
  },
  {
    interactions: 66,
    sent: 6,
    received: 50
  },
  {
    interactions: 66,
    sent: 6,
    received: 50
  },
  {
    interactions: 66,
    sent: 6,
    received: 50
  }
]
</script>

<style lang="scss" scoped>
section {
  display: flex;
  border: 1px solid black;
}
</style>
