<template>
  <q-table
    header-class="text-primary"
    :title="title"
    title-class="text-primary"
    :rows="rows"
    :columns="columns"
    :filter="filter"
    selection="single"
    pagination-label="$t('components.pagRecordsPerPage')"
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" :placeholder="$t('components.searchInTable')">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
  <!--v-model:selected="selected"-->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    return {
      filter: ref('')
    }
  }
})
</script>
