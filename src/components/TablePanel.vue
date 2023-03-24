<template>
  <q-table
    header-class="text-primary"
    :title="title"
    title-class="text-primary"
    :rows="rows"
    :columns="columns"
    :filter="filter"
    :grid="changeToGrid"
    :rows-per-page-label="$t('components.lbl.pagRecordsPerPage')"
    :no-data-label="$t('components.lbl.noDataLabel')"
    :no-results-label="$t('components.lbl.noResultsLabel')"
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
        <q-tooltip>{{ props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen" }}</q-tooltip>
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

    <!--Buttons for list/table view-->
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <!--<q-btn dense round flat color="grey" icon="edit"></q-btn>--> <!-- @click="editRow(props)"-->
        <!--<q-btn dense round flat color="grey" icon="delete"></q-btn>--> <!--@click="deleteRow(props)"-->
        <!-- <q-btn dense round flat  color="secondary" icon="mdi-file-plus-outline">
          <q-tooltip>{{ $t("components.tip.new") }}</q-tooltip>
        </q-btn> -->
        <q-btn dense round flat color="secondary" icon="mdi-pencil-outline">
          <q-tooltip>{{ $t("components.tip.edit") }}</q-tooltip>
        </q-btn>
        <q-btn dense round flat color="secondary" icon="mdi-delete-outline">
          <q-tooltip>{{ $t("components.tip.remove") }}</q-tooltip>
        </q-btn>
      </q-td>
    </template>

    <!--Buttons for grid view-->
    <template #body-cell-status="props">
      <component :is="changeToGrid ? 'div' : 'q-td'" :props="props">
        <q-chip
          :color="props.row.status === 'Active' ? 'green': 'red'"
          text-color="white"
          dense
          class="text-weight-bolder"
          square
        >{{props.row.status}}</q-chip>
      </component>
    </template>
    <template #body-cell-action="props">
      <component :is="changeToGrid ? 'div' : 'q-td'" :props="props">
        <!--<q-btn dense flat color="primary" field="edit" icon="edit"></q-btn> @click="editItem(props.row)"-->
        <q-btn dense flat color="secondary" icon="mdi-delete-outline">
          <q-tooltip>{{ $t("components.tip.remove") }}</q-tooltip>
        </q-btn>
        <q-btn dense flat color="secondary" icon="mdi-delete-outline">
          <q-tooltip>{{ $t("components.tip.remove") }}</q-tooltip>
        </q-btn>
      </component>
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
    }
  },
  data () {
    const $q = useQuasar()
    return {
      selected: ref([]),
      changeToGrid: ref($q.platform.is.mobile),
      filter: ref('')
    }
  }
})
</script>
