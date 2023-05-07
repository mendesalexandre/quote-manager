<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Indicators',
  components: {
    Bar
  },
  data () {
    const store = useStore()
    // const test = store.dispatch('charts/')

    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      }
    }
  }
})
</script>
