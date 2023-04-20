<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        push
        :name="1"
        :title="$t('view.newPresell.lbl.firstTitle')"
        icon="settings"
        :done="step > 1"
      >
        <div class="q-gutter-md">
          <input-required v-model="productName" :label="$t('view.newPresell.lbl.productName')" />
          <input-required v-model="platform" :label="$t('view.newPresell.lbl.platform')" />
          <input-required v-model="affiliateUrl" :label="$t('view.newPresell.lbl.affiliateUrl')" />
          <q-checkbox v-model="showLastChanceToBuy" :label="$t('view.newPresell.lbl.showLastChanceToBuy')" />
          <!-- <q-select filled v-model="billType" :options="billTypeOptions" :label="$t('view.newPresell.lbl.billType')" /> -->
          <!-- <input-required v-model="description" :label="$t('view.newPresell.lbl.desc')" /> -->
        </div>

        <q-stepper-navigation>
          <q-btn
            push
            @click="step = 2"
            color="primary"
            :label="$t('view.newPresell.lbl.continue')"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title="$t('view.newPresell.lbl.secondTitle')"
        icon="create_new_folder"
        :done="step > 2"
      >
        <div class="q-gutter-md">
          <input-required v-model="image" :label="$t('view.newPresell.lbl.image')" />
          <color-picker :label="$t('view.newPresell.lbl.colorBack1')" @input="onColor1UpdateEvent"/>
          <color-picker :label="$t('view.newPresell.lbl.colorBack2')" @input="onColor2UpdateEvent"/>
          <color-picker :label="$t('view.newPresell.lbl.buttonColor')" @input="onButtonColorUpdateEvent"/>
          <q-checkbox v-model="showButtonAnimation" :label="$t('view.newPresell.lbl.showButtonAnimation')" />
        </div>

        <q-stepper-navigation>
          <q-btn
            push
            color="primary"
            @click="onOkClick()"
            :label="$t('view.newPresell.lbl.finish')"
          />
          <q-btn
            push
            @click="step = 1"
            class="bg-white text-primary q-ml-sm"
            :label="$t('view.newPresell.lbl.back')"
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
  onMounted
} from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { useStore } from 'vuex'
import moment from 'moment'

import { notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'
import convertDate from 'src/util/ConvertDateToDateTime'

// import { newPresell } from 'src/models/BillModel'
import { divideBillValue } from 'src/models/HelpModel'

import DatePicker from 'src/components/DatePicker.vue'
import InputRequired from 'src/components/InputRequired.vue'
import HelpButton from 'src/components/HelpButton.vue'
import ColorPicker from 'src/components/ColorPicker.vue'

export default defineComponent({
  name: 'DialogNewPresell',
  components: {
    // DatePicker,
    InputRequired,
    ColorPicker
  },
  data () {
    onMounted(() => { })

    const translate = i18n.global
    const store = useStore()
    const user = store.getters['user/getUser']
    const tagsList = store.getters['tags/getTags']
    const billTypeOptions = [translate.t('view.newPresell.opt.in'), translate.t('view.newPresell.opt.out')]
    const starterTag = translate.t('view.newPresell.lbl.starterTag')

    return {
      confirm: false,
      step: ref(1),
      // Presell objects
      productName: ref(''),
      platform: ref(''),
      affiliateUrl: ref(''),
      showLastChanceToBuy: ref(false),
      image: ref(''),
      backColor1: ref('#136e73'),
      backColor2: ref('#ffffff'),
      buttonColor: ref('#FAC400'),
      showButtonAnimation: ref(false),

      user,
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
      // const newBill = new newPresell(
      //   '',
      //   this.user.data.user,
      //   this.billName,
      //   convertDate(this.dueDate),
      //   this.description,
      //   this.billValue,
      //   this.quantityAmount,
      //   this.selectedTags,
      //   this.isCashEntry,
      //   this.isBillPayed,
      //   this.isToDivideValue
      // )
      // this.$emit('ok', newBill)
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
    onColor1UpdateEvent (newValue) {
      this.backColor1 = newValue
    },
    onColor2UpdateEvent (newValue) {
      this.backColor1 = newValue
    },
    onButtonColorUpdateEvent (newValue) {
      this.buttonColor = newValue
    }
  }
})
</script>
