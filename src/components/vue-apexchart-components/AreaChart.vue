<template>
  <div class="div__main">
    <div>
      <button @click="updateData('one_month')">1M</button>
      <button @click="updateData('six_months')">6M</button>
      <button @click="updateData('one_year')">1Y</button>
      <!-- <button @click="updateData('ytd')">YTD</button>
      <button @click="updateData('all')">ALL</button> -->
    </div>
    <VueApexCharts
      ref="chartRef"
      type="area"
      :height="props.setHeight"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  setHeight: {
    type: String,
    default: '275px'
  },
  colorSerires: {
    type: String,
    default: ''
  }
})

const chartRef = ref(null)
const series = ref([{ data: [] }])

onMounted(() => {
  series.value[0].data = generateRandomTimeSeries()
  updateData('one_month')
})

function generateRandomTimeSeries() {
  const startDate = new Date('2023-01-01T00:00:00Z')
  const endDate = new Date('2024-10-31T23:59:59Z')
  const dailyData = []

  for (
    let currentDate = new Date(startDate);
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    const timestamp = currentDate.getTime()
    const randomValue = Math.floor(Math.random() * 21)
    dailyData.push([timestamp, randomValue])
  }
  return dailyData
}

const chartOptions = reactive({
  chart: {
    id: 'area-datetime',
    type: 'area',
    zoom: {
      autoScaleYaxis: true
    }
  },
  stroke: {
    curve: 'smooth',
    width: 1,
    // colors: ['#08B545']
    colors: [props.colorSerires]
  },
  //   annotations: {
  //     yaxis: [
  //       {
  //         y: 30,
  //         borderColor: '#999',
  //         label: {
  //           show: true,
  //           text: 'Support',
  //           style: {
  //             color: '#fff',
  //             background: '#00E396'
  //           }
  //         }
  //       }
  //     ],
  //     xaxis: [
  //       {
  //         x: new Date('14 Nov 2012').getTime(),
  //         borderColor: '#999',
  //         yAxisIndex: 0,
  //         label: {
  //           show: true,
  //           text: 'Rally',
  //           style: {
  //             color: '#fff',
  //             background: '#775DD0'
  //           }
  //         }
  //       }
  //     ]
  //   },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow'
  },
  xaxis: {
    type: 'datetime',
    min: new Date('28 Mar 2024').getTime(),
    max: new Date('27 Apr 2024').getTime(),
    tickAmount: 6
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
      colorStops: [
        {
          offset: 0,
          color: props.colorSerires,
          opacity: 0.5
        }
        // {
        //   offset: 100,
        //   color: '#08B510',
        //   opacity: 0.9
        // }
      ]
    }
  }
})

const updateData = (timeline) => {
  const zoomRanges = {
    one_month: ['28 Mar 2024', '27 Apr 2024'],
    six_months: ['27 May 2024', '27 Oct 2024'],
    one_year: ['27 Feb 2023', '27 Feb 2024'],
    ytd: ['01 Jan 2024', '27 Oct 2024'],
    all: ['01 Jan 2023', '27 Oct 2024']
  }
  if (timeline in zoomRanges) {
    const [start, end] = zoomRanges[timeline]
    if (chartRef.value && chartRef.value.chart) {
      chartRef.value.chart.zoomX(new Date(start).getTime(), new Date(end).getTime())
    }
  }
}
</script>

<style scoped>
.div__main {
  width: 50%;
  margin: 0 auto;
}

.div__main button {
  margin: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
</style>
