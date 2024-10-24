<template>
    <div>
      <h3>PieChartJs</h3>
      <section>
      <PieChartJs :color-series="colorSent" />
      <PieChartJs :color-series="colorReceived" />
      </section>
        <DonnutChart :color-series="colorSent" />
        <DonnutChart :color-series="colorReceived" />
      <section>

      </section>
    </div>
  </template>
  
  <script setup>
 import PieChartJs from '@/components/vue-chartjs-components/PieChartJs.vue';
import DonnutChart from '@/components/vue-chart-components/pie-chart/DonnutChart.vue';
 const colorSent = ['#08B545', '#CEF0DA']
 const colorReceived = ['#0096FB', '#CCEAFE']

  </script>
  
  <style lang="scss" scoped>
  section {
    display: flex;
    justify-content: space-evenly;
  }
  </style>