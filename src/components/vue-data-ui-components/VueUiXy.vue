<template>
  <div>
    <VueDataUi component="VueUiXy" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const getDaysMonth = () => {
  const daysOfMonth = []
  for (let day = 1; day <= 30; day++) {
    let formattedDay = (day < 10 ? '0' : '') + day + ' Apr'
    daysOfMonth.push(formattedDay)
  }
  return daysOfMonth
}

const props = defineProps({
    colorChart: {
        type: String,
        default: ''
    },
    dataType: {
        type: Object,
        default: () => {}
    }
});

const dataset = ref([
// {
//     name: props.dataType.name,
//     series:props.dataType.series,
//     type: props.dataType.type,
//     color: props.dataType.color,
//     useProgression: props.dataType.useProgression,
//     dataLabels: props.dataType.dataLabels,
//     useArea: props.dataType.useArea,
//     shape: props.dataType.shape,
//     scaleSteps: props.dataType.scaleSteps,
//     scaleLabel: props.dataType.scaleLabel
//   },
//   {
//     name: 'Series 1',
//     series: [-55, -34, -21, -13, -8, -5, -3, -2, -1, -1, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
//     type: 'bar',
//     color: 'rgb(95,139,238)',
//     scaleSteps: 10,
//     scaleLabel: 'Blue circles'
//   },
  {
    name: '',
    series: [5, 14, 11, 13, 8, 5, 3, 2, 1, 1, 0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5],
    type: 'line',
    color: props.colorChart,
    useProgression: false,
    dataLabels: false,
    useArea: true,
    shape: '',
    scaleSteps: 10,
    scaleLabel: ''
  },
//   {
//     name: 'Series 3',
//     series: [64, 60, 52, 42, 30, 16, 0, -18, -38, -46, -50, -46, -38, -18, 0, 16, 30, 42, 52, 60, 64],
//     type: 'plot',
//     color: 'rgb(255,100,0)',
//     shape: 'star',
//     scaleSteps: 10,
//     scaleLabel: 'Plots'
//   },
//   {
//     name: 'Series 4',
//     series: [0, 1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20],
//     comments: ['', '', '', '', '', '', '', '', '', '', '', 'A comment for this specific datapoint'],
//     type: 'line',
//     smooth: true,
//     color: 'rgb(200,200,50)',
//     shape: 'diamond',
//     scaleSteps: 10,
//     scaleLabel: ''
//   },
//   {
//     name: 'Target',
//     series: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
//     type: 'line',
//     color: '#404040',
//     dashed: true,
//     useTag: 'start',
//     dataLabels: false,
//     shape: 'circle',
//     scaleSteps: 10,
//     scaleLabel: 'Black circles'
//   }
])

const config = ref({
  responsive: false,
  useCssAnimation: true,
  showTable: false,
  chart: {
    backgroundColor: '#FFFFFF',
    color: '#1a1a1a',
    highlighter: { color: props.colorChart, opacity: 0, useLine: false, lineDasharray: 0, lineWidth: 1 },
    // timeTag: {
    //   show: false,
    //   backgroundColor: '#2A2A2A',
    //   color: '#CCCCCC',
    //   fontSize: 12,
    //   circleMarker: { radius: 3, color: '#6A6A6A' }
    // },
    // highlightArea: {
    //   show: false,
    //   from: 5,
    //   to: 8,
    //   color: '#FF0000',
    //   opacity: 10,
    //   caption: {
    //     text: 'This area is highlighted',
    //     fontSize: 20,
    //     color: '#FAFAFA',
    //     bold: false,
    //     offsetY: 0,
    //     width: 'auto',
    //     padding: 3,
    //     textAlign: 'center'
    //   }
    // },
    zoom: {
      show: true,
      color: props.colorChart,
      highlightColor: props.colorChart,
      fontSize: 12,
      useResetSlot: false
    },
    padding: { top: 36, right: 92, bottom: 65, left: 64 },
    grid: {
      stroke: '#e1e5e8',
      showVerticalLines: false,
      showHorizontalLines: false,
      labels: {
        show: true,
        color: '#1a1a1a',
        fontSize: 20,
        axis: {
          yLabel: '',
          yLabelOffsetX: 0,
          xLabel: '',
          xLabelOffsetY: 0,
          fontSize: 20
        },
        zeroLine: { show: false },
        yAxis: {
          commonScaleSteps: 10,
          useIndividualScale: false,
          stacked: false,
          gap: 64,
          labelWidth: 40,
          showBaseline: true
        },
        xAxis: { showBaseline: true },
        xAxisLabels: {
          color: '#1a1a1a',
          show: true,
          showOnlyFirstAndLast: false,
          values: getDaysMonth(),
        //   values: [
        //     'JAN',
        //     'FEB',
        //     'MAR',
        //     'APR',
        //     'MAY',
        //     'JUN',
        //     'JUL',
        //     'AUG',
        //     'SEP',
        //     'OCT',
        //     'NOV',
        //     'DEC',
        //     'JAN',
        //     'FEB',
        //     'MAR',
        //     'APR',
        //     'MAY',
        //     'JUN',
        //     'JUL',
        //     'AUG',
        //     'SEP'
        //   ],
          fontSize: 22,
          yOffset: 2,
          rotation: 30,
          showOnlyAtModulo: false,
          modulo: 18
        }
      }
    },
    // comments: { show: true, showInTooltip: true, width: 50, offsetX: 0, offsetY: -64 },
    // labels: { fontSize: 20, prefix: '', suffix: '' },
    legend: { show: true, color: '#c8c8c8', fontSize: 10 },
    // title: {
    //   show: false,
    //   text: 'Title',
    //   color: '#c8c8c8',
    //   fontSize: 20,
    //   bold: true,
    //   textAlign: 'center',
    //   paddingLeft: 0,
    //   paddingRight: 0,
    //   subtitle: { fontSize: 16, color: '#c8c8c8', text: 'Subtitle' }
    // },
    tooltip: {
      color: '#CCCCCC',
      backgroundColor: '#1A1A1A',
      show: true,
      showValue: true,
      showPercentage: false,
      roundingValue: 0,
      roundingPercentage: 0,
      customFormat: null,
      borderRadius: 4,
      borderColor: '#3A3A3A',
      borderWidth: 1,
      fontSize: 14,
      backgroundOpacity: 70,
      position: 'center',
      offsetY: 24
    },
    userOptions: {
      show: true,
      buttons: {
        tooltip: true,
        pdf: true,
        img: true,
        csv: true,
        table: true,
        labels: true,
        stack: true,
        fullscreen: true
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
        stack: 'Toggle stack mode'
      }
    }
  },
//   bar: {
//     borderRadius: 8,
//     useGradient: true,
//     periodGap: 0.1,
//     border: { useSerieColor: false, strokeWidth: 1, stroke: '#1A1A1A' },
//     labels: { show: true, offsetY: -6, rounding: 0, color: '#c8c8c8' },
//     serieName: {
//       show: false,
//       offsetY: -6,
//       useAbbreviation: true,
//       useSerieColor: true,
//       color: '#c8c8c8',
//       bold: false,
//       abbreviationSize: 3
//     }
//   },
//   line: {
//     radius: 3,
//     useGradient: true,
//     strokeWidth: 2,
//     labels: { show: true, offsetY: -6, rounding: 0, color: '#c8c8c8' },
//     area: { useGradient: true, opacity: 30 }
//   },
//   plot: {
//     radius: 3,
//     useGradient: true,
//     labels: { show: false, offsetY: -6, rounding: 0, color: '#c8c8c8' }
//   },
//   table: {
//     rounding: 0,
//     responsiveBreakpoint: 400,
//     sparkline: true,
//     th: { backgroundColor: '#1A1A1A', color: '#c8c8c8', outline: 'none' },
//     td: { backgroundColor: '#1A1A1A', color: '#c8c8c8', outline: 'none' },
//     columnNames: { period: 'Period', total: 'Total' }
//   }
})
</script>

<style lang="css" scoped>
div {
  width: 30em;
}
</style>
