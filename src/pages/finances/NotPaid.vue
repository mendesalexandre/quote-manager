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
import { defineComponent } from 'vue'

import { notPaidColumns } from 'src/models/ColumnsModel'
import { showLoading, LoadingStatus } from 'src/util/Loading'
import i18n from 'src/util/i18n'

import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import { notifyError } from 'src/util/Notification'

export default defineComponent({
  name: 'NotPayed',
  components: {
    FilterPanel,
    TablePanel,
    ButtonSearch
  },
  data () {
    return {
      rows: null,
      billsColumns: notPaidColumns()
    }
  },
  methods: {
    onSearchClick (showMessage = true) {
      showLoading(LoadingStatus.ON);
      (this as any).$store.dispatch('bills/getBillsOverdueList', { showMessage })
    },
    confirmPayBill (row) {
      this.$q
        .dialog({
          title: i18n.global.t('msg.payBill.title'),
          message: i18n.global.t('msg.payBill.message'),
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          (this as any).$store.dispatch('bills/payBillOverdue', row.id)
        })
        .onCancel(() => {
          notifyError(i18n.global.t('msg.payBill.notPaidError'))
        })
    }
  },
  computed: {
    computedBills () {
      return (this as any).$store.getters['bills/getBillsNotPayed']
    }
  },
  watch: {
    computedBills (newValue) {
      this.rows = newValue
    }
  }
})
</script>
