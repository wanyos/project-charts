<template>
  <div class="div">
    <VueDataUi component="VueUiHeatmap" :dataset="dataset" :config="config" class="chart" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const props = defineProps({
    colorSeries: {
        type: Object,
        default: () => {}
    }
});

const dataset = ref([])

function generateData() {
  const diasSemana = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const objetos = [];

  diasSemana.forEach((dia) => {
    const values = [];
    for (let i = 0; i < 23; i++) {
      values.push(Math.floor(Math.random() * 11));
    }
    objetos.push({ name: dia, values });
  });

  return objetos;
}


onMounted(() => {
    dataset.value = generateData();
})


// const dataset = [
//   {
//     name: 'Mon',
//     values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,7]
//   },
//   {
//     name: 'Tue',
//     values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,2]
//   },
//   {
//     name: 'Wed',
//     values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,2]
//   },
//   {
//     name: 'Thu',
//     values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,1]
//   },
//   {
//     name: 'Fri',
//     values: [31, 58, 12, 25, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,4]
//   },
//   {
//     name: 'Sat',
//     values: [1, 5, 0, 0, 13, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,7]
//   },
//   {
//     name: 'Sun',
//     values: [1, 8, 1, 5, 1, 2, 0, 0, 0, 3, 4, 1, 2, 7, 0, 1, 0, 0, 0, 1, 0, 2, 0,4]
//   }
// ]

const config = ref({
  style: {
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    fontFamily: 'inherit',
    layout: {
      height: 10,
      padding: { top: 0, right: 278, bottom: 0, left: 278 },
      cells: {
        height: 10,
        value: { show: false, fontSize: 12, bold: false, roundingValue: 0, color: '#FFFFFF' },
        colors: { hot: props.colorSeries.hot, cold: props.colorSeries.cold, underlayer: props.colorSeries.underlayer },
        spacing: 0.2,
        selected: { border: 1, color: '#469d3a' }
      },
      dataLabels: {
        prefix: '',
        suffix: '',
        xAxis: {
          show: false,
          values: [ '00:00',
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
            '23:00'],
          fontSize: 10,
          color: '#1A1A1A',
          bold: false,
          offsetX: 4,
          offsetY: 4
        },
        yAxis: {
          show: true,
          values: [],
          fontSize: 6,
          color: '#1A1A1A',
          bold: false,
          offsetY: 0,
          offsetX: 0
        }
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
      subtitle: { color: '#1a1a1a', text: '00 -- 23', fontSize: 12, bold: false }
    },
    legend: {
      show: false,
      backgroundColor: '#ffffff',
      color: '#ffffff',
      fontSize: 20,
      bold: true,
      roundingValue: 90,
      position: 'bottom',
      scaleBorderRadius: 520
    },
    tooltip: {
      show: true,
      backgroundColor: '#1A1A1A',
      color: '#CCCCCC',
      fontSize: 12,
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
    colNames: { xAxis: 'Week' },
    th: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none' },
    td: { backgroundColor: '#1A1A1A', color: '#CCCCCC', outline: 'none', roundingValue: 0 }
  }
})


</script>

<style lang="css" scoped>
div {
    /* width: 80vw; */
    margin: 0 auto;
    border: 1px solid black;
}
</style>
