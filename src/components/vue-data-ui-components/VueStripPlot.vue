<template>
  <div class="div__main">
    <VueDataUi component="VueUiStripPlot" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const dataset = ref([
  {
    name: 'Asia',
    plots: [
      { name: 'Shanghai', value: 24.9 },
      { name: 'Beijing', value: 21.9 },
      { name: 'Delhi', value: 16.8 },
      { name: 'Guangzhou', value: 16.1 },
      { name: 'Istanbul', value: 15.6 },
      { name: 'Chengdu', value: 15.4 },
      { name: 'Mumbai', value: 15.4 },
      { name: 'Karachi', value: 14.9 },
      { name: 'Shenzen', value: 14.7 },
      { name: 'Tokyo', value: 14 }
    ]
  },
  {
    name: 'Africa',
    plots: [
      { name: 'Kinshasa', value: 17.1 },
      { name: 'Lagos', value: 14.9 },
      { name: 'Cairo', value: 9.3 },
      { name: 'Johannesburg', value: 5.6 },
      { name: 'Giza', value: 5.6 },
      { name: 'Khartoum', value: 5.3 },
      { name: 'Abidjan', value: 5 },
      { name: 'Alexandria', value: 4.9 },
      { name: 'Dar es Salaam', value: 4.7 },
      { name: 'Nairobi', value: 4.4 }
    ]
  },
  {
    name: 'Europe',
    plots: [
      { name: 'Moscow', value: 13 },
      { name: 'London', value: 9 },
      { name: 'Saint Petersburg', value: 5.4 },
      { name: 'Berlin', value: 3.8 },
      { name: 'Madrid', value: 3.3 },
      { name: 'Kyiv', value: 3 },
      { name: 'Rome', value: 2.7 },
      { name: 'Paris', value: 2.1 },
      { name: 'Minsk', value: 2 },
      { name: 'Vienna', value: 1.9 }
    ]
  },
  {
    name: 'America',
    plots: [
      { name: 'Sao Paulo', value: 12.2 },
      { name: 'Lima', value: 9.7 },
      { name: 'Mexico City', value: 9.2 },
      { name: 'New York', value: 8.4 },
      { name: 'Bogota', value: 8 },
      { name: 'Rio de Janeiro', value: 6.7 },
      { name: 'Santiago', value: 6.2 },
      { name: 'Los Angeles', value: 4 },
      { name: 'Buenos Aires', value: 3 },
      { name: 'Brasilia', value: 2.9 }
    ]
  },
  {
    name: 'Australia & Oceania',
    plots: [
      { name: 'Sydney', value: 5.4 },
      { name: 'Melbourne', value: 5.1 },
      { name: 'Brisbane', value: 2.6 },
      { name: 'Perth', value: 2.1 },
      { name: 'Auckland', value: 1.7 },
      { name: 'Adelaide', value: 1.4 },
      { name: 'Honolulu', value: 1 },
      { name: 'Gold Coast', value: 0.7 },
      { name: 'Newcastle-Maitland', value: 0.5 },
      { name: 'Canberra', value: 0.46 }
    ]
  }
])

const config = ref({
  responsive: false,
  useCssAnimation: true,
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
    columnNames: { series: 'Series', value: 'Value' },
    th: { backgroundColor: '#1A1A1A', color: '#CCC', outline: 'none' },
    td: { backgroundColor: '#1A1A1A', color: '#CCC', outline: 'none', roundingValue: 0 }
  },
  style: {
    fontFamily: 'inherit',
    chart: {
      backgroundColor: '#FFFFFF',
      color: '#CCCCCC',
      height: 300,
      stripWidth: 120,
      padding: { top: 24, left: 64, right: 24, bottom: 64 },
      grid: {
        show: true,
        stroke: '#8A8A8A',
        strokeWidth: 1,
        scaleSteps: 16,
        horizontalGrid: { show: true, stroke: '#6A6A6A', strokeWidth: 0.5, strokeDasharray: 4 },
        verticalGrid: { show: true, stroke: '#6A6A6A', strokeWidth: 0.5, strokeDasharray: 4 }
      },
      plots: {
        opacity: 0.5,
        radius: 20,
        stroke: '#1A1A1A',
        strokeWidth: 1,
        shape: 'circle',
        gradient: { show: true, intensity: 40 }
      },
      labels: {
        prefix: '',
        suffix: 'M',
        bestPlotLabel: {
          show: true,
          showValue: true,
          fontSize: 2,
          color: '#CCCCCC',
          rounding: 0,
          offsetY: 0
        },
        axis: {
          xLabel: 'Continents',
          xLabelOffsetY: 0,
          yLabel: 'Population in Millions',
          yLabelOffsetX: 0,
          fontSize: 10,
          color: '#CCCCCC'
        },
        xAxisLabels: { show: true, color: '#6A6A6A', fontSize: 8, offsetY: 0 },
        yAxisLabels: { show: true, color: '#6A6A6A', fontSize: 8, rounding: 0, offsetX: 0 }
      },
      title: {
        text: 'Top 10 largest cities',
        color: '#FAFAFA',
        fontSize: 14,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: { color: '#A1A1A1', text: 'By continent', fontSize: 16, bold: false }
      },
      tooltip: {
        show: true,
        color: '#CCCCCC',
        backgroundColor: '#1A1A1A',
        fontSize: 12,
        roundingValue: 0,
        customFormat: null,
        borderRadius: 4,
        borderColor: '#3A3A3A',
        borderWidth: 1,
        backgroundOpacity: 30,
        position: 'center',
        offsetY: 24
      }
    }
  }
})
</script>

<style scoped>
.div__main {
  border: 1px solid black;
  width: 70%;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
}
</style>
