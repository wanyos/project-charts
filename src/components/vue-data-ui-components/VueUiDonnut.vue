<template>
  <div>
    <VueDataUi component="VueUiDonut" :dataset="dataset" :config="config" class="chart" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

// const props = defineProps(
//     {
//   colorSeries: Object,
//   default: () => {}
// }
// )

const props = defineProps({
  colorSeries: {
    type: Object,
    default: () => {}
  },
  titleSeries: {
    type: Object,
    default: () => {}
  }
})

const dataset = ref([
  {
    name: props.titleSeries.replied,
    color: props.colorSeries.replied,
    values: [15]
  },
  //   {
  //     name: 'Series 2',
  //     color: '#c9f7c3',
  //     values: [200]
  //   },
  {
    name: props.titleSeries.noReplied,
    color: props.colorSeries.noReplied,
    values: [22]
  }
])

const config = ref({
  responsive: false,
  useBlurOnHover: true,
  useCssAnimation: true,
  style: {
    fontFamily: 'inherit',
    chart: {
      useGradient: true,
      gradientIntensity: 30,
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      layout: {
        labels: {
          dataLabels: {
            show: true,
            useLabelSlots: false,
            hideUnderValue: 8,
            prefix: '',
            suffix: ''
          },
          value: { rounding: 0, show: true },
          percentage: { color: '#1a1a1a', bold: false, fontSize: 14 },
          name: { color: '#1a1a1a', bold: false, fontSize: 14 },
          hollow: {
            show: true,
            total: {
              show: true,
              bold: false,
              fontSize: 18,
              color: '#1a1a1a',
              text: 'Total',
              offsetY: -16,
              value: {
                color: '#1a1a1a',
                fontSize: 15,
                bold: false,
                suffix: '',
                prefix: '',
                offsetY: -8,
                rounding: 0
              }
            },
            average: {
              show: true,
              bold: false,
              fontSize: 18,
              color: '#1a1a1a',
              text: 'Average',
              offsetY: 0,
              value: {
                color: '#1a1a1a',
                fontSize: 14,
                bold: false,
                suffix: '',
                prefix: '',
                offsetY: 6,
                rounding: 0
              }
            }
          }
        },
        donut: { strokeWidth: 55, borderWidth: 6, useShadow: true, shadowColor: '#cccccc' }
      },
      comments: { show: true, showInTooltip: true, width: 100, offsetX: 0, offsetY: 0 },
      legend: {
        backgroundColor: '#1A1A1A',
        color: '#CCCCCC',
        show: false,
        fontSize: 16,
        bold: false,
        roundingValue: 0,
        roundingPercentage: 0
      },
      //   title: {
      //     text: 'Title',
      //     color: '#FAFAFA',
      //     fontSize: 20,
      //     bold: true,
      //     textAlign: 'center',
      //     paddingLeft: 0,
      //     paddingRight: 0,
      //     subtitle: { color: '#CCCCCC', text: 'Subtitle', fontSize: 16, bold: false }
      //   },
      tooltip: {
        show: true,
        color: '#CCCCCC',
        backgroundColor: '#1A1A1A',
        fontSize: 14,
        showValue: true,
        showPercentage: true,
        roundingValue: 0,
        roundingPercentage: 0,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#3A3A3A',
        borderWidth: 1,
        backgroundOpacity: 90,
        position: 'center',
        offsetY: 24
      }
    }
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
      fullscreen: 'Toggle fullscreen'
    }
  },
  table: {
    show: false,
    responsiveBreakpoint: 300,
    columnNames: { series: 'Series', value: 'Value', percentage: 'Percentage' },
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: {
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      outline: 'none',
      roundingValue: 0,
      roundingPercentage: 0
    }
  }
})
</script>

<style lang="scss" scoped>
div {
  border: 1px solid black;
  width: 15em;
}

.chart {
}
</style>
