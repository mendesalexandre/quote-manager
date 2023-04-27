<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        push
        :name="1"
        :title="$t('view.newDefaulter.lbl.firstTitle')"
        icon="settings"
        :done="step > 1"
      >
        <div class="q-gutter-md">
          <input-required v-model="defaulterName" :label="$t('view.newDefaulter.lbl.defaulterName')"/>
        </div>

        <q-stepper-navigation>
          <q-btn
            push
            color="primary"
            @click="onOkClick()"
            :label="$t('components.lbl.buttonFinish')"
          />
          <q-btn
            push
            class="bg-white text-primary q-ml-sm"
            @click="onExitClick()"
            :label="$t('components.lbl.buttonExit')"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import { useDialogPluginComponent } from 'quasar'

import { DefaulterNew } from 'src/models/DefaulterModel'

import InputRequired from 'src/components/InputRequired.vue'

export default defineComponent({
  name: 'DialogNewDefaulter',
  components: {
    InputRequired
  },
  data () {
    return {
      confirm: false,
      step: ref(1),
      defaulterName: ref('')
    }
  },
  emits: {
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick () {
      const newDefaulter: DefaulterNew = {
        name: this.defaulterName,
        status: 'ACTIVE',
        totalValue: 0.0,
        payments: [],
        history: []
      }
      this.$emit('ok', newDefaulter)
      this.$emit('hide')
    },
    onExitClick () {
      (this as any).$refs.dialog.hide()
    },
    show () {
      (this as any).$refs.dialog.show()
    }
  }
})
</script>
