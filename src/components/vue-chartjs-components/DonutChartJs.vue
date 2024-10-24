<template>
    <div class="div__main">
        <Doughnut width="250px" height="250px" :data="data" :options="options" />
    </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
    colorSeries: {
        type: Array,
        default: () => []
    }
})

const data = {
  labels: ['Internal Messages', 'External Messages'],
  datasets: [
    {
      backgroundColor: props.colorSeries,
      data: [40, 20]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
      display: true,
      text: 'Internal vs. External'
    },
}

</script>

<style lang="scss" scoped>
.div__main {
    border: 1px solid black;

}
</style>