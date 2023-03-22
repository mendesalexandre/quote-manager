<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page padding>
    <!-- content -->
    <filter-data v-show="true"></filter-data>

    <q-table
      header-class="text-primary"
      title="Contas próximas do vencimento"
      title-class="text-primary"
      :rows="rows"
      :columns="columns"
      selection="single"
      v-model:selected="selected"
    />
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watchEffect,
  onMounted
} from 'vue'
import FilterData from 'src/components/FilterData.vue'
import { useStore } from 'vuex'
import { closeToOverdueColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

export default defineComponent({
  name: 'CloseToOverdue',
  components: {
    FilterData
  },
  data () {
    onMounted(() => {
      showLoading(LoadingStatus.ON)
    })

    const data = ref(true)
    const store = useStore()
    const temp = computed(() => store.getters['bills/getBillsCloseToOverdue'])
    const columns = closeToOverdueColumns()
    let rows = temp.value

    watchEffect(async () => {
      if (temp.value !== undefined) {
        rows = temp.value
        showLoading(LoadingStatus.OFF)
      }
    })

    return {
      data,
      rows,
      columns,
      selected: ref([])
    }
  }
})
</script>
