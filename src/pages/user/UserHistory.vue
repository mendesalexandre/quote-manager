<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-card class="q-gutter-md">
      <q-table
        header-class="text-primary"
        title-class="text-primary"
        :rows="rows || []"
        :columns="historyColumns || []"
        :grid="changeToGrid"
        :rowsPerPageOptions="[0]"
      />
      <q-separator></q-separator>
      <q-btn
        push
        @click="onOkClick()"
        class="bg-white text-primary q-ml-sm"
        :label="$t('components.lbl.buttonReturn')"
      />
      <q-space></q-space>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {
  onMounted,
  computed,
  ref,
  defineComponent
} from 'vue'
import { useStore } from 'vuex'
import { useQuasar, useDialogPluginComponent } from 'quasar'

import { userHistoryColumns } from 'src/models/ColumnsModel'

export default defineComponent({
  name: 'UserHistory',
  data () {
    const store = useStore()
    const historyColumns = userHistoryColumns()
    const $q = useQuasar()

    onMounted(() => {
      store.dispatch('user/queryUserHistory')
    })

    const rows = computed(() => store.getters['user/getUserHistory'])

    return {
      rows,
      historyColumns,
      confirm: false,
      changeToGrid: ref($q.platform.is.mobile)
    }
  },
  emits: {
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick () {
      this.$emit('ok', null)
      this.$emit('hide')
    }
  }
})
</script>
