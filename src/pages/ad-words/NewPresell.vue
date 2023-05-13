<template>
  <q-page padding class="bg-primary">
    <button-back to="/presell" />
    <br /><br />
    <q-stepper v-model="step" vertical color="primary" animated>
      <!-- Step 1 -->
      <q-step push :name="1" :title="$t('view.newPresell.lbl.firstTitle')" icon="create_new_folder" :done="step > 1">
        <q-select
          outlined
          v-model="templateSelected"
          :options="templateOptions"
          :label="$t('view.newPresell.lbl.templates')">
          <template v-slot:prepend><q-icon name="mdi-tag" /></template>
        </q-select>
        <help-button @click="openHelpDialog()"></help-button>

        <q-stepper-navigation>
          <q-btn push @click="step = 2" class="bg-secondary text-white" :label="$t('components.lbl.buttonContinue')" />
        </q-stepper-navigation>
      </q-step>
      <!-- Step 2 -->
      <q-step :name="2" :title="$t('view.newPresell.lbl.secondTitle')" icon="create_new_folder" :done="step > 2">
        <div class="q-gutter-md">
          <input-required
            v-if="shouldViewField(templateSelected, 'productName')"
            v-model="productName"
            :label="$t('view.newPresell.lbl.productName')"
            :custom-hint="$t('view.newPresell.help.productName')"
          />
          <input-required
            v-if="shouldViewField(templateSelected, 'affiliateUrl')"
            v-model="affiliateUrl"
            @update:model-value="validateAffLink"
            :label="$t('view.newPresell.lbl.affiliateUrl')"
          />
          <q-uploader
            v-if="shouldViewField(templateSelected, 'imageId')"
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
          <q-space /><br>
        </div>

        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="step = 3" :label="$t('components.lbl.buttonContinue')" />
          <q-btn push @click="step = 1" class="bg-white text-primary q-ml-sm" :label="$t('components.lbl.buttonReturn')" />
        </q-stepper-navigation>
      </q-step>
      <!-- Step 3 -->
      <q-step :name="3" :title="$t('view.newPresell.lbl.thirdTitle')" icon="create_new_folder" :done="step > 3">
        <input-required
          v-if="shouldViewField(templateSelected, 'pageTitleText')"
          v-model="pageTitleText"
          :label="$t('view.newPresell.lbl.pageTitleText')"
        />
        <input-required
          v-if="shouldViewField(templateSelected, 'headLineText')"
          v-model="headLineText"
          :label="$t('view.newPresell.lbl.headLineText')"
        />
        <q-radio
          v-if="shouldViewField(templateSelected, 'buttonText')"
          v-model="buttonChoice"
          val="text"
          :label="$t('view.newPresell.lbl.showButtonAsText')"
        />
        <q-radio
          v-if="shouldViewField(templateSelected, 'buttonChoice')"
          v-model="buttonChoice"
          val="image"
          :label="$t('view.newPresell.lbl.showButtonAsImage')"
        />

        <input-required
          v-if="buttonChoice === 'text' && shouldViewField(templateSelected, 'buttonText')"
          v-model="buttonText"
          :label="$t('view.newPresell.lbl.buttonText')"
        />
        <q-checkbox
          v-if="buttonChoice === 'text' && shouldViewField(templateSelected, 'showButtonAnimation')"
          v-model="showButtonAnimation"
          :label="$t('view.newPresell.lbl.showButtonAnimation')"
        />

        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="step = 4" :label="$t('components.lbl.buttonContinue')" />
          <q-btn push @click="step = 2" class="bg-white text-primary q-ml-sm" :label="$t('components.lbl.buttonReturn')" />
        </q-stepper-navigation>
      </q-step>
      <!-- Step 4 -->
      <q-step :name="4" :title="$t('view.newPresell.lbl.fourthTitle')" icon="create_new_folder" :done="step > 4">
        <q-checkbox
          v-if="shouldViewField(templateSelected, 'showPromotionValues')"
          v-model="showPromotionValues"
          :label="$t('view.newPresell.lbl.showPromotionValues')"
        />
        <input-required
          v-if="showPromotionValues && shouldViewField(templateSelected, 'promotionValueBefore')"
          v-model="promotionValueBefore"
          type="number"
          :label="$t('view.newPresell.lbl.promotionValueBefore')"
        />
        <input-required
          v-if="showPromotionValues && shouldViewField(templateSelected, 'promotionValueWithDiscount')"
          v-model="promotionValueWithDiscount"
          type="number"
          :label="$t('view.newPresell.lbl.promotionValueNow')"
        />
        <input-required
          v-if="showPromotionValues && shouldViewField(templateSelected, 'discountValue')"
          v-model="discountValue"
          type="number"
          :label="$t('view.newPresell.lbl.discountValue')"
        />

        <!--Auxiliary text-->
        <q-checkbox
          v-if="shouldViewField(templateSelected, 'showDetailedInfo')"
          v-model="showDetailedInfo"
          :label="$t('view.newPresell.lbl.showDetailedInfo')"
        />
        <q-card v-if="showDetailedInfo && shouldViewField(templateSelected, 'aboutProduct')">
          <doc-card-title :title="$t('view.newPresell.lbl.aboutProduct')" />
          <q-editor v-model="aboutProduct" min-height="5rem" :label="$t('view.newPresell.lbl.aboutProduct')" />
        </q-card>
        <q-card v-if="showDetailedInfo && shouldViewField(templateSelected, 'howDoesProductWork')">
          <doc-card-title :title="$t('view.newPresell.lbl.howDoesProductWork')" />
          <q-editor v-model="howDoesProductWork" min-height="5rem" :label="$t('view.newPresell.lbl.howDoesProductWork')" />
        </q-card>
        <q-card v-if="showDetailedInfo && shouldViewField(templateSelected, 'productIngredients')">
          <doc-card-title :title="$t('view.newPresell.lbl.productIngredients')" />
          <q-editor v-model="productIngredients" min-height="5rem" :label="$t('view.newPresell.lbl.productIngredients')" />
        </q-card>

        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="step = 5" :label="$t('components.lbl.buttonContinue')" />
          <q-btn push @click="step = 3" class="bg-white text-primary q-ml-sm"
            :label="$t('components.lbl.buttonReturn')" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="5" :title="$t('view.newPresell.lbl.fifthTitle')" icon="create_new_folder" :done="step > 5">
        <q-checkbox v-if="shouldViewField(templateSelected, 'showLastChanceToBuy')" v-model="showLastChanceToBuy" :label="$t('view.newPresell.lbl.showLastChanceToBuy')" />
        <color-picker
          v-if="shouldViewField(templateSelected, 'backColor1')"
          :label="$t('view.newPresell.lbl.backColor1')"
          :start-color="backColor1"
          @input="onColor1UpdateEvent"
        />
        <color-picker
          v-if="shouldViewField(templateSelected, 'backColor2')"
          :label="$t('view.newPresell.lbl.backColor2')"
          :start-color="backColor2"
          @input="onColor2UpdateEvent"
        />
        <color-picker
          v-if="buttonChoice === 'text' && shouldViewField(templateSelected, 'buttonColor')"
          :label="$t('view.newPresell.lbl.buttonColor')"
          :start-color="buttonColor"
          @input="onButtonColorUpdateEvent"
        />

        <q-stepper-navigation>
          <q-btn push class="bg-secondary text-white" @click="onOkClick()" :label="$t('components.lbl.buttonFinish')" />
          <q-btn push @click="step = 4" class="bg-white text-primary q-ml-sm"
            :label="$t('components.lbl.buttonReturn')" />
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
import { showLoading, LoadingStatus } from 'src/util/Loading'
import i18n from 'src/util/i18n'
import { PresellNew } from 'src/models/PresellModel'
import { preSaleTemplates } from 'src/models/HelpModel'
import { shouldViewField } from 'src/util/PreSaleFieldsPermissions'

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
      headLineText: ref('Discover The Secret of <YOUR_PRODUCT_NAME_HERE>'),
      buttonText: ref('Click Here and Access the Official Website > NOW!'),
      buttonChoice: ref('text'),
      showButtonAnimation: ref(false),
      // Template 3 - available fields
      pageTitleText: ref(''),
      serverToHostPresell: ref('get-best-offer'),
      showDetailedInfo: ref(false),
      aboutProduct: ref(''),
      howDoesProductWork: ref(''),
      productIngredients: ref(''),
      showLastChanceToBuy: ref(false),
      // Promotion values
      showPromotionValues: ref(false),
      promotionValueBefore: ref(0.0),
      promotionValueWithDiscount: ref(0.0),
      discountValue: ref(0.0),
      // Other definitions
      templateSelected: ref(['Template 1']),
      templateOptions: ref(availableTemplates),
      user,
      translate,
      urlUpload,
      shouldViewField,
      store
    }
  },
  methods: {
    onOkClick () {
      if (!this.validateFieldBeforeSave()) notifyError(i18n.global.t('msg.unfilledFields'))
      else {
        const newPresell: PresellNew = {
          productName: this.productName,
          imageId: this.imageId,
          affiliateUrl: this.affiliateUrl,
          backColor1: this.backColor1,
          backColor2: this.backColor2,
          buttonColor: this.buttonColor,
          headLineText: this.headLineText,
          buttonText: this.buttonText,
          buttonChoice: this.buttonChoice === 'image' ? 'image' : 'text',
          showButtonAnimation: this.showButtonAnimation,
          pageTitleText: this.pageTitleText,
          serverToHostPresell: 'get-best-offer',
          showDetailedInfo: this.showDetailedInfo,
          aboutProduct: this.aboutProduct,
          howDoesProductWork: this.howDoesProductWork,
          productIngredients: this.productIngredients,
          showLastChanceToBuy: this.showLastChanceToBuy,
          showPromotionValues: this.showPromotionValues,
          promotionValueBefore: this.promotionValueBefore,
          promotionValueWithDiscount: this.promotionValueWithDiscount,
          discountValue: this.discountValue,
          // Other definitions
          template: this.templateSelected
        }
        this.store.dispatch('presell/registerNewPresell', newPresell)
      }
    },
    validateFieldBeforeSave () {
      if (this.templateSelected.includes('Template 1')) {
        if (!this.productName) return false
        else if (!this.imageId) return false
        else if (!this.affiliateUrl) return false
        else if (!this.backColor1) return false
        else if (!this.backColor2) return false
        else if (!this.buttonColor) return false

        return true
      } else if (this.templateSelected.includes('Template 2')) {
        if (!this.productName) return false
        else if (!this.imageId) return false
        else if (!this.affiliateUrl) return false
        else if (!this.backColor1) return false
        else if (!this.backColor2) return false
        else if (!this.buttonColor) return false
        else if (!this.headLineText) return false
        else if (this.buttonChoice === 'text' && !this.buttonText) return false
        else if (this.buttonChoice === 'text' && !this.showButtonAnimation) return false

        return true
      } else if (this.templateSelected.includes('Template 3')) {
        if (!this.productName) return false
        else if (!this.imageId) return false
        else if (!this.affiliateUrl) return false
        else if (!this.backColor1) return false
        else if (!this.backColor2) return false
        else if (!this.buttonColor) return false
        else if (!this.headLineText) return false
        else if (this.buttonChoice === 'text' && !this.buttonText) return false
        else if (this.buttonChoice === 'text' && !this.showButtonAnimation) return false
        else if (!this.pageTitleText) return false
        else if (!this.serverToHostPresell) return false
        else if (this.showDetailedInfo) {
          if (!this.aboutProduct) return false
          else if (!this.howDoesProductWork) return false
          else if (!this.productIngredients) return false
        // eslint-disable-next-line brace-style
        }
        // else if (!this.showLastChanceToBuy) return false
        else if (this.showPromotionValues) {
          if (!this.promotionValueBefore) return false
          else if (!this.promotionValueWithDiscount) return false
          else if (!this.discountValue) return false
        }
        return true
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
      if (this.affiliateUrl.trim() !== '') {
        showLoading(LoadingStatus.ON)
        if (!this.affiliateUrl.startsWith('https')) {
          showLoading(LoadingStatus.OFF)
          notifyError(i18n.global.t('msg.presell.invalidUrl'))
        } else {
          const url = new URL(this.affiliateUrl)
          fetch(url.toString())
            .then(response => {
              if (response.ok) {
                // URL is valid and response was successful
                return response.text()
              } else {
                // Error occurred, handle accordingly
                showLoading(LoadingStatus.OFF)
                notifyError(i18n.global.t('msg.presell.errorUrlVal'))
                throw new Error('Error requesting URL')
              }
            })
            .then(data => {
              // Check for malicious content in response data
              if (data.includes('malware')) {
                showLoading(LoadingStatus.OFF)
                notifyError(i18n.global.t('msg.presell.errorUrlMalware'))
                throw new Error('URL contains malware')
              } else {
                // URL is valid and does not contain malware
                showLoading(LoadingStatus.OFF)
                notifySuccess(i18n.global.t('msg.presell.successUrlVal'))
                // console.log('URL is valid and safe')
              }
            })
            .catch(error => {
              // Handle errors
              showLoading(LoadingStatus.OFF)
              console.error(error)
            })
        }
      }
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
