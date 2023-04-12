<template>
  <q-table
    header-class="text-primary"
    :title="title"
    title-class="text-primary"
    :rows="rows || []"
    :columns="columns || []"
    :filter="filter"
    :grid="changeToGrid"
    :rows-per-page-label="$t('components.lbl.pagRecordsPerPage')"
    :no-data-label="$t('components.lbl.noDataLabel')"
    :no-results-label="$t('components.lbl.noResultsLabel')"
    row-key="id"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          class="text-bold text-secondary"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <template v-slot:top-right="props">
      <q-input outlined dense debounce="300" v-model="filter" color="primary" :placeholder="$t('components.lbl.searchInTable')">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>

      <q-btn
        flat
        round
        dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
        color="secondary"
      >
        <q-tooltip>{{ props.inFullscreen ? $t('components.lbl.tableFullscreen') : $t('components.lbl.tableToggleFullscreen') }}</q-tooltip>
      </q-btn>

      <q-btn
        flat
        round
        dense
        :icon="changeToGrid ? 'list' : 'grid_on'"
        @click="changeToGrid = !changeToGrid"
        color="secondary"
      >
        <q-tooltip>{{changeToGrid ? $t('components.tip.list') : $t('components.tip.grid')}}</q-tooltip>
      </q-btn>

      <div class="q-pa-sm q-gutter-sm"></div>
    </template>

    <!--Buttons for table view-->
    <template v-slot:body-cell-actions="props">
      <q-td v-if="!changeToGrid" :props="props">
        <q-btn v-if="showButtonEdit" dense round flat color="secondary" icon="mdi-pencil-outline" @click="onEditClick(props)">
          <q-tooltip>{{ $t("components.tip.edit") }}</q-tooltip>
        </q-btn>
        <q-btn v-if="showButtonRemove" dense round flat color="secondary" icon="mdi-delete-outline" @click="onRemoveClick(props)">
          <q-tooltip>{{ $t("components.tip.remove") }}</q-tooltip>
        </q-btn>
        <q-btn v-if="showButtonPay" dense round flat color="secondary" icon="mdi-cash-check" @click="onPayClick(props)">
          <q-tooltip>{{ $t("components.tip.pay") }}</q-tooltip>
        </q-btn>
      </q-td>
    </template>

    <!--Buttons for grid view-->
    <template v-slot:item="props">
      <div
        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
        :style="props.selected ? 'transform: scale(0.95);' : ''"
      >
        <q-card>
          <q-card-section>
            <q-chip outline color="primary" text-color="white" icon="event">
              {{ props.row.name }}
            </q-chip>
          </q-card-section>
          <q-separator ></q-separator>
          <q-list dense>
            <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
              <template v-if="col.name !== 'actions'">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </template>
              <q-item-section v-else>
                <div class="row justify-center">
                  <q-btn v-if="showButtonEdit" dense round flat color="secondary" icon="mdi-pencil-outline" @click="onEditClick(props)">
                    <q-tooltip>{{ $t("components.tip.edit") }}</q-tooltip>
                  </q-btn>
                  <q-btn v-if="showButtonRemove" dense round flat color="secondary" icon="mdi-delete-outline" @click="onRemoveClick(props)">
                    <q-tooltip>{{ $t("components.tip.remove") }}</q-tooltip>
                  </q-btn>
                  <q-btn v-if="showButtonPay" dense round flat color="secondary" icon="mdi-cash-check" @click="onPayClick(props)">
                    <q-tooltip>{{ $t("components.tip.pay") }}</q-tooltip>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </template>

  </q-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'TablePanel',
  props: {
    title: {
      type: String,
      required: false
    },
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    /**
     * Enable or disable button for editing
     */
    showButtonEdit: {
      type: Boolean,
      required: true
    },
    /**
     * Enable or disable button for removing
     */
    showButtonRemove: {
      type: Boolean,
      required: true
    },
    /**
     * Enable or disable button for pay the bill
     */
    showButtonPay: {
      type: Boolean,
      required: true
    }
  },
  data () {
    const $q = useQuasar()
    return {
      selected: ref([]),
      changeToGrid: ref($q.platform.is.mobile),
      filter: ref('')
    }
  },
  methods: {
    onEditClick (props: any) {
      this.$emit('on-edit-click-event', props.row)
    },
    onRemoveClick (props: any) {
      this.$emit('on-remove-click-event', props.row)
    },
    onPayClick (props: any) {
      this.$emit('on-pay-click-event', props.row)
    }
  }
})
</script>
