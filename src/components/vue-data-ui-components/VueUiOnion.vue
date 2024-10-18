<template>
  <div>
    <VueDataUi component="VueUiOnion" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const dataset = ref(
  {
    name: 'Serie 1',
    percentage: 21,
    value: 1200,
    color: '#5f8bee'
  },
  {
    name: 'Serie 2',
    percentage: 34,
    value: 1000,
    color: '#ff6400'
  },
  {
    name: 'Serie 3',
    percentage: 55,
    value: 500
  },
  {
    name: 'Serie 4',
    color: '#42d392',
    percentage: 79,
    value: 1280
  }
)

const config = ref({
  responsive: false,
  useBlurOnHover: true,
  useCssAnimation: true,
  useStartAnimation: true,
  style: {
    fontFamily: 'inherit',
    chart: {
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      useGradient: true,
      gradientIntensity: 20,
      layout: {
        maxThickness: 64,
        gutter: { color: '#3A3A3A', width: 0.62 },
        track: { width: 0.62 },
        labels: {
          show: true,
          fontSize: 14,
          color: '#CCCCCC',
          roundingValue: 0,
          roundingPercentage: 0,
          bold: true,
          offsetY: 0,
          offsetX: 0,
          value: { show: true },
          percentage: { show: true }
        }
      },
      title: {
        text: 'Title',
        color: '#FAFAFA',
        fontSize: 20,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: { color: '#A1A1A1', text: 'Subtitle', fontSize: 16, bold: false }
      },
      legend: {
        show: true,
        bold: true,
        backgroundColor: '#1A1A1A',
        color: '#CCCCCC',
        fontSize: 14,
        roundingValue: 0,
        roundingPercentage: 0
      },
      tooltip: {
        show: true,
        backgroundColor: '#1A1A1A',
        color: '#CCCCCC',
        fontSize: 14,
        roundingValue: 0,
        roundingPercentage: 0,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#3A3A3A',
        borderWidth: 1,
        showValue: true,
        showPercentage: true,
        backgroundOpacity: 90,
        position: 'center',
        offsetY: 24
      }
    }
  },
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
    responsiveBreakpoint: 300,
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: {
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      outline: 'none',
      roundingValue: 0,
      roundingPercentage: 0
    },
    translations: { value: 'Value', percentage: 'Percentage', serie: 'Serie' }
  }
})
</script>

<style lang="scss" scoped>
div {
  width: 35em;
}
</style>
