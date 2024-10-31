<template>
  <div>
    <h3>VueUiSparkStack</h3>

    <button @click="showLegend = !showLegend">Change</button>
    <div class="div__legend">
      <div v-if="showLegend" class="div__container">
        <div class="div__item">
          <div class="div__icon" style="background-color: #dc73fc"></div>
          <label for="">Interactions</label>
        </div>

        <div class="div__item">
          <div class="div__icon" style="background-color: #08b545"></div>
          <label for="">Sent messages</label>
        </div>

        <div class="div__item">
          <div class="div__icon" style="background-color: #0096fb"></div>
          <label for="">Received messages</label>
        </div>
      </div>
    </div>

    <section class="section__quick">
      <VueUiSparkStack :data="dataValues1" :address="dataName1" :show-legend="showLegend" />
      <VueUiSparkStack :data="dataValues2" :address="dataName2" :show-legend="showLegend" />
      <VueUiSparkStack :data="dataValues3" :address="dataName3" :show-legend="showLegend" />
      <VueUiSparkStack :data="dataValues4" :address="dataName4" :show-legend="showLegend" />
    </section>
  </div>
</template>

<script setup>
import VueUiSparkStack from '@/components/vue-data-ui-components/VueUiSparkStack.vue'
import { ref } from 'vue'

const showLegend = ref(true)

const dataName1 = {
  name: 'Wanyos',
  email: 'wanyos99@emailmeter.com'
}

const dataName2 = {
  name: 'Control Laboral',
  email: 'no-reply@controllaboral.es'
}

const dataName3 = {
  name: 'Ryan',
  email: 'ryan@shuttlecloud.com'
}

const dataName4 = {
  name: 'Carlos Perez Gandara',
  email: 'c@shuttlecloud.com'
}

const dataValues1 = [
  {
    name: 'Interactions',
    value: 25,
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
]
const dataValues2 = [
  {
    name: 'Interactions',
    value: 5,
    color: '#DC73FC'
  },
  {
    name: 'Sent messages',
    value: 16,
    color: '#08B545'
  },
  {
    name: 'Received messages',
    value: 36,
    color: '#0096FB'
  }
]
const dataValues3 = [
  {
    name: 'Interactions',
    value: 15,
    color: '#DC73FC'
  },
  {
    name: 'Sent messages',
    value: 6,
    color: '#08B545'
  },
  {
    name: 'Received messages',
    value: 32,
    color: '#0096FB'
  }
]
const dataValues4 = [
  {
    name: 'Interactions',
    value: 34,
    color: '#DC73FC'
  },
  {
    name: 'Sent messages',
    value: 3,
    color: '#08B545'
  },
  {
    name: 'Received messages',
    value: 6,
    color: '#0096FB'
  }
]

// const colorChartSent = '#08B545'
// const colorChartReceived = '#0096FB'
</script>

<style lang="css" scoped>
section {
  border: 1px solid black;
  margin: 0 auto;
  width: 55em;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

section .item {
  margin: 5px 55px;
}

.div__legend {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.div__icon {
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 5px;
}

.div__container {
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div__item {
  display: flex;
  align-items: center;
}

label {
  font-size: 14px;
  color: #1a1a1a;
}

button {
  padding: 2px 10px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
