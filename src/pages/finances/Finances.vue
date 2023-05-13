<template>
  <q-page padding class="bg-primary">
    <!--Filter panel-->
    <filter-panel>
      <template #filter-content>
        <!-- Bill name -->
        <q-input rounded outlined v-model="billName" :label="$t('view.finance.lbl.billName')">
          <template v-slot:prepend>
            <q-icon name="mdi-text-box-outline" />
          </template>
        </q-input>
        <!-- Tag name -->
        <q-input rounded outlined v-model="tagName" :label="$t('view.finance.lbl.tagName')">
          <template v-slot:prepend>
            <q-icon name="mdi-tag" />
          </template>
        </q-input>
        <!-- Date picker -->
        <month-picker @input="onDateUpdateEvent"></month-picker>
      </template>
      <template #filter-buttons>
        <button-new @click="openDialogNewBill()"/>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>

    <br>
    <table-panel
      :title="$t('view.finance.lbl.title')"
      :columns="billsColumns || []"
      :rows="rows || []"
      :show-button-edit="true"
      :show-button-remove="true"
      :show-button-pay="false"
      @on-remove-click-event="onRemoveBill"
    ></table-panel>
  </q-page>

</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue'
import moment from 'moment'

import { myBillsColumns } from 'src/models/ColumnsModel'
import i18n from 'src/util/i18n'
import { showLoading, LoadingStatus } from 'src/util/Loading'

import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import ButtonNew from 'src/components/ButtonNew.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import MonthPicker from 'src/components/MonthPicker.vue'

import DialogNewFinance from 'src/pages/finances/DialogNewFinance.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Finances',
  components: {
    FilterPanel,
    TablePanel,
    MonthPicker,
    ButtonNew,
    ButtonSearch
  },
  data () {
    return {
      rows: null,
      billsColumns: myBillsColumns(),
      billName: ref(''),
      tagName: ref(''),
      selectDate: ref(moment().format('MM/YYYY').toString())
    }
  },
  methods: {
    onSearchClick (showMessage = true) {
      showLoading(LoadingStatus.ON);
      (this as any).$store.dispatch('bills/getBillsList', {
        month: this.selectDate.toString().split('/')[0],
        year: this.selectDate.toString().split('/')[1],
        description: this.billName,
        tag: this.tagName,
        showMessage
      })
    },
    openDialogNewBill () {
      this.$q
        .dialog({
          component: DialogNewFinance,
          persistent: true,
          cancel: true
        })
        .onOk((newBill: any) => {
          (this as any).$store.dispatch('bills/registerNewBill', newBill)
        })
    },
    onDateUpdateEvent (newValue) {
      this.selectDate = newValue
    },
    onRemoveBill (row) {
      this.$q
        .dialog({
          title: i18n.global.t('msg.deleteBill.title'),
          message: i18n.global.t('msg.deleteBill.message'),
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          (this as any).$store.dispatch('bills/removeBill', row.id)
        })
    }
  },
  computed: {
    computedBills () {
      return (this as any).$store.getters['bills/getBills']
    }
  },
  watch: {
    computedBills (newValue) {
      this.rows = null
      this.rows = newValue
    }
  }
})
</script>
