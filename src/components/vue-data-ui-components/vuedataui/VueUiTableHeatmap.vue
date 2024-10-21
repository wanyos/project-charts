<template>
  <div>
    <VueDataUi component="VueUiTableHeatmap" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const dataset = ref([
  {
    name: 'Serie 1',
    values: [20, 30, 40, 50, 40, 30, 20],
    color: '#1f77b4',
    shape: 'circle'
  },
  {
    name: 'Serie 2',
    values: [30, 40, 50, 60, 50, 40, 30],
    color: '#aec7e8',
    shape: 'triangle'
  },
  {
    name: 'Serie 3',
    values: [40, 50, 60, 70, 60, 50, 40],
    color: '#ff7f0e',
    shape: 'diamond'
  },
  {
    name: 'Serie 4',
    values: [50, 60, 70, 80, 70, 60, 50],
    color: '#ffbb78',
    shape: 'hexagon'
  },
  {
    name: 'Serie 5',
    values: [60, 70, 80, 90, 80, 70, 60],
    color: '#2ca02c',
    shape: 'star'
  }
])

const config = ref({
  style: {
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    fontFamily: 'inherit',
    shapeSize: 14,
    heatmapColors: { useIndividualScale: false, min: '#FFFFFF', max: '#5f8bee' }
  },
  table: {
    responsiveBreakpoint: 300,
    borderWidth: 1,
    showSum: true,
    showAverage: true,
    showMedian: true,
    head: {
      backgroundColor: '#1A1A1A',
      values: ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'TOTAL', 'AVG', 'MED']
    }
  },
  userOptions: { show: true, buttons: { pdf: true, img: true, csv: true, fullscreen: true } }
})
</script>

<style lang="scss" scoped>
div {
  width: 55em;
  height: 15em;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
