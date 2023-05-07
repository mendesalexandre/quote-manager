<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        push
        :name="1"
        :title="$t('view.newDefAddValue.lbl.firstTitle')"
        icon="settings"
        :done="step > 1"
      >
        <div class="q-gutter-md">
          <input-required v-model="description" :label="$t('components.lbl.desc')"/>
          <input-required v-model="value" :label="$t('view.newDefAddValue.lbl.value')" type="number" mask="###"/>
          <!-- Type -->
          <q-select outlined v-model="typeSelected" :options="typeOptions" :label="$t('view.newDefAddValue.lbl.type')">
            <template v-slot:prepend>
              <q-icon name="mdi-tag" />
            </template>
          </q-select>
          <!-- Pay in installments -->
          <q-checkbox v-model="payByInstallments" :label="$t('view.newDefAddValue.lbl.payByInstallments')" />
          <input-required v-if="payByInstallments" v-model="quantity" :label="$t('view.newDefAddValue.lbl.quantity')"/>
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
import { defineComponent, ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import i18n from 'src/util/i18n'
import { DefaulterAddDebt, DefDebtType } from 'src/models/DefaulterModel'
import InputRequired from 'src/components/InputRequired.vue'

export default defineComponent({
  name: 'DialogAddDebt',
  components: {
    InputRequired
  },
  data () {
    return {
      confirm: false,
      step: ref(1),
      description: ref(''),
      value: ref(0.0),
      typeSelected: ref(i18n.global.t('view.newDefAddValue.opt.debtor')),
      typeOptions: [
        i18n.global.t('view.newDefAddValue.opt.debtor'),
        i18n.global.t('view.newDefAddValue.opt.creditor')
      ],
      payByInstallments: ref(false),
      quantity: ref(0)
    }
  },
  emits: {
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick () {
      const newDefaulter: DefaulterAddDebt = {
        description: this.description,
        value: this.value,
        type: this.getStatusEnum(this.typeSelected),
        payByInstallments: this.payByInstallments,
        quantity: this.quantity
      }
      this.$emit('ok', newDefaulter)
      this.$emit('hide')
    },
    onExitClick () {
      (this as any).$refs.dialog.hide()
    },
    show () {
      (this as any).$refs.dialog.show()
    },
    getStatusEnum (status) {
      if (status.toUpperCase().trim() === 'DEVEDOR') return DefDebtType.DEBTOR
      else return DefDebtType.CREDITOR
    }
  }
})
</script>
