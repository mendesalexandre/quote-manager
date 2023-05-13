<!-- eslint-disable semi -->
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div>
      <q-card>
        <doc-card-title title="Chart 1" />
        <Pie v-if="moneyPerYear" :data="moneyPerYear" :options="options" id="1"/>
      </q-card>
    </div>
    <div>
      <q-card>
        <doc-card-title title="Chart 2" />
        <Pie v-if="expensesByYear" :data="expensesByYear" :options="options" id="2"/>
      </q-card>
    </div>
    <div>
      <q-card>
        <doc-card-title title="Chart 3" />
        <Pie v-if="earningsByYear" :data="earningsByYear" :options="options" id="3"/>
      </q-card>
    </div>
  </div>
  <!-- Finances tips
  <q-card>
    <doc-card-title :title="$t('view.home.lbl.sectionOne')" />
    <div class="q-pa-md row items-start q-gutter-md">
      <q-intersection
        v-for="(tip, index) in tipsFinances"
        :key="index"
        class="example-item"
      >
        <q-card v-if="tip.type === 'FINANCE'" flat bordered class="q-ma-sm">
          <q-card-section>
            <div class="text-h6"> {{ tip.title }} </div>
            <div class="text-subtitle2"> {{ tip.description }}</div>
          </q-card-section>
        </q-card>
      </q-intersection>

    </div>
    <Pie v-if="moneyPerYear" :data="moneyPerYear" :options="options"/>
  </q-card> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import DocCardTitle from 'src/components/DocCardTitle.vue'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reports',
  components: {
    Pie,
    DocCardTitle
  },
  data () {
    const store = useStore()
    const options = {
      responsive: false,
      maintainAspectRatio: false
    }

    return {
      store,
      options,
      moneyPerYear: ref(null),
      expensesByYear: ref(null),
      earningsByYear: ref(null)
    }
  },
  beforeMount () {
    this.getSumMoneyPerYear()
    this.getExpensesByYear()
    this.getEarningsByYear()
    console.log('4. passei aqui')
  },
  methods: {
    getSumMoneyPerYear () {
      console.log('1. passei aqui');
      (this as any).$store.dispatch('charts/getSumMoneyPerYear', { showMessage: false, year: '2022' })
    },
    getExpensesByYear () {
      (this as any).$store.dispatch('charts/getCalcExpenseByTagPerYear', { showMessage: false, year: '2022' })
      console.log('2. passei aqui')
    },
    getEarningsByYear () {
      (this as any).$store.dispatch('charts/getCalcEarningByTagPerYear', { showMessage: false, year: '2022' })
      console.log('3. passei aqui')
    }
  },
  computed: {
    computedMoneyPerYear () {
      return (this as any).$store.getters['charts/getMoneyPerYear']
    },
    computedExpenseByTag () {
      return (this as any).$store.getters['charts/getExpensesPerYear']
    },
    computedEarningByTag () {
      return (this as any).$store.getters['charts/getEarningsPerYear']
    }
  },
  watch: {
    computedMoneyPerYear (newValue) {
      this.moneyPerYear = newValue
    },
    computedExpenseByTag (newValue) {
      console.log(' 2.1 passei aqui: ', newValue)
      this.expensesByYear = newValue
    },
    computedEarningByTag (newValue) {
      console.log(' 3.1 passei aqui: ', newValue)
      this.earningsByYear = newValue
    }
  }
})
</script>
