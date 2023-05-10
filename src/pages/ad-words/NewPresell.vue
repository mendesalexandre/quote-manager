<template>
  <q-page padding class="bg-primary">
    <button-back to="/presell" />
    <br/><br/>
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step push :name="1" :title="$t('view.newPresell.lbl.firstTitle')" icon="create_new_folder" :done="step > 1" >
        <q-select outlined v-model="templateSelected" :options="templateOptions" :label="$t('view.newPresell.lbl.templates')">
          <template v-slot:prepend><q-icon name="mdi-tag" /></template>
        </q-select>
        <help-button @click="openHelpDialog()"></help-button>

        <q-stepper-navigation>
          <q-btn push @click="step = 2" class="bg-secondary text-white" :label="$t('components.lbl.buttonContinue')" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" :title="$t('view.newPresell.lbl.secondTitle')" icon="create_new_folder" :done="step > 2" >
        <div class="q-gutter-md">
          <input-required v-model="productName" :label="$t('view.newPresell.lbl.productName')" :custom-hint="$t('view.newPresell.help.productName')"/>
          <input-required v-model="affiliateUrl" :label="$t('view.newPresell.lbl.affiliateUrl')" />
          <q-uploader
            style="max-width: 300px"
            :label="$t('view.newPresell.lbl.image')"
            :multiple="false"
            accept=".png, image/*"
            max-file-size="850000"
            max-files="1"
            @rejected="onRejected"
            @added="onUploadEvent"
            @removed="onRemoveEvent"
          />
          <q-space/><br>
        </div>

        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="step = 3" :label="$t('components.lbl.buttonContinue')" />
          <q-btn push @click="step = 1" class="bg-white text-primary q-ml-sm" :label="$t('components.lbl.buttonReturn')" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" :title="$t('view.newPresell.lbl.thirdTitle')" icon="create_new_folder" :done="step > 3" >
        <input-required v-if="shouldEnableField()" v-model="pageTitleText" :label="$t('view.newPresell.lbl.pageTitleText')"/>
        <input-required v-if="shouldEnableField()" v-model="headLineText" :label="$t('view.newPresell.lbl.headLineText')"/>
        <input-required v-if="shouldEnableField()" v-model="buttonText" :label="$t('view.newPresell.lbl.buttonText')"/>

        <!-- <q-checkbox v-model="true" label=""/> -->
        <!-- <input-required v-if="shouldEnableField()" v-model="buttonText" :label="$t('view.newPresell.lbl.buttonText')"/> -->

        <!--Auxiliary text-->
        <q-card v-if="shouldEnableField()">
          <doc-card-title :title="$t('view.newPresell.lbl.aboutProduct')" />
          <q-editor v-model="aboutProduct" min-height="5rem" :label="$t('view.newPresell.lbl.aboutProduct')" />
        </q-card>
        <q-card v-if="shouldEnableField()">
          <doc-card-title :title="$t('view.newPresell.lbl.howDoesProductWork')" />
          <q-editor v-if="shouldEnableField()" v-model="howDoesProductWork" min-height="5rem" :label="$t('view.newPresell.lbl.howDoesProductWork')" />
        </q-card>
        <q-card v-if="shouldEnableField()">
          <doc-card-title :title="$t('view.newPresell.lbl.productIngredients')" />
          <q-editor v-if="shouldEnableField()" v-model="productIngredients" min-height="5rem" :label="$t('view.newPresell.lbl.productIngredients')" />
        </q-card>

        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="step = 4" :label="$t('components.lbl.buttonContinue')" />
          <q-btn push @click="step = 2" class="bg-white text-primary q-ml-sm" :label="$t('components.lbl.buttonReturn')" />
        </q-stepper-navigation>
      </q-step>

      <q-step push :name="4" :title="$t('view.newPresell.lbl.fourthTitle')" icon="create_new_folder" :done="step > 4" >
        <q-checkbox v-if="shouldEnableField()" v-model="showLastChanceToBuy" :label="$t('view.newPresell.lbl.showLastChanceToBuy')" />
        <q-checkbox v-if="shouldEnableField()" v-model="showButtonAnimation" :label="$t('view.newPresell.lbl.showButtonAnimation')" />
        <color-picker :label="$t('view.newPresell.lbl.colorBack1')" :start-color="backColor1" @input="onColor1UpdateEvent"/>
        <color-picker :label="$t('view.newPresell.lbl.colorBack2')" :start-color="backColor2" @input="onColor2UpdateEvent"/>
        <color-picker :label="$t('view.newPresell.lbl.buttonColor')" :start-color="buttonColor" @input="onButtonColorUpdateEvent"/>
        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="onOkClick()" :label="$t('components.lbl.buttonFinish')" />
          <q-btn push @click="step = 3" class="bg-white text-primary q-ml-sm" :label="$t('components.lbl.buttonReturn')" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import { useStore } from 'vuex'

import { environment } from 'src/environments/environment'
import { notifySuccess, notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'
import { PresellNew } from 'src/models/PresellModel'
import { preSaleTemplates } from 'src/models/HelpModel'

import InputRequired from 'src/components/InputRequired.vue'
import ColorPicker from 'src/components/ColorPicker.vue'
import ButtonBack from 'src/components/ButtonBack.vue'
import HelpButton from 'src/components/HelpButton.vue'
import DocCardTitle from 'src/components/DocCardTitle.vue'

export default defineComponent({
  name: 'DialogNewPresell',
  components: {
    InputRequired,
    ColorPicker,
    ButtonBack,
    HelpButton,
    DocCardTitle
  },
  data () {
    const translate = i18n.global
    const store = useStore()
    const user = store.getters['user/getUser']
    const urlUpload = `${environment.api.url}/${environment.api.version}/${environment.api.pathToUpload}`

    const availableTemplates = ['Template 1']
    if (user.permissions.userPlan === 'PROFESSIONAL') {
      availableTemplates.push('Template 2')
    } else if (user.permissions.userPlan === 'ENTERPRISE') {
      availableTemplates.push('Template 2')
      availableTemplates.push('Template 3')
    }

    return {
      confirm: false,
      step: ref(1),
      // Template 1 - available fields
      productName: ref(''),
      imageId: ref(''),
      affiliateUrl: ref(''),
      backColor1: ref('#136e73'),
      backColor2: ref('#ffffff'),
      buttonColor: ref('#FAC400'),
      // Template 2 - available fields
      headLineText: ref('Discover The Secret of {{ productName }}'),
      buttonText: ref('Click Here and Access the Official Website > NOW!'),
      showButtonAnimation: ref(false),
      // Template 3 - available fields
      pageTitleText: ref(''),
      serverToHostPresell: ref(''),
      aboutProduct: ref(''),
      howDoesProductWork: ref(''),
      productIngredients: ref(''),
      showLastChanceToBuy: ref(false),
      promotionValueBefore: ref(0.0),
      promotionValueNow: ref(0.0),
      discountValue: ref(0.0),
      // Conditions to enable fields,
      enableForT1: ref(false),
      // Other definitions
      templateSelected: ref(['Template 1']),
      templateOptions: ref(availableTemplates),
      user,
      translate,
      urlUpload
    }
  },
  methods: {
    onOkClick () {
      const newPresell: PresellNew = {
        productName: this.productName,
        pageTitleText: this.pageTitleText,
        headLineText: this.headLineText,
        buttonText: this.buttonText,
        backGradientColor1: this.backColor1,
        backGradientColor2: this.backColor2,
        buttonColor: this.buttonColor,
        showLastOffer: this.showLastChanceToBuy,
        showGradientBackground: true,
        showAnimationOverButton: this.showButtonAnimation
      }
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
      notifyError(this.translate.t('msg.presell.imgError'))
    },
    onUploadEvent (fileToUpload) {
      const fd = new FormData()
      fd.append('file', fileToUpload[0])
      const axios = (this as any).$axios
      const msgSuccess = this.translate.t('msg.presell.uploadSuccess')

      axios.post(this.urlUpload, fd, {
        headers: { Authorization: this.user.bearerKey }
      })
        .then((response) => {
          if (response.status === 200) {
            this.imageId = response.data.data
            notifySuccess(msgSuccess)
          } else notifyError(response.data.message)
        })
        .catch((error: any) => {
          notifyError(error)
        })
    },
    onRemoveEvent () {
      const axios = (this as any).$axios
      const msgSuccess = this.translate.t('msg.presell.deleteUploadSuccess')
      console.log('this.imageId: ', this.imageId)

      axios.delete(`${this.urlUpload}/delete/${this.imageId}`, {
        headers: { Authorization: this.user.bearerKey }
      })
        .then((response) => {
          if (response.status === 200) {
            this.imageId = ''
            notifySuccess(msgSuccess)
          } else notifyError(response.data.message)
        })
        .catch((error: any) => {
          notifyError(error)
        })
    },
    validateAffLink () {
      const url = new URL(this.affiliateUrl)
      fetch(url.toString())
        .then(response => {
          if (response.ok) {
            // URL is valid and response was successful
            return response.text()
          } else {
            // Error occurred, handle accordingly
            throw new Error('Error requesting URL')
          }
        })
        .then(data => {
          // Check for malicious content in response data
          if (data.includes('malware')) {
            throw new Error('URL contains malware')
          } else {
            // URL is valid and does not contain malware
            console.log('URL is valid and safe')
          }
        })
        .catch(error => {
          // Handle errors
          console.error(error)
        })
    },
    /**
     * Determine if the field can be edited based on template selection
     */
    shouldEnableField () {
      const userPlan = this.user.permissions.userPlan
      if (userPlan === 'PLUS' && this.templateSelected.includes('Template 1')) return true
      else if (userPlan === 'PROFESSIONAL') {
        return this.templateSelected.includes('Template 1') || this.templateSelected.includes('Template 2')
      } else if (userPlan === 'ENTERPRISE') return true // This plan allow's all templates
      else return false
    },
    openHelpDialog () {
      this.$q
        .dialog({
          title: 'Help',
          message: preSaleTemplates(),
          html: true,
          persistent: true,
          cancel: true
        })
    }
  }
})
</script>
