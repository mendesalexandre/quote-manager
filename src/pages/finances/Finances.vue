<template>
  <q-page padding>

    <!--Filter panel-->
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="mdi-filter-outline"
        :label="$t('components.lbl.filterTitle')"
        :caption="$t('components.lbl.filterCaption')"
        header-class="text-primary"
      >
        <q-separator/>
        <div></div>
        <q-card>
          <q-card-section>

            <div class="q-pa-md row items-start q-gutter-md">
              <!-- Bill name -->
              <q-input filled v-model="billName" :label="$t('view.finance.lbl.billName')">
                <template v-slot:prepend>
                  <q-icon name="mdi-text-box-outline" />
                </template>
              </q-input>
              <!-- Tag name -->
              <q-input filled v-model="tagName" :label="$t('view.finance.lbl.tagName')">
                <template v-slot:prepend>
                  <q-icon name="mdi-tag" />
                </template>
              </q-input>
              <!-- Date picker -->
              <month-picker @input="onDateUpdateEvent"></month-picker>
            </div>
            <!-- Action buttons -->
            <div>
              <button-new @click="openDialogNewBill()"/>
              <button-search @click="onSearchClick()"/>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <br>
    <table-panel
      :title="$t('view.finance.lbl.title')"
      :columns="billsColumns || []"
      :rows="rows || []"
      :show-button-edit="true"
      :show-button-remove="true"
      :show-button-pay="true"
    ></table-panel>
  </q-page>

</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  watchEffect,
  defineComponent
} from 'vue'
import { useStore } from 'vuex'
import { myBillsColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

import TablePanel from 'src/components/TablePanel.vue'
import ButtonNew from 'src/components/ButtonNew.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import MonthPicker from 'src/components/MonthPicker.vue'

import NewFinance from 'src/pages/finances/NewFinance.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Finances',
  components: {
    TablePanel,
    MonthPicker,
    ButtonNew,
    ButtonSearch
  },
  data () {
    const store = useStore()
    const billsColumns = myBillsColumns()

    const onSearchClick = () => {
      // console.log('selectDate: ', this.selectDate)
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsList', {
        month: this.selectDate.toString().split('/')[0],
        year: this.selectDate.toString().split('/')[1],
        description: this.billName,
        tag: this.tagName
      })
    }

    const rows = computed(() => store.getters['bills/getBills'])

    watch(rows, () => {
      showLoading(LoadingStatus.OFF)
    })

    watchEffect(async () => {
      if (rows.value === undefined) showLoading(LoadingStatus.OFF)
    })

    return {
      rows,
      billsColumns,
      billName: ref(''),
      tagName: ref(''),
      selectDate: ref(''),
      onSearchClick,
      store
    }
  },
  methods: {
    openDialogNewBill () {
      this.$q
        .dialog({
          component: NewFinance,
          persistent: true,
          cancel: true
        })
        .onOk((newBill: any) => {
          this.store.dispatch('bills/registerNewBill', newBill)
        })
    },
    onDateUpdateEvent (newValue) {
      this.selectDate = newValue
    },
    registerNewBill () {

    }
  }
})
</script>
