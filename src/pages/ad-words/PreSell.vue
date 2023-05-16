<template>
  <q-page padding class="bg-primary">
    <!--Filter panel-->
    <filter-panel>
      <template #filter-content>
        <!-- Product name -->
        <q-input rounded v-model="productName" :label="$t('view.presell.lbl.productName')">
          <template v-slot:prepend>
            <q-icon name="mdi-text-box-outline" />
          </template>
        </q-input>
        <!-- Status -->
        <q-select rounded v-model="status" :options="statusOptions" :label="$t('view.presell.lbl.status')">
          <template v-slot:prepend>
            <q-icon name="mdi-tag" />
          </template>
        </q-select>
      </template>
      <template #filter-buttons>
        <button-new to="/presell/new"/>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>

    <br>
    <table-panel
      :title="$t('view.presell.lbl.title')"
      :columns="sellColumns"
      :rows="rows"
      :show-button-copy="true"
      :show-button-edit="true"
      :show-button-remove="true"
      :show-button-pay="false"
      @on-copy-click-event="onCopyPresell"
      @on-edit-click-event="onEditPresell"
      @on-remove-click-event="onRemovePresell"
    ></table-panel>
  </q-page>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue'

import { preSellColumns } from 'src/models/ColumnsModel'
import { showLoading, LoadingStatus } from 'src/util/Loading'
import i18n from 'src/util/i18n'
import { notifySuccess, notifyError } from 'src/util/Notification'

import { PresellStatus } from 'src/models/PresellModel'

import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import ButtonNew from 'src/components/ButtonNew.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'

export default defineComponent({
  name: 'PreSell',
  components: {
    FilterPanel,
    TablePanel,
    ButtonNew,
    ButtonSearch
  },
  data () {
    return {
      rows: null,
      sellColumns: preSellColumns(),
      statusOptions: [
        i18n.global.t('view.presell.opt.all'),
        i18n.global.t('view.presell.opt.toCreate'),
        i18n.global.t('view.presell.opt.toUpdate'),
        i18n.global.t('view.presell.opt.creating'),
        i18n.global.t('view.presell.opt.available')
      ],
      productName: ref(''),
      status: ref(i18n.global.t('view.presell.opt.all'))
    }
  },
  methods: {
    onSearchClick (showMessage = true) {
      showLoading(LoadingStatus.ON)
      const status = this.getStatusEnum(this.status);
      (this as any).$store.dispatch('presell/getPresellList', {
        productName: this.productName,
        status: status?.toString(),
        showMessage
      })
    },
    getStatusEnum (status) {
      switch (status.toUpperCase().trim()) {
        case i18n.global.t('view.presell.opt.toCreate').toUpperCase().trim(): return PresellStatus[0].toString()
        case i18n.global.t('view.presell.opt.toUpdate').toUpperCase().trim(): return PresellStatus[1].toString()
        case i18n.global.t('view.presell.opt.creating').toUpperCase().trim(): return PresellStatus[2].toString()
        case i18n.global.t('view.presell.opt.available').toUpperCase().trim(): return PresellStatus[3].toString()
        case i18n.global.t('view.presell.opt.all').toUpperCase().trim(): return PresellStatus[4].toString()
      }
    },
    onCopyPresell (row: any) {
      if (row.finalUrl) {
        navigator.clipboard.writeText(row.finalUrl)
        notifySuccess(i18n.global.t('msg.presell.copySuccess'))
      } else notifyError(i18n.global.t('msg.presell.copyError'))
    },
    onEditPresell (row: any) {
      (this as any).$store.dispatch('presell/editPresell', row);
      (this as any).$router.push({ name: 'New pre-sell', query: { edit: true } })
    },
    onRemovePresell (row: any) {
      this.$q
        .dialog({
          title: i18n.global.t('msg.deletePresell.title'),
          message: i18n.global.t('msg.deletePresell.message'),
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          (this as any).$tore.dispatch('presell/removePresell', row.id)
        })
        .onCancel(() => { })
    }
  },
  computed: {
    computedPages () {
      return (this as any).$store.getters['presell/getPresells']
    }
  },
  watch: {
    computedPages (newValue) {
      this.rows = null
      this.rows = newValue
    }
  }
})
</script>
