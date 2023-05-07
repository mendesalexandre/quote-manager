<template>
  <q-page padding class="bg-primary">
    <filter-panel>
      <template #filter-content>
        <!-- Date picker -->
        <!-- <month-picker></month-picker> -->
      </template>
      <template #filter-buttons>
        <button-search @click="onSearchClick"/>
      </template>
    </filter-panel>
    <br>
    <table-panel
      :title="$t('view.notPaid.lbl.title')"
      :columns="billsColumns"
      :rows="rows"
      :show-button-edit="false"
      :show-button-remove="false"
      :show-button-pay="true"
      @on-pay-click-event="confirmPayBill"
    >
    </table-panel>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref
} from 'vue'
import { useStore } from 'vuex'

import { notPaidColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'
import i18n from 'src/util/i18n'

import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import MonthPicker from 'src/components/MonthPicker.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import { notifyError } from 'src/util/Notification'

export default defineComponent({
  name: 'NotPayed',
  components: {
    FilterPanel,
    TablePanel,
    // MonthPicker,
    ButtonSearch
  },
  data () {
    const store = useStore()
    const billsColumns = notPaidColumns()

    const onSearchClick = () => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsOverdueList', { showMessage: true })
    }

    const rows = ref(computed(() => store.getters['bills/getBillsNotPayed']))

    return {
      rows,
      billsColumns,
      store,
      // translate,
      onSearchClick
    }
  },
  methods: {
    confirmPayBill (row) {
      this.$q
        .dialog({
          title: i18n.global.t('msg.payBill.title'),
          message: i18n.global.t('msg.payBill.message'),
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          this.store.dispatch('bills/payBillOverdue', row.id)
          this.onSearchClick()
        })
        .onCancel(() => {
          notifyError(i18n.global.t('msg.payBill.notPaidError'))
        })
    }
  }
})
</script>
