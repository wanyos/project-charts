<template>
    <div>
        <h3>VueUiQuickChart</h3>
       
        <section class="section__quick">
            <VueUiXy class="item" :color-chart="colorChartSent" :data-type="dataTypeChartSent" />
            <VueUiXy class="item" :color-chart="colorChartReceived" />
        </section>

        <section class="section__xy">
            <VueUiQuickChart class="item" />
        </section>

       
     
    </div>
</template>

<script setup>
import VueUiQuickChart from '@/components/vue-data-ui-components/VueUiQuickChart.vue';
import VueUiXy from '@/components/vue-data-ui-components/VueUiXy.vue';


const colorChartSent = '#08B545'
const colorChartReceived = '#0096FB'

const dataTypeChartSent =  {
    name: 'Emails Sent',
    series: [5, 14, 11, 13, 8, 5, 3, 2, 1, 1, 0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 5],
    type: 'line',
    color: '#08B545',
    useProgression: false,
    dataLabels: false,
    useArea: true,
    shape: '',
    scaleSteps: 10,
    scaleLabel: ''
  }


</script>

<style lang="css" scoped>

section {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}

section .item {
margin: 5px 55px;
}

</style>