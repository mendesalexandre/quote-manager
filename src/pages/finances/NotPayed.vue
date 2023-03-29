<template>
  <q-page padding>
    <filter-panel v-show="true"></filter-panel>
    <br>
    <table-panel
      :title="$t('view.notPaid.lbl.title')"
      :columns="billsColumns"
      :rows="rows"
      :show-button-edit="false"
      :show-button-remove="false"
      :show-button-pay="true"
      :action-pay="onPayClick()"
    >
    </table-panel>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  watchEffect,
  onMounted
} from 'vue'
import FilterPanel from 'src/components/FilterPanel.vue'
import TablePanel from 'src/components/TablePanel.vue'
import { useStore } from 'vuex'
import { notPaidColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'
import { notifySuccess } from 'src/util/Notification'

export default defineComponent({
  name: 'NotPayed',
  components: {
    FilterPanel,
    TablePanel
  },
  data () {
    onMounted(() => {
      // showLoading(LoadingStatus.ON)
    })

    const store = useStore()
    const rows = computed(() => store.getters['bills/getBillsNotPayed'])
    const billsColumns = notPaidColumns()

    return {
      rows,
      billsColumns
    }
  },
  methods: {
    onEditClick () {
      notifySuccess('teste edição')
    },
    onRemoveClick () {
      notifySuccess('teste remoção')
    },
    onPayClick () {
      notifySuccess('teste pagamento')
    }
  }
})
</script>
