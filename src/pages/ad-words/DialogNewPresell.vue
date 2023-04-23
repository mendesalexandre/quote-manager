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
        <q-uploader
          style="max-width: 300px"
          :label="$t('view.newPresell.lbl.image')"
          :multiple="false"
          accept=".png, image/*"
          max-file-size="850000"
          max-files="1"
          @rejected="onRejected"
          @added="onUploadEvent"
        />
        <q-space/>
        <br>
        <color-picker :label="$t('view.newPresell.lbl.colorBack1')" @input="onColor1UpdateEvent"/>
        <color-picker :label="$t('view.newPresell.lbl.colorBack2')" @input="onColor2UpdateEvent"/>
        <color-picker :label="$t('view.newPresell.lbl.buttonColor')" @input="onButtonColorUpdateEvent"/>
        <q-checkbox v-model="showButtonAnimation" :label="$t('view.newPresell.lbl.showButtonAnimation')" />

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

import { environment } from 'src/environments/environment'
import { notifySuccess, notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'

import InputRequired from 'src/components/InputRequired.vue'
import ColorPicker from 'src/components/ColorPicker.vue'

export default defineComponent({
  name: 'DialogNewPresell',
  components: {
    InputRequired,
    ColorPicker
  },
  data () {
    onMounted(() => { })

    const translate = i18n.global
    const store = useStore()
    const user = store.getters['user/getUser']
    const urlUpload = `${environment.api.url}/${environment.api.version}/${environment.api.pathToUpload}`

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
      translate,
      urlUpload
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
    onColor1UpdateEvent (newValue) {
      this.backColor1 = newValue
    },
    onColor2UpdateEvent (newValue) {
      this.backColor1 = newValue
    },
    onButtonColorUpdateEvent (newValue) {
      this.buttonColor = newValue
    },
    onRejected (rejectedEntries) {
      console.log('rejectedEntries: ', rejectedEntries)
      notifyError(this.translate.t('msg.presell.imgError'))
    },
    onUploadEvent (fileToUpload) {
      const fd = new FormData()
      fd.append('file', fileToUpload[0])
      const axios = (this as any).$axios
      const msgSuccess = this.translate.t('msg.presell.successUpload')

      axios.post(this.urlUpload, fd, {
        headers: { Authorization: this.user.bearerKey }
      })
        .then(function (response) {
          if (response.status === 200) notifySuccess(msgSuccess)
          else notifyError(response.data.message)
        })
        .catch((error: any) => {
          notifyError(error)
        })
    }
  }
})
</script>
