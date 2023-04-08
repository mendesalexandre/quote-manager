<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <q-input
      filled
     :label="$t('components.lbl.datePicker')"
      mask="##/##/####"
      fill-mask="##/##/####"
      v-model="selectedDate"
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
              v-model="selectedDate"
              emit-immediately
              @update:model-value="onDateUpdate"
              :key="dpKey"
              minimal
              mask="DD/MM/YYYY"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup :label="$t('components.lbl.close')" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import moment from 'moment'

export default defineComponent({
  setup () {
    const selectedDate = ref(moment().format('DD/MM/YYYY').toString())
    const qDateProxy = ref()
    const dpKey = ref('')
    return {
      billName: ref(''),
      tagName: ref(''),
      selectedDate,
      qDateProxy,
      dpKey
    }
  },
  methods: {
    onDateUpdate (value: any, reason: any) {
      if (reason === 'add-day') {
        this.dpKey = value
        this.selectedDate = value
        this.qDateProxy.hide()
        this.$emit('input', this.dpKey)
      }
    }
  }
})
</script>
