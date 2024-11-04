<template>
  <section class="section__main">
    <v-chart :option="option" autoresize />
  </section>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
])

provide(THEME_KEY, 'light')

const props = defineProps({
  address: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    }
  },
  legend: {
    textStyle: {
      fontSize: 14
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '15%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: props.address.length > 0 ? props.address : ['No data available'],
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      fontSize: 14
    }
  },
  series: [
    {
      name: 'Interactions',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#DC73FC'
      },
      data: props.data.map((userData) => userData.interactions || 0),
      barWidth: 25
    },
    {
      name: 'Sent messages',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#0096FB'
      },
      data: props.data.map((userData) => userData.sent || 0),
      barWidth: 25
    },
    {
      name: 'Received messages',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        disabled: true,
        focus: 'series'
      },
      itemStyle: {
        color: '#08B545'
      },
      data: props.data.map((userData) => userData.received || 0),
      barWidth: 25
    }
  ]
})
</script>

<style scoped>
.section__main {
  width: 90vw;
  height: 10em;
  display: flex;
  align-items: center;
}
</style>

<!-- <template>
  <section class="section__main">
    <v-chart :option="option" autoresize />
  </section>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
])

provide(THEME_KEY, 'light')

const props = defineProps({
  address: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    }
  },
  legend: {
    textStyle: {
      fontSize: 14
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '15%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    // data: ['rowq@rts.com', 'alewq@ks.com', 'judsa@et.es', 'wanyos99@emailmeter.com'],
    data: props.address || 'empty',
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      fontSize: 14 // Aumenta el tamaño del texto del eje y
    }
  },
  series: [
    {
      name: 'Interactions',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
        // itemStyle: {
        //   shadowBlur: 0,
        //   shadowColor: 'transparent',
        //   shadowOffsetX: 0,
        //   shadowOffsetY: 0
        // }
      },
      itemStyle: {
        color: '#DC73FC'
      },
      // data: [22, 30, 45, 105],
      // data: [props.data[0] || 0],
      // data: [props.data.interactions || 0],
      data: props.data.map((userData) => userData.interactions || 0),
      barWidth: 25 // Reduce el ancho de las barras
    },
    {
      name: 'Sent messages',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
        // itemStyle: {
        //   shadowBlur: 0,
        //   shadowColor: 'transparent',
        //   shadowOffsetX: 0,
        //   shadowOffsetY: 0
        // }
      },
      itemStyle: {
        color: '#0096FB'
      },
      // data: [12, 32, 10, 14],
      // data: [props.data[1] || 0],
      // data: [props.data.sent || 0],
      data: props.data.map((userData) => userData.sent || 0),
      barWidth: 25 // Reduce el ancho de las barras
    },
    {
      name: 'Received messages',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        disabled: true,
        focus: 'series'
        // itemStyle: {
        //   shadowBlur: 0,
        //   shadowColor: 'transparent',
        //   shadowOffsetX: 0,
        //   shadowOffsetY: 0
        // }
      },
      itemStyle: {
        color: '#08B545'
      },
      // data: [10, 12, 11, 34],
      // data: [props.data[2] || 0],
      // data: [props.data.received || 0],
      data: props.data.map((userData) => userData.received || 0),
      barWidth: 25 // Reduce el ancho de las barras
    }
  ]
})
</script>

<style scoped>
.section__main {
  width: 90vw;
  height: 10em;
  display: flex;
  align-items: center;
}
</style> -->
