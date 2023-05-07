<template>
  <!-- <Pie :data="moneyPerYear" :options="options"/> -->
  <!-- <Pie :data="moneyPerYearData" :options="options" /> -->
  <!-- <Pie :data="data" :options="options" /> -->
  <canvas ref="chart"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'

import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
// import { Pie } from 'vue-chartjs'

// ChartJS.register(ArcElement, Tooltip, Legend)

import Chart from 'chart.js/auto'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reports',
  components: {
    // Pie
  },
  created () {
    (this as any).$store.dispatch('charts/getSumMoneyPerYear', { showMessage: false, year: '2022' })
  },
  data () {
    onMounted(() => {
      // showLoading(LoadingStatus.ON)
      // console.log('disparando eventos')
      // store.dispatch('charts/getSumMoneyPerYear', { showMessage: false, year: '2022' })
      // .then((data) => {
      //   moneyPerYear = data
      //   console.log('terminei getSumMoneyPerYear')
      // })
      // store.dispatch('charts/getCalcExpenseByTagPerYear', { showMessage: false, year: '2022' }).then(() => { console.log('terminei getCalcExpenseByTagPerYear') })
      // store.dispatch('charts/getCalcEarningByTagPerYear', { showMessage: false, year: '2022' }).then(() => { console.log('terminei getCalcEarningByTagPerYear') })
    })
    // onMounted(() => {
    //   store.dispatch('tags/getTagsList', { showMessage: false })
    // })

    const store = useStore()

    const moneyPerYear = computed(() => store.getters['charts/getMoneyPerYear'])
    // const moneyPerYearData = {
    //   labels: moneyPerYear.value.labels,
    //   datasets: [
    //     {
    //       backgroundColor: moneyPerYear.value.data.backgroundColor,
    //       data: moneyPerYear.value.data.data
    //     }
    //   ]
    // }
    // console.log('moneyPerYear: ', moneyPerYearData)

    // const expensesByYear = ref(computed(() => store.getters['charts/getExpensesPerYear']))
    // const earningsByYear = ref(computed(() => store.getters['charts/getEarningsPerYear']))

    const chartMoneyPerYear = new Chart((this as any).$refs.chart, {
      type: 'pie',
      data: {
        labels: moneyPerYear.value.labels,
        datasets: [{
          data: moneyPerYear.value.data.data,
          backgroundColor: moneyPerYear.value.data.backgroundColor
        }]
        // labels: ['January', 'February', 'March'],
        // datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      }
    })

    // console.log('moneyPerYear: ', moneyPerYear)
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }

    watch(moneyPerYear, () => {
      showLoading(LoadingStatus.OFF)
    })

    // watchEffect(async () => {
    //   if (moneyPerYear.value === undefined) {
    //     showLoading(LoadingStatus.OFF)
    //   }
    // })

    return {
      store,
      options,
      // moneyPerYearData,
      chart: ref()
      // chartMoneyPerYear
      // expensesByYear,
      // earningsByYear
    }
  }
})
</script>
