<template>
  <div class="div">
    <VueDataUi component="VueUiHeatmap" :dataset="dataset" :config="config" class="chart" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'
// import { getVueDataUiConfig } from 'vue-data-ui'
// const xy_config = getVueDataUiConfig('vue_ui_xy')
// const waffle_config = getVueDataUiConfig('vue_ui_waffle')

// const dataset = ref([
//   {
//     name: 'Serie 1',
//     series: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
//     type: 'line'
//   }
// ])

const dataset = ref([
  {
    values: [3, 12, 7, 9, 15, 27, 31]
  },
  {
    values: [8, 9, 3, 18, 11, 7, 2]
  },
  {
    values: [5, 2, 11, 6, 3, 8, 9]
  },

  {
    values: [8, 9, 3, 18, 11, 7, 19]
  }
])

// const dataset = ref([
//   {
//     values: [31, 58, 12, 25, 13, 9, 3, 7, 55, 12, 36, 23, 37, 28, 29]
//   },
//   {
//     values: [3, 12, 7, 9, 15, 27, 31, 42, 63, 13, 25, 12, 9, 55, 12]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 2, 1, 2, 1, 8, 3, 2, 1, 2]
//   },
//   {
//     values: [8, 12, 13, 25, 31, 42, 12, 9, 8, 4, 12, 5, 2, 1, 9]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 12, 25, 13, 21, 12, 88, 33, 66, 9]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 55, 19, 12, 55, 18, 13, 33, 12, 22]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19, 25, 13, 44, 22, 33, 66, 77, 22]
//   }
// ])

const config = ref({
  style: {
    backgroundColor: '#FFFFFF',
    color: '#4A4A4A',
    fontFamily: 'inherit',
    layout: {
      padding: { top: 15, right: 4, bottom: 12, left: 4 },
      cells: {
        height: 18,
        value: { show: true, fontSize: 2, bold: false, roundingValue: 0, color: '#FFFFFF' },
        colors: { hot: '#08B545', cold: '#a8e6a3', underlayer: '#ffffff' },
        spacing: 0.1,
        selected: { border: 2, color: '#FFFFFF' }
      },
      dataLabels: {
        prefix: '',
        suffix: '',
        xAxis: {
          show: true,
          values: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          fontSize: 3,
          color: '#4A4A4A',
          bold: false,
          offsetX: 0,
          offsetY: 0
        },
        yAxis: {
          show: true,
          values: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00'
          ],
          fontSize: 3,
          color: '#4A4A4A',
          bold: false,
          offsetY: 0,
          offsetX: 0
        }
      }
    },
    // title: {
    //   text: 'Title',
    //   color: '#FAFAFA',
    //   fontSize: 20,
    //   bold: true,
    //   textAlign: 'center',
    //   paddingLeft: 0,
    //   paddingRight: 0,
    //   subtitle: { color: '#A1A1A1', text: 'Subtitle', fontSize: 16, bold: false }
    // },
    legend: {
      show: true,
      backgroundColor: '#08B545',
      color: '#1A1A1A',
      fontSize: 2,
      bold: true,
      roundingValue: 0,
      position: 'right',
      scaleBorderRadius: 10
    },
    tooltip: {
      show: true,
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      fontSize: 14,
      roundingValue: 0,
      customFormat: null,
      borderRadius: 1,
      borderColor: '#08B545',
      borderWidth: 1,
      backgroundOpacity: 90,
      position: 'center',
      offsetY: 24
    }
  },
  userOptions: {
    show: false,
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
    responsiveBreakpoint: 50,
    colNames: { xAxis: 'Week' },
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' }
  }
})
</script>

<style lang="css" scoped>
.div {
  position: relative;
  border: 2px solid blue;
  width: 40%;
  height: 45%;
  margin: 0 auto;
}

.chart {
  border: 2px solid black;
  width: 25%;
}
</style>
