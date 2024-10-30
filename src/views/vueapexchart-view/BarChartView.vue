<template>
  <div>
    <h3>BarChart</h3>
    <section>
      <BarChart />
      <GradientLineChart />
    
    </section>
    <section>
      <StakedBar />
    </section>
  </div>
</template>

<script setup>
import BarChart from '@/components/vue-apexchart-components/BarChart.vue'
import GradientLineChart from '@/components/vue-apexchart-components/GradientLineChart.vue'
import StakedBar from '@/components/vue-apexchart-components/StakedBar.vue';
</script>

<style lang="scss" scoped>
section {
  display: flex;
  border: 1px solid black;
}
</style>
