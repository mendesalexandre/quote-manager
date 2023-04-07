<template>
  <q-input
    filled
    label="Mês/Ano"
    mask="##/####"
    fill-mask="##/####"
    v-model="currentDate"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
          :breakpoint="0"
        >
          <q-date
            v-model="currentDate"
            years-in-month-view
            default-view="Months"
            emit-immediately
            @update:model-value="onDateUpdate"
            :key="dpKey"
            minimal
            mask="MM/YYYY"
          >
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import moment from 'moment'

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
    const dpKey = ref('')
    return {
      billName: ref(''),
      tagName: ref(''),
      currentDate,
      qDateProxy,
      dpKey
    }
  },
  methods: {
    onDateUpdate (value: any, reason: any) {
      if (reason === 'month') {
        this.dpKey = value
        this.currentDate = value
        this.qDateProxy.hide()
        this.$emit('input', this.dpKey)
      }
    },
    emitValueUpdated () {
      this.$emit('input', this.dpKey)
    }
  }
})
</script>
