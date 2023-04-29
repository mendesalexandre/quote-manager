<template>
  <q-table
    flat bordered
    header-class="text-primary"
    :title="title"
    title-class="text-primary"
    :rows="rows || []"
    :columns="columns || []"
    row-key="name"
  >
    <!-- Header information-->
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th auto-width />
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <!--Expandable cells -->
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td auto-width>
          <q-btn size="sm" color="primary" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
        </q-td>
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          <!--Buttons for table view-->
          <div v-if="col.name == 'actions'">
            <q-btn v-if="showButtonAdd" dense round flat color="secondary" icon="mdi-plus-circle-outline" @click="onAddClick(props)">
              <q-tooltip>{{ $t("components.tip.add") }}</q-tooltip>
            </q-btn>
            <q-btn v-if="showButtonSubtract" dense round flat color="secondary" icon="mdi-minus-circle-outline" @click="onSubtractClick(props)">
              <q-tooltip>{{ $t("components.tip.subtract") }}</q-tooltip>
            </q-btn>
            <q-btn v-if="showButtonRemove" dense round flat color="secondary" icon="mdi-delete-outline" @click="onRemoveClick(props)">
              <q-tooltip>{{ $t("components.tip.remove") }}</q-tooltip>
            </q-btn>
          </div>
          <div v-else>
            {{ col.value }}
          </div>
        </q-td>
      </q-tr>

      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%" v-if="props.row.payments != null && props.row.payments.length > 0">
          <q-table
            hide-header
            hide-bottom
            :rows="props.row.payments"
            :columns="childColumns"
          >
            <!--Status cell with q-chip -->
            <template v-slot:body-cell-type="props">
              <!-- class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"-->
              <q-td>
                <q-chip
                  text-color="white"
                  :label="translateType(props.row.type)"
                  :color="getTypeColor(props.row.type)"
                />
              </q-td>
            </template>
          </q-table>
        </q-td>
        <q-td colspan="100%" v-else>
          {{ $t('components.lbl.noDataLabel') }}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import i18n from 'src/util/i18n'

export default defineComponent({
  name: 'ExpandTablePanel',
  props: {
    title: {
      type: String,
      required: true
    },
    rows: {
      type: Array,
      required: false
    },
    columns: {
      type: Object,
      required: true
    },
    childColumns: {
      type: Object,
      required: true
    },
    /**
     * Enable or disable button for adding new value
     */
    showButtonAdd: {
      type: Boolean,
      required: true
    },
    /**
     * Enable or disable button for subtracting value
     */
    showButtonSubtract: {
      type: Boolean,
      required: true
    },
    /**
     * Enable or disable button for remove/delete defaulter.
     */
    showButtonRemove: {
      type: Boolean,
      required: true
    }
  },
  data () {
    const $q = useQuasar()
    return {
      selected: ref([]),
      changeToGrid: ref($q.platform.is.mobile),
      filter: ref(''),
      i18n
    }
  },
  methods: {
    onAddClick (props: any) {
      this.$emit('on-add-click-event', props.row)
    },
    onSubtractClick (props: any) {
      this.$emit('on-subtract-click-event', props.row)
    },
    onRemoveClick (props: any) {
      this.$emit('on-remove-click-event', props.row)
    },
    translateType (type: string) {
      if (type.toUpperCase().trim() === 'DEBTOR') return this.i18n.global.t('view.defaulter.opt.debtor')
      else return this.i18n.global.t('view.defaulter.opt.creditor')
    },
    getTypeColor (type) {
      if (type.toUpperCase().trim() === 'DEBTOR') return 'negative'
      else return 'positive'
    }
  }
})
</script>
