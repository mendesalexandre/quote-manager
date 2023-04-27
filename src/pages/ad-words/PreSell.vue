<template>
  <q-page padding>
    <!--Filter panel-->
    <filter-panel>
      <template #filter-content>
        <!-- Product name -->
        <q-input filled v-model="productName" :label="$t('view.presell.lbl.productName')">
          <template v-slot:prepend>
            <q-icon name="mdi-text-box-outline" />
          </template>
        </q-input>
        <!-- Status -->
        <q-select outlined v-model="status" :options="statusOptions" :label="$t('view.presell.lbl.status')">
        <template v-slot:prepend>
            <q-icon name="mdi-tag" />
          </template>
        </q-select>
      </template>
      <template #filter-buttons>
        <button-new @click="openDialogNewPresell()"/>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>

    <br>
    <table-panel
      :title="$t('view.presell.lbl.title')"
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
  defineComponent
} from 'vue'
import { useStore } from 'vuex'

import { preSellColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'
import i18n from 'src/util/i18n'
import { PresellStatus } from 'src/models/PresellModel'

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
      const status = getStatusEnum(this.status)
      store.dispatch('presell/getPresellList', {
        productName: this.productName,
        status: status?.toString()
      })
    }

    function getStatusEnum (status) {
      switch (status.toUpperCase().trim()) {
        case i18n.global.t('view.presell.opt.all').toUpperCase().trim(): return PresellStatus.ALL
        case i18n.global.t('view.presell.opt.toCreate').toUpperCase().trim(): return PresellStatus.TO_BE_CREATED
        case i18n.global.t('view.presell.opt.toUpdate').toUpperCase().trim(): return PresellStatus.TO_BE_UPDATED
        case i18n.global.t('view.presell.opt.creating').toUpperCase().trim(): return PresellStatus.CREATING
        case i18n.global.t('view.presell.opt.available').toUpperCase().trim(): return PresellStatus.CREATED
      }
    }

    const rows = ref(computed(() => store.getters['presell/getPresells']))

    return {
      rows,
      sellColumns,
      statusOptions: [
        i18n.global.t('view.presell.opt.all'),
        i18n.global.t('view.presell.opt.toCreate'),
        i18n.global.t('view.presell.opt.toUpdate'),
        i18n.global.t('view.presell.opt.creating'),
        i18n.global.t('view.presell.opt.available')
      ],
      productName: ref(''),
      status: ref(i18n.global.t('view.presell.opt.all')),
      onSearchClick,
      store
    }
  },
  methods: {
    openDialogNewPresell () {
      this.$q
        .dialog({
          component: DialogNewPresell,
          persistent: true,
          cancel: true
        })
        .onOk((newPresell: any) => {
          console.log('newPresell: ', newPresell)
          this.store.dispatch('presell/registerNewPresell', newPresell)
        })
    }//,
    // onDateUpdateEvent (newValue) {
    //   this.selectDate = newValue
    // }
  }
})
</script>
