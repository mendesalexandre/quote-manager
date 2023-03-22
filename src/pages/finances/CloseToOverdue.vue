<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page padding>
    <!-- content -->
    <filter-panel v-show="true"/>
    <table-panel :title="$t('view.closeToOverdue.lbl.title')" :columns="billsColumns" :rows="rows" />
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watchEffect,
  onMounted
} from 'vue'
import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import { useStore } from 'vuex'
import { closeToOverdueColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

export default defineComponent({
  name: 'CloseToOverdue',
  components: {
    FilterPanel,
    TablePanel
  },
  data () {
    onMounted(() => {
      showLoading(LoadingStatus.ON)
    })

    const store = useStore()
    const temp = computed(() => store.getters['bills/getBillsCloseToOverdue'])
    const billsColumns = closeToOverdueColumns()
    let rows = null

    watchEffect(async () => {
      if (temp.value !== undefined) {
        rows = temp.value
        showLoading(LoadingStatus.OFF)
      }
    })

    return {
      rows,
      billsColumns,
      selected: ref([])
    }
  }
})
</script>
