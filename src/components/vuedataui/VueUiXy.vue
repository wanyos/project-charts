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

// const dataset = ref([
//   {
//     values: [3, 12, 7, 9, 15, 27, 31]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 2]
//   },
//   {
//     values: [5, 2, 11, 6, 3, 8, 9]
//   },

//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   },
//   {
//     values: [8, 9, 3, 18, 11, 7, 19]
//   }
// ])

// const config = ref({
//   style: {
//     backgroundColor: '#FFFFFF',
//     color: '#4A4A4A',
//     fontFamily: 'inherit',
//     layout: {
//       padding: { top: 15, right: 0, bottom: 0, left: 0 },
//       cells: {
//         width: 12,
//         height: 18,
//         value: { show: false, fontSize: 3, bold: false, roundingValue: 0, color: '#FFFFFF' },
//         colors: { hot: '#08B545', cold: '#ffffff', underlayer: '#a8e6a3' },
//         spacing: 0.1,
//         selected: { border: 0.2, color: '#08B545' }
//       },
//       dataLabels: {
//         prefix: '',
//         suffix: '',
//         xAxis: {
//           show: true,
//           values: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//           fontSize: 2,
//           color: '#4A4A4A',
//           bold: false,
//           offsetX: 0,
//           offsetY: 4
//         },
//         yAxis: {
//           show: true,
//           values: [
//             '00:00',
//             '01:00',
//             '02:00',
//             '03:00',
//             '04:00',
//             '05:00',
//             '06:00',
//             '07:00',
//             '08:00',
//             '09:00',
//             '10:00',
//             '11:00',
//             '12:00',
//             '13:00',
//             '14:00',
//             '15:00',
//             '16:00',
//             '17:00',
//             '18:00',
//             '19:00',
//             '20:00',
//             '21:00',
//             '22:00',
//             '23:00'
//           ],
//           fontSize: 2,
//           color: '#4A4A4A',
//           bold: false,
//           offsetY: 0,
//           offsetX: 4
//         }
//       }
//     },
//     // title: {
//     //   text: 'Title',
//     //   color: '#FAFAFA',
//     //   fontSize: 20,
//     //   bold: true,
//     //   textAlign: 'center',
//     //   paddingLeft: 0,
//     //   paddingRight: 0,
//     //   subtitle: { color: '#A1A1A1', text: 'Subtitle', fontSize: 16, bold: false }
//     // },
//     legend: {
//       show: true,
//       backgroundColor: '#08B545',
//       color: '#1A1A1A',
//       fontSize: 2,
//       bold: true,
//       roundingValue: 0,
//       position: 'right',
//       scaleBorderRadius: 5
//     },
//     tooltip: {
//       show: true,
//       backgroundColor: '#1A1A1A',
//       color: '#CCCCCC',
//       fontSize: 14,
//       roundingValue: 0,
//       customFormat: null,
//       borderRadius: 1,
//       borderColor: '#08B545',
//       borderWidth: 0,
//       backgroundOpacity: 70,
//       position: 'center',
//       offsetY: 24
//     }
//   },
//   userOptions: {
//     show: false,
//     buttons: { tooltip: true, pdf: true, img: true, csv: true, table: true, fullscreen: true },
//     buttonTitles: {
//       open: 'Open options',
//       close: 'Close options',
//       tooltip: 'Toggle tooltip',
//       pdf: 'Download PDF',
//       csv: 'Download CSV',
//       img: 'Download PNG',
//       table: 'Toggle table',
//       fullscreen: 'Toggle fullscreen'
//     }
//   },
//   table: {
//     show: false,
//     responsiveBreakpoint: 100,
//     colNames: { xAxis: 'Week' },
//     th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
//     td: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' }
//   }
// })

// const config = ref({
//   theme: '',
//   style: {
//     fontFamily: 'inherit',
//     backgroundColor: '#FFFFFF',
//     color: '#1A1A1A',
//     layout: {
//       padding: {
//         top: 60,
//         right: 25,
//         bottom: 0,
//         left: 50
//       },
//       cells: {
//         height: 96,
//         value: {
//           show: false,
//           fontSize: 8,
//           bold: true,
//           roundingValue: 0,
//           color: '#2D353C'
//         },
//         colors: {
//           hot: '#57af4b',
//           cold: '#e0f0e2',
//           underlayer: '#FFFFFF'
//         },
//         spacing: '0.6',
//         selected: {
//           border: 1.9,
//           color: '#1A1A1A'
//         }
//       },
//       dataLabels: {
//         prefix: '',
//         suffix: '',
//         xAxis: {
//           show: true,
//           values: [],
//           fontSize: 25,
//           color: '#1A1A1A',
//           bold: false,
//           offsetX: 0,
//           offsetY: 0
//         },
//         yAxis: {
//           show: true,
//           values: [],
//           fontSize: 25,
//           color: '#1A1A1A',
//           bold: false,
//           offsetX: 0,
//           offsetY: 0
//         }
//       }
//     },
//     // title: {
//     //   text: 'Title',
//     //   color: '#1A1A1A',
//     //   fontSize: 20,
//     //   bold: true,
//     //   textAlign: 'center',
//     //   paddingLeft: 0,
//     //   paddingRight: 0,
//     //   subtitle: {
//     //     color: '#A1A1A1',
//     //     text: '',
//     //     fontSize: 16,
//     //     bold: false
//     //   }
//     // },
//     legend: {
//       show: true,
//       bold: true,
//       backgroundColor: '#FFFFFF',
//       color: '#1A1A1A',
//       fontSize: 10,
//       roundingValue: 0,
//       position: 'right',
//       scaleBorderRadius: '18'
//     },
//     tooltip: {
//       show: true,
//       color: '#1A1A1A',
//       backgroundColor: '#FFFFFF',
//       fontSize: 14,
//       customFormat: null,
//       borderRadius: 4,
//       borderColor: '#e1e5e8',
//       borderWidth: 1,
//       backgroundOpacity: 100,
//       position: 'center',
//       offsetY: 24,
//       roundingValue: 0
//     }
//   },
//   userOptions: {
//     show: false,
//     buttons: {
//       tooltip: true,
//       pdf: true,
//       csv: true,
//       img: true,
//       table: true,
//       labels: false,
//       fullscreen: true,
//       sort: false,
//       stack: false,
//       animation: false
//     },
//     buttonTitles: {
//       open: 'Open options',
//       close: 'Close options',
//       tooltip: 'Toggle tooltip',
//       pdf: 'Download PDF',
//       csv: 'Download CSV',
//       img: 'Download PNG',
//       table: 'Toggle table',
//       fullscreen: 'Toggle fullscreen'
//     }
//   },
//   table: {
//     show: false,
//     responsiveBreakpoint: 400,
//     colNames: {
//       xAxis: 'X'
//     },
//     th: {
//       backgroundColor: '#FFFFFF',
//       color: '#1A1A1A',
//       outline: 'none'
//     },
//     td: {
//       backgroundColor: '#FFFFFF',
//       color: '#1A1A1A',
//       outline: 'none',
//       roundingValue: 0
//     }
//   }
// })

const dataset = [
  {
    name: 'Mon',
    values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  },
  {
    name: 'Tue',
    values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  },
  {
    name: 'Wed',
    values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  },
  {
    name: 'Thu',
    values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  },
  {
    name: 'Fri',
    values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  },
  {
    name: 'Sat',
    values: [1, 5, 0, 0, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  },
  {
    name: 'Sun',
    values: [1, 8, 1, 5, 1, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0]
  }
]

const config = ref({
  style: {
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    fontFamily: 'inherit',
    layout: {
      padding: { top: 0, right: 68, bottom: 0, left: 68 },
      cells: {
        height: 100,
        value: { show: false, fontSize: 12, bold: false, roundingValue: 0, color: '#FFFFFF' },
        colors: { hot: '#469d3a', cold: '#c9f7c3', underlayer: '#8ae27e' },
        spacing: 0.9,
        selected: { border: 1, color: '#469d3a' }
      },
      dataLabels: {
        prefix: '',
        suffix: '',
        xAxis: {
          show: true,
          values: [],
          fontSize: 12,
          color: '#1A1A1A',
          bold: false,
          offsetX: 0,
          offsetY: 0
        },
        yAxis: {
          show: true,
          values: [],
          fontSize: 12,
          color: '#1A1A1A',
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
      backgroundColor: '#ffffff',
      color: '#ffffff',
      fontSize: 0,
      bold: true,
      roundingValue: 0,
      position: 'right',
      scaleBorderRadius: 12
    },
    tooltip: {
      show: true,
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      fontSize: 14,
      roundingValue: 0,
      customFormat: null,
      borderRadius: 4,
      borderColor: '#3A3A3A',
      borderWidth: 1,
      backgroundOpacity: 70,
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
    responsiveBreakpoint: 400,
    colNames: { xAxis: 'Week' },
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none', roundingValue: 0 }
  }
})
</script>

<style lang="css" scoped>
.div {
  width: 75em;
  margin: 0 auto;
  border: 1px solid black;
}

.chart {
  /* border: 2px solid black; */
  border: 1px solid blue;
}
</style>
