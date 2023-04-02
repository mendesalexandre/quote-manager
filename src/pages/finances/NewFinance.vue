<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        :name="1"
        :title="$t('view.newFinance.lbl.firstTitle')"
        icon="settings"
        :done="step > 1"
      >
        <div class="q-gutter-md">
          <input-required v-model="billName" :label="$t('view.newFinance.lbl.billName')" />
          <date-picker :v-model="dueDate" :label="$t('view.newFinance.lbl.dueDate')"/>
          <input-required v-model="description" :label="$t('view.newFinance.lbl.mail')" />
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="step = 2"
            color="primary"
            :label="$t('view.newFinance.lbl.continue')"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title="$t('view.newFinance.lbl.secondTitle')"
        icon="create_new_folder"
        :done="step > 2"
      >
        <div class="q-gutter-md">
          <input-required v-model="password" :label="$t('view.newFinance.lbl.password')" />
          <input-required
            v-model="repeatPass"
            :label="$t('view.newFinance.lbl.repeatPass')"
          />
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="step = 3"
            color="primary"
            :label="$t('view.newFinance.lbl.continue')"
          />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            :label="$t('view.newFinance.lbl.back')"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" :title="$t('view.newFinance.lbl.thirdTitle')" icon="add_comment">
        <div class="q-gutter-md"></div>

        <q-stepper-navigation>
          <q-btn
            color="primary"
            @click="onOkClick()"
            :label="$t('view.newFinance.lbl.finish')"
          />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            :label="$t('view.newFinance.lbl.back')"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { useStore } from 'vuex'

import { NewFinance } from 'src/models/BillModel'
import DatePicker from 'src/components/DatePicker.vue'

export default defineComponent({
  name: 'NewFinance',
  compoents: {
    DatePicker
  },
  data () {
    const store = useStore()
    const user = store.getters['user/getUser']
    return {
      confirm: false,
      step: ref(1),
      billName: ref(''), // Login
      dueDate: ref(''),
      description: ref(''),
      value: ref(0.0),
      quantityAmount: ref(1),
      tags: ref([]),
      isCashEntry: ref(false),
      isBillPayed: ref(false),
      isToDivideValue: ref(false),
      user
    }
  },
  emits: {
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick: function () {
      const newUser = new NewFinance(
        this.user.userName,
        this.billName,
        this.dueDate,
        this.description,
        this.value,
        this.quantityAmount,
        this.tags,
        this.isCashEntry,
        this.isBillPayed,
        this.isToDivideValue
      )
      console.log('newUser from dialog: ', newUser)
      this.$emit('ok', newUser)
      this.$emit('hide')
      // this.$refs.dialog.ok(newUser)
      // onDialogOK(newUser)
    },
    onCancelClick () {
      this.$refs.dialog.cancel()
    },
    show () {
      this.$refs.dialog.show()
    }
  }
})
</script>
