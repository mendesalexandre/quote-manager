<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        push
        :name="1"
        :title="$t('view.newFinance.lbl.firstTitle')"
        icon="settings"
        :done="step > 1"
      >
        <div class="q-gutter-md">
          <input-required v-model="billName" :label="$t('view.newFinance.lbl.billName')" />
          <date-picker :label="$t('view.newFinance.lbl.dueDate')" @input="onDateUpdateEvent"/>
          <q-select filled v-model="billType" :options="billTypeOptions" :label="$t('view.newFinance.lbl.billType')" />

          <div v-if="billType == $t('view.newFinance.opt.out')">
            <q-checkbox v-model="billPaid" :label="$t('view.newFinance.lbl.billPaid')" />
          </div>

          <input-required v-model="description" :label="$t('components.lbl.desc')" />
        </div>

        <q-stepper-navigation>
          <q-btn
            push
            @click="step = 2"
            color="primary"
            :label="$t('components.lbl.buttonContinue')"
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
          <input-required v-model="billValue" :label="$t('view.newFinance.lbl.value')" type="Number" mask="###.##"/>
          <input-required v-model="quantityAmount" :label="$t('view.newFinance.lbl.qtd')" step="1" type="Number" mask="##" pattern="[0-9]*"/>

          <div v-if="quantityAmount > 1">
            <q-checkbox v-model="isToDivideValue" :label="$t('view.newFinance.lbl.divideValue')" />
            <help-button @click="openHelpDialog()"></help-button>
          </div>

          <q-form style="min-width: 250px">
            <q-select
              color="primary"
              filled
              v-model="selectedTags"
              multiple
              :options="tagsList"
              use-chips
              stack-label
              :label="$t('view.newFinance.lbl.tags')"
            />
            <q-input
              filled
              v-model="newTag"
              :label="$t('view.newFinance.lbl.addNewTag')"
              @keyup.enter="onEnterKey()"
            />
            <q-space/>
            <q-btn
              push
              class="bg-white text-primary q-ml-sm"
              :label="$t('view.newFinance.lbl.reset')"
              @click="onResetClick()"
            />
          </q-form>
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
            @click="step = 1"
            class="bg-white text-primary q-ml-sm"
            :label="$t('components.lbl.buttonReturn')"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  computed
} from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { useStore } from 'vuex'
import moment from 'moment'

import { notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'
import convertDate from 'src/util/ConvertDateToDateTime'

import { NewFinance } from 'src/models/BillModel'
import { divideBillValue } from 'src/models/HelpModel'

import DatePicker from 'src/components/DatePicker.vue'
import InputRequired from 'src/components/InputRequired.vue'
import HelpButton from 'src/components/HelpButton.vue'

export default defineComponent({
  name: 'DialogNewFinance',
  components: {
    DatePicker,
    InputRequired,
    HelpButton
  },
  data () {
    onMounted(() => {
      store.dispatch('tags/getTagsList', { showMessage: false })
    })

    const translate = i18n.global
    const store = useStore()

    const tags = computed(() => store.getters['tags/getTags'])
    const tagsList = tags.value.map((t) => t.name)

    const billTypeOptions = [translate.t('view.newFinance.opt.in'), translate.t('view.newFinance.opt.out')]
    const starterTag = translate.t('view.newFinance.lbl.starterTag')

    return {
      confirm: false,
      step: ref(1),
      // Bill objects
      billName: ref(''), // Login
      dueDate: ref(moment().format('DD/MM/YYYY').toString()),
      description: ref(''),
      billType: ref(translate.t('view.newFinance.opt.select')),
      billValue: ref(0.0),
      quantityAmount: ref(1),
      isCashEntry: ref(false),
      isBillPayed: ref(false),
      isToDivideValue: ref(false),
      billPaid: ref(false),
      tagsList,
      selectedTags: ref([starterTag]),
      newTag: ref(''),
      starterTag,
      billTypeOptions,
      translate
    }
  },
  emits: {
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick () {
      const newBill: NewFinance = {
        id: '',
        name: this.billName,
        dueDate: convertDate(this.dueDate),
        description: this.description,
        value: this.billValue,
        quantityAmount: this.quantityAmount,
        tags: this.selectedTags,
        isCashEntry: this.isCashEntry,
        isBillPayed: this.isBillPayed,
        isToDivideValue: this.isToDivideValue
      }
      this.$emit('ok', newBill)
      this.$emit('hide')
    },
    onCancelClick () {
      (this as any).$refs.dialog.cancel()
    },
    show () {
      (this as any).$refs.dialog.show()
    },
    onResetClick () {
      this.selectedTags.length = 0
      this.selectedTags.push(this.starterTag)
    },
    onEnterKey () {
      if (this.selectedTags.length <= 0) this.selectedTags.push(this.newTag)
      else if (this.selectedTags.filter(t => t.toUpperCase().trim() === this.newTag.toUpperCase().trim()).length > 0) {
        notifyError(this.translate.t('msg.tag.tagAlreadyAdded'))
        this.newTag = ''
      } else {
        this.selectedTags.push(this.newTag)
        this.newTag = ''
      }
    },
    openHelpDialog () {
      this.$q
        .dialog({
          title: 'Help',
          message: divideBillValue(),
          html: true,
          persistent: true,
          cancel: true
        })
    },
    onDateUpdateEvent (newValue) {
      this.dueDate = newValue
    }
  }
})
</script>
