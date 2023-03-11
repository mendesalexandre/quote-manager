<template>
  <q-input filled label="Mês/Ano" v-model="currentDate" mask="##/####" fill-mask="##/####">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale" :breakpoint="0">
          <q-date v-model="currentDate" years-in-month-view default-view="Months" emit-immediately
            @update:model-value="onUpdateMv"
            :key="dpKey"
            minimal mask="MM/YYYY"
          ></q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import moment from 'moment'
import i18n from 'src/util/i18n'

export default defineComponent({
  name: 'MonthPicker',
  props: {
    dio: {
      type: String,
      required: false
    }
  },
  setup () {
    const currentDate = ref(moment().format('MM/YYYY').toString())
    const qDateProxy = ref()
    const dpKey = ref(Date.now())
    const displayDate = computed(() => currentDate.value ?? i18n.global.t('controls.monthPicker.title'))
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
