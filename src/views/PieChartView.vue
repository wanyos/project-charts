<template>
  <section>
    <h3>Pie Charts</h3>
    <section class="section__charts">
      <PieChart />
      <DonnutChart />
    </section>
  </section>
</template>

<script setup>
import PieChart from '@/components/PieChart/PieChart.vue'
import DonnutChart from '@/components/PieChart/DonnutChart.vue'
</script>

<style>
.section__charts {
  display: flex;
}
</style>
