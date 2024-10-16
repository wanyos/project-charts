<template>
  <div>
    <VueUiQuickChart :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueUiQuickChart } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const getDaysMonth = () => {
  const daysOfMonth = []
  for (let day = 1; day <= 30; day++) {
    let formattedDay = (day < 10 ? '0' : '') + day + ' Apr'
    daysOfMonth.push(formattedDay)
  }
  return daysOfMonth
}

const dataset =  ref([11, 2, 2, 5, 18, 13, 21, 4, 5, 9])

// const dataset = ref([
//     {
//         name: 'Series 1',
//         series: [11, 2, 2, 5, 18, 13, 21, 4, 5, 9],
//         color: "rgb(95,139,238)"
//     }
// ])

const config = ref({
  responsive: false,
  backgroundColor: '#ffffff',
  barAnimated: true,
  barGap: 12,
  barStrokeWidth: 1,
  blurOnHover: true,
  chartIsBarUnderDatasetLength: 6,
  color: '#1a1a1a',
  dataLabelFontSize: 14,
  dataLabelRoundingPercentage: 1,
  dataLabelRoundingValue: 1,
  donutHideLabelUnderPercentage: 3,
  donutLabelMarkerStrokeWidth: 1,
  donutRadiusRatio: 0.4,
  donutShowTotal: true,
  donutStrokeWidth: 2,
  donutThicknessRatio: 0.18,
  donutTotalLabelFontSize: 24,
  donutTotalLabelOffsetY: 0,
  //   donutTotalLabelText: 'Total',
  donutUseShadow: false,
  donutShadowColor: '#08B545',
  fontFamily: 'inherit',
  height: 338,

  legendFontSize: 20,
  legendIcon: 'none',
  legendIconSize: 12,
  lineAnimated: true,
  lineSmooth: true,
  lineStrokeWidth: 2,
  paletteStartIndex: 0,
  showDataLabels: true,
  showLegend: true,
  showTooltip: true,
  showUserOptions: true,
  userOptionsButtons: { tooltip: true, pdf: true, img: true, fullscreen: true },
  userOptionsButtonTitles: {
    open: 'Open options',
    close: 'Close options',
    tooltip: 'Toggle tooltip',
    pdf: 'Download PDF',
    img: 'Download PNG',
    fullscreen: 'Toggle fullscreen'
  },
  //   title: 'A quick chart',
  titleBold: true,
  titleFontSize: 16,
  titleTextAlign: 'center',
  tooltipCustomFormat: null,
  tooltipBorderRadius: 4,
  tooltipBorderColor: '#08B545',
  tooltipBorderWidth: 1,
  tooltipFontSize: 14,
  tooltipBackgroundOpacity: 70,
  tooltipPosition: 'center',
  tooltipOffsetY: 24,
  useCustomLegend: false,
  valuePrefix: '',
  valueSuffix: '',
  width: 512,
  xyAxisStroke: '#4A4A4A',
  xyAxisStrokeWidth: 1,
  //   xyGridStroke: '#5A5A5A',
  xyGridStrokeWidth: 0.5,
  xyHighlighterColor: '#FFFFFF',
  xyHighlighterOpacity: 0.05,
  xyLabelsXFontSize: 12,
  xyLabelsYFontSize: 12,
  xyPaddingBottom: 18,
  xyPaddingLeft: 48,
  xyPaddingRight: 12,
  xyPaddingTop: 24,
   xyPeriods: getDaysMonth(),
//   xyPeriods: [
//     '01 Apr',
//     '02 Apr',
//     '03 Apr',
//     '04 Apr',
//     '05 Apr',
//     '06 Apr',
//     '07 Apr',
//     '08 Apr',
//     '09 Apr',
//     '10 Apr',
//     '11 Apr',
//     '12 Apr',
//     '13 Apr',
//     '14 Apr'
//   ],
  xyPeriodLabelsRotation: 12,
  xyScaleSegments: 5,
  xyShowAxis: true,
  //   xyShowGrid: true,
  xyShowScale: true,
  //   yAxisLabel: 'Quantity',
  //   xAxisLabel: 'Time',
  axisLabelsFontSize: 12,
  zoomXy: true,
  zoomColor: '#08B545',
  zoomHighlightColor: '#08B545',
  zoomFontSize: 12,
  zoomUseResetSlot: false
})


</script>

<style lang="css" scoped>
div {
  width: 25em;
}
</style>

