<template>
  <q-page padding>
    <!-- content -->
    <filter-panel v-show="true"></filter-panel>
  </q-page>

</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import moment from 'moment'
import FilterPanel from 'src/components/FilterPanel.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Finances',
  components: {
    FilterPanel
  },
  setup () {
    const currentDate = ref(moment().format('MM/YYYY').toString())
    const qDateProxy = ref()
    const dpKey = ref(Date.now())
    const displayDate = computed(() => currentDate.value ?? 'Escolha o mês')
    function onUpdateMv (v: any, r: any) {
      dpKey.value = Date.now()
      r === 'month' && qDateProxy.value.hide()
    }
    return {
      billName: ref(''),
      tagName: ref(''),
      currentDate,
      displayDate,
      qDateProxy,
      dpKey,
      onUpdateMv
    }
  }
})
</script>
