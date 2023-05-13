<template>
  <q-page padding class="bg-primary">
    <filter-panel>
      <template #filter-content>
        <!-- Date picker -->
        <month-picker></month-picker>
      </template>
      <template #filter-buttons>
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
  computed
} from 'vue'
import { useStore } from 'vuex'

import { closeToOverdueColumns } from 'src/models/ColumnsModel'
import { showLoading, LoadingStatus } from 'src/util/Loading'

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

    const onSearchClick = (showMessage = true) => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsCloseToOverdueList', { showMessage })
    }

    const rows = ref(computed(() => store.getters['bills/getBillsCloseToOverdue']))

    return {
      rows,
      billsColumns,
      selected: ref([]),
      onSearchClick
    }
  }
})
</script>
