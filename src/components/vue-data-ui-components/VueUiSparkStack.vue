<template>
    <div class="div__main">
        <VueDataUi component="VueUiSparkStackbar" :dataset="dataset" :config="config" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const dataset = ref([
  {
    name: 'Interactions',
    value: 258,
    color: '#DC73FC'
  },
  {
    name: 'Sent messages',
    value: 36,
    color: '#08B545'
  },
  {
    name: 'Received messages',
    value: 16,
    color: '#0096FB'
  }
])

const config = ref({
  style: {
    backgroundColor: '#fff',
    fontFamily: 'inherit',
    animation: { show: true, animationFrames: 60 },
    bar: { gradient: { show: true, intensity: 40, underlayerColor: '#fff' } },
    legend: {
      margin: '6px 0 0 0',
      textAlign: 'left',
      show: false,
      fontSize: 10,
      name: { color: '#1a1a1a', bold: false },
      value: { show: true, bold: false, color: '#1a1a1a', prefix: '', suffix: '', rounding: 0 },
      percentage: { show: true, bold: true, color: '#1a1a1a', rounding: 1 }
    },
    title: {
      textAlign: 'left',
      text: '',
      color: '#FAFAFA',
      fontSize: 16,
      bold: true,
      margin: '0 0 6px 0',
      subtitle: { color: '#A1A1A1', text: '', fontSize: 12, bold: false }
    }
  }
})
</script>

<style scoped>
.div__main {
    width: 35em;
}
</style>
