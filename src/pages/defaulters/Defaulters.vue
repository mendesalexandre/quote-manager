<template>
  <q-page padding class="bg-primary">

    <!--Filter panel-->
    <filter-panel>
      <template #filter-content>
        <!-- Defaulter name -->
        <q-input rounded outlined v-model="defaulterName" :label="$t('view.defaulter.lbl.defaulterName')">
          <template v-slot:prepend>
            <q-icon name="mdi-text-box-outline" />
          </template>
        </q-input>
        <!-- Description -->
        <q-input rounded outlined v-model="description" :label="$t('components.lbl.desc')">
          <template v-slot:prepend>
            <q-icon name="mdi-tag" />
          </template>
        </q-input>
      </template>
      <template #filter-buttons>
        <button-new @click="openDialogNewDefaulter()"/>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>

    <br>
    <expand-table-panel
      :title="$t('view.defaulter.lbl.title')"
      :columns="defColumns"
      :child-columns="defChildColumns"
      :rows="rows"
      :show-button-add="true"
      :show-button-subtract="true"
      :show-button-remove="true"
      @on-add-click-event="onAddDebt"
      @on-subtract-click-event="onSubDebt"
      @on-remove-click-event="onRemoveDefaulter"
    ></expand-table-panel>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed
} from 'vue'

import { defaultersColumns, defaultersChildColumns } from 'src/models/ColumnsModel'
import { showLoading, LoadingStatus } from 'src/util/Loading'
import i18n from 'src/util/i18n'

import FilterPanel from 'src/components/FilterPanel.vue'
import ExpandTablePanel from 'src/components/ExpandTablePanel.vue'
import ButtonNew from 'src/components/ButtonNew.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'

import DialogNewDefaulter from 'src/pages/defaulters/DialogNewDefaulter.vue'
import DialogAddDebt from './DialogAddDebt.vue'
import DialogSubDebtVue from './DialogSubDebt.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Defaulters',
  components: {
    FilterPanel,
    ExpandTablePanel,
    ButtonNew,
    ButtonSearch
  },
  data () {
    const defColumns = defaultersColumns()
    const defChildColumns = defaultersChildColumns()

    return {
      rows: null,
      defColumns,
      defChildColumns,
      defaulterName: ref(''),
      description: ref('')
    }
  },
  methods: {
    onSearchClick (showMessage = true) {
      showLoading(LoadingStatus.ON)
      return (this as any).$store.dispatch('defaulter/getDefaultersList', {
        name: this.defaulterName,
        desc: this.description,
        showMessage
      })
    },
    openDialogNewDefaulter () {
      this.$q
        .dialog({
          component: DialogNewDefaulter,
          persistent: true,
          cancel: true
        })
        .onOk((newDefaulter: any) => {
          (this as any).$store.dispatch('defaulter/registerNewDefaulter', newDefaulter)
        })
    },
    onAddDebt (row) {
      this.$q
        .dialog({
          component: DialogAddDebt,
          persistent: true,
          cancel: true
        })
        .onOk((newDebt: any) => {
          newDebt.defaulterId = row.id;
          (this as any).$store.dispatch('defaulter/addDebt', newDebt)
          this.onSearchClick(false)
        })
    },
    onSubDebt (row) {
      this.$q
        .dialog({
          component: DialogSubDebtVue,
          persistent: true,
          cancel: true
        })
        .onOk((newDebt: any) => {
          newDebt.id = row.id;
          (this as any).$store.dispatch('defaulter/subtractDebt', newDebt)
        })
    },
    onRemoveDefaulter (row) {
      this.$q
        .dialog({
          title: i18n.global.t('msg.delete.title'),
          message: i18n.global.t('msg.delete.message'),
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          (this as any).$store.dispatch('defaulter/removeDefaulter', row.id)
        })
    }
  },
  computed: {
    computedDefaulters () {
      return (this as any).$store.getters['defaulter/getDefaulters']
    }
  },
  watch: {
    computedDefaulters (newValue) {
      this.rows = null
      this.rows = newValue
    }
  }
})
</script>
