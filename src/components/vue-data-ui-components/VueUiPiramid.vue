<template>
  <div>
    <VueDataUi component="VueUiAgePyramid" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const dataset = ref([
  ['2018', 5, 120000, 119500],
  ['2019', 4, 109200, 109100],
  ['2020', 3, 160700, 160600],
  ['2021', 2, 98630, 98250],
  ['2022', 1, 81100, 81200],
  ['2023', 0, 77900, 77800]
])

const config = ref({
  responsive: false,
  style: {
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    fontFamily: 'inherit',
    height: 500,
    width: 500,
    layout: {
      padding: { top: 36, right: 12, bottom: 48, left: 12 },
      grid: { show: true, stroke: '#CCCCCC', strokeWidth: 1 },
      dataLabels: {
        sideTitles: {
          show: true,
          fontSize: 18,
          color: '#1a1a1a',
          useSideColor: true,
          bold: false,
          offsetY: 0
        },
        xAxis: {
          show: true,
          fontSize: 12,
          color: '#1a1a1a',
          bold: false,
          scale: 1000,
          translation: 'in thousands'
        },
        yAxis: {
          show: true,
          display: 'age',
          fontSize: 12,
          color: '#1a1a1a',
          bold: false,
          showEvery: 5
        }
      },
      centerSlit: { width: 20 },
      bars: {
        gap: 0,
        borderRadius: 1,
        left: { color: '#ff6400' },
        right: { color: '#5f8bee' },
        gradient: { show: true, underlayer: '#FFFFFF', intensity: 60, shiftHue: 0.05 }
      }
    },
    highlighter: { color: '#FFFFFF', opacity: 15 },
    // title: {
    //   text: 'Title',
    //   color: '#fafafa',
    //   fontSize: 20,
    //   bold: true,
    //   textAlign: 'center',
    //   paddingLeft: 0,
    //   paddingRight: 0,
    //   subtitle: { color: '#A1A1A1', text: 'Subtitle', fontSize: 16, bold: false }
    // },
    tooltip: {
      show: true,
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      fontSize: 14,
      customFormat: null,
      borderRadius: 4,
      borderColor: '#3A3A3A',
      borderWidth: 1,
      backgroundOpacity: 90,
      position: 'center',
      offsetY: 24
    }
  },
  translations: { age: 'age', male: 'Replied', female: 'No Replied', total: 'total', year: 'year' },
  userOptions: {
    show: true,
    buttons: { tooltip: true, pdf: true, img: true, csv: true, table: true, fullscreen: true },
    buttonTitles: {
      open: 'Open options',
      close: 'Close options',
      tooltip: 'Toggle tooltip',
      pdf: 'Download PDF',
      csv: 'Download CSV',
      img: 'Download PNG',
      table: 'Toggle table',
      fullscreen: 'Toggle fullscreen'
    }
  },
  table: {
    show: false,
    responsiveBreakpoint: 400,
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' }
  }
})
</script>

<style lang="scss" scoped>
div {
  width: 35em;
}
</style>
