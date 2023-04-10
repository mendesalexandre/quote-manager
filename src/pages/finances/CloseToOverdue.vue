<template>
  <q-page padding>
    <filter-panel>
      <template #filter-content>
        <!-- Date picker -->
        <month-picker></month-picker>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>
    <br>
    <table-panel
      :title="$t('view.closeToOverdue.lbl.title')"
      :columns="billsColumns || []"
      :rows="rows || []"
      :show-button-edit="true"
      :show-button-remove="true"
      :show-button-pay="false"
    />
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch
} from 'vue'
import { useStore } from 'vuex'

import { closeToOverdueColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import MonthPicker from 'src/components/MonthPicker.vue'

export default defineComponent({
  name: 'CloseToOverdue',
  components: {
    FilterPanel,
    TablePanel,
    ButtonSearch,
    MonthPicker
  },
  data () {
    const store = useStore()
    const billsColumns = closeToOverdueColumns()

    const onSearchClick = () => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsCloseToOverdueList', { showMessage: true })
    }

    const rows = computed(() => store.getters['bills/getBillsCloseToOverdue'])

    watch(rows, () => {
      showLoading(LoadingStatus.OFF)
    })

    return {
      rows,
      billsColumns,
      selected: ref([]),
      onSearchClick
    }
  }
})
</script>
