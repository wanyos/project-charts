<template>
    <div class="div__main">
        <Pie :data="dataset" :options="chartOptions" />
    </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { ref } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
    colorSeries: {
        type: Array,
        default: () => []
    }
})

const dataset = ref({
  labels: ['Replied', 'Not Replied'],
  datasets: [
    {
      backgroundColor: props.colorSeries,
      data: [40, 20]
    }
  ]
})


const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Emails Replied'
    },
})

</script>

<style lang="scss" scoped>
.div__main {
    border: 1px solid black;
}
</style>


