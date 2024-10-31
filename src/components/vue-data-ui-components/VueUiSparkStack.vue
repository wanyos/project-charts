<template>
  <div class="div__main">
    <VueDataUi component="VueUiSparkStackbar" :dataset="dataset" :config="config" />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  address: {
    type: Object,
    default: () => {}
  },
  showLegend: {
    type: Boolean,
    default: true
  }
})

const dataset = ref(props.data)

// const dataset = ref([
//   {
//     name: 'Interactions',
//     value: 258,
//     color: '#DC73FC'
//   },
//   {
//     name: 'Sent messages',
//     value: 36,
//     color: '#08B545'
//   },
//   {
//     name: 'Received messages',
//     value: 16,
//     color: '#0096FB'
//   }
// ])

const config = reactive({
  style: {
    backgroundColor: '#fff',
    fontFamily: 'inherit',
    animation: { show: true, animationFrames: 60 },
    bar: { gradient: { show: true, intensity: 40, underlayerColor: '#fff' } },
    legend: {
      margin: '1px 0 0 0',
      textAlign: 'left',
      show: computed(() => !props.showLegend),
      fontSize: 10,
      name: { color: '#1a1a1a', bold: false },
      value: { show: true, bold: false, color: '#1a1a1a', prefix: '', suffix: '', rounding: 0 },
      percentage: { show: true, bold: true, color: '#1a1a1a', rounding: 1 }
    },
    title: {
      show: true,
      textAlign: 'left',
      text: computed(() => props.address?.name || 'empty'),
      color: '#1a1a1a',
      fontSize: 16,
      bold: true,
      margin: '0 0 2px 0',
      subtitle: {
        color: '#A1A1A1',
        text: computed(() => props.address?.email || 'empty'),
        fontSize: 10,
        bold: false
      }
    }
  }
})
</script>

<style scoped>
.div__main {
  margin-bottom: 10px;
  width: 35em;
}
</style>
