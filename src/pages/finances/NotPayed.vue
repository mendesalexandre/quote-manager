<template>
  <q-page padding>
    <filter-panel v-show="true"></filter-panel>
    <br>
    <table-panel :title="$t('view.notPaid.lbl.title')" :columns="billsColumns" :rows="rows" />
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  watchEffect,
  onMounted
} from 'vue'
import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import { useStore } from 'vuex'
import { notPaidColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

export default defineComponent({
  name: 'NotPayed',
  components: {
    FilterPanel,
    TablePanel
  },
  data () {
    onMounted(() => {
      showLoading(LoadingStatus.ON)
    })

    const store = useStore()
    const temp = computed(() => store.getters['bills/getBillsNotPayed'])
    const billsColumns = notPaidColumns()
    let rows = null

    watchEffect(async () => {
      if (temp.value !== undefined) {
        rows = temp.value
        showLoading(LoadingStatus.OFF)
      }
    })

    return {
      rows,
      billsColumns
    }
  }
})
</script>
