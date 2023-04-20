<template>
  <q-page padding>
    <!--Filter panel-->
    <filter-panel>
      <template #filter-content>
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
      </template>
      <template #filter-buttons>
        <button-new @click="openDialogNewBill()"/>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>

    <br>
    <table-panel
      :title="$t('view.finance.lbl.title')"
      :columns="sellColumns || []"
      :rows="rows || []"
      :show-button-edit="true"
      :show-button-remove="true"
      :show-button-pay="false"
    ></table-panel>
  </q-page>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  defineComponent
} from 'vue'
import { useStore } from 'vuex'

import { preSellColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import ButtonNew from 'src/components/ButtonNew.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import DialogNewPresell from './DialogNewPresell.vue'

export default defineComponent({
  name: 'PreSell',
  components: {
    FilterPanel,
    TablePanel,
    ButtonNew,
    ButtonSearch
  },
  data () {
    const store = useStore()
    const sellColumns = preSellColumns()

    const onSearchClick = () => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsList', {})
    }

    const rows = computed(() => store.getters['bills/getBills'])

    watch(rows, () => {
      showLoading(LoadingStatus.OFF)
    })

    return {
      rows,
      sellColumns,
      billName: ref(''),
      tagName: ref(''),
      onSearchClick,
      store
    }
  },
  methods: {
    openDialogNewBill () {
      this.$q
        .dialog({
          component: DialogNewPresell,
          persistent: true,
          cancel: true
        })
        .onOk((newBill: any) => {
          this.store.dispatch('bills/registerNewBill', newBill)
        })
    }//,
    // onDateUpdateEvent (newValue) {
    //   this.selectDate = newValue
    // }
  }
})
</script>
