<template>
  <div>
    <VueDataUi component="VueUiXyCanvas" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const dataset = ref([
  //   {
  //     name: 'Serie 1',
  //     type: 'line',
  //     series: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
  //   },
  //   {
  //             name: string;
  //             series: number[];
  //             type?: "line" | "bar" | "plot";
  //             useArea?: boolean;
  //             dataLabels?: boolean;
  //             scaleSteps?: number;
  //             prefix?: string;
  //             suffix?: string;
  //             rounding?: number;
  //             autoScaling?: boolean;
  //             stackRatio?: number; // if used on all datapoints, must sum up to 1
  //         },
  //   {
  //     name: 'Series 1',
  //     series: [5, 3, 12, 13, 8, 5, 3],
  //     type: 'bar',
  //     color: '#0096FB',
  //     scaleSteps: 5,
  //     dataLabels: true
  //   },
  //   {
  //     name: 'Series 2',
  //     series: [5, 3, 1, 3, 8, 9],
  //     type: 'line',
  //     color: 'rgb(66,211,146)',
  //     useArea: true,
  //     dataLabels: false,
  //     scaleSteps: 2
  //   },
  {
    name: 'Series 3',
    series: [0, 1, 8, 2, 3, 2, 2, 1, 0],
    type: 'plot',
    color: '#08B545',
    scaleSteps: 5
  }
])

const config = ref({
  responsive: false,
  theme: '',
  customPalette: [],
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
  },
  style: {
    fontFamily: 'Satoshi',
    chart: {
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      aspectRatio: '14 / 9',
      stacked: false,
      stackGap: 25,
      scale: { ticks: 10 },
      zoom: {
        show: true,
        color: '#08B545',
        highlightColor: '#08B545',
        fontSize: 18,
        useResetSlot: true
      },
      selector: { show: false, color: '#6A6A6A', dashed: true },
      tooltip: {
        show: true,
        color: '#CCCCCC',
        backgroundColor: '#1A1A1A',
        fontSize: 14,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#8A8A8A',
        borderWidth: 1,
        backgroundOpacity: 70,
        position: 'center',
        offsetY: 24
      },
      legend: {
        backgroundColor: '#1A1A1A',
        color: '#CCCCCC',
        show: false,
        fontSize: 16,
        bold: false
      },
      //   title: {
      //     text: 'Title',
      //     color: '#FAFAFA',
      //     fontSize: 20,
      //     bold: true,
      //     textAlign: 'center',
      //     paddingLeft: 0,
      //     paddingRight: 0,
      //     subtitle: { color: '#A1A1A1', text: 'Subtitle', fontSize: 16, bold: false }
      //   },
      grid: {
        y: {
          showAxis: true,
          axisColor: '#6A6A6A',
          axisThickness: 1,
          axisName: '',
          axisLabels: {
            show: true,
            fontSizeRatio: 1,
            color: '#1a1a1a',
            offsetX: -10,
            rounding: 1,
            prefix: '',
            suffix: ''
          },
          verticalLines: { show: false, color: '#4A4A4A', hideUnderXLength: 20 },
          timeLabels: {
            show: true,
            fontSizeRatio: 1.2,
            values: [
              '10 Apr',
              '12 Apr',
              '14 Apr',
              '16 Apr',
              '18 Apr',
              '20 Apr',
              '21 Apr',
              '22 Apr'
            ],
            rotation: 0,
            offsetY: 30,
            color: '#1a1a1a',
            modulo: 12
          }
        },
        x: {
          showAxis: true,
          axisColor: '#4A4A4A',
          axisThickness: 2,
          axisName: '',
          horizontalLines: { show: false, color: '#3A3A3A', alternate: true, opacity: 20 }
        },
        zeroLine: { show: true, color: '#6A6A6A', dashed: true }
      },
      line: { plots: { show: true, radiusRatio: 2 } },
      area: { opacity: 90 },
      dataLabels: {
        show: true,
        fontSizeRatio: 2,
        useSerieColor: true,
        color: '#1a1a1a',
        offsetY: -14
      },
      paddingProportions: { top: 0.1, left: 0.1, right: 0.05, bottom: 0.05 }
    }
  },
  table: {
    show: false,
    rounding: 1,
    responsiveBreakpoint: 400,
    columnNames: { period: 'Period', total: 'Total' },
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' }
  }
})
</script>

<style lang="css" scoped>
div {
  width: 30em;
}
</style>
