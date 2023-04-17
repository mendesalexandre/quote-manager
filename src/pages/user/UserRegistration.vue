<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        :name="1"
        :title="$t('view.newUser.lbl.firstTitle')"
        icon="settings"
        :done="step > 1"
      >
        <div class="q-gutter-md">
          <input-required v-model="fullName" :label="$t('view.newUser.lbl.fullName')" />
          <input-required v-model="userName" :label="$t('view.newUser.lbl.userName')" />
          <input-required v-model="userMail" :label="$t('view.newUser.lbl.mail')" />
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="step = 2"
            color="primary"
            :label="$t('components.lbl.buttonContinue')"
          />
        </q-stepper-navigation>
      </q-step>

      <!--caption="Optional"-->
      <q-step
        :name="2"
        :title="$t('view.newUser.lbl.secondTitle')"
        icon="create_new_folder"
        :done="step > 2"
      >
        <div class="q-gutter-md">
          <input-required v-model="password" :label="$t('view.newUser.lbl.password')" />
          <input-required
            v-model="repeatPass"
            :label="$t('view.newUser.lbl.repeatPass')"
          />
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="step = 3"
            color="primary"
            :label="$t('components.lbl.buttonContinue')"
          />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            :label="$t('components.lbl.buttonReturn')"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" :title="$t('view.newUser.lbl.thirdTitle')" icon="add_comment">
        <div class="q-gutter-md">
          <q-radio
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="FREE"
            label="Free"
            v-model="module"
          />
          <q-radio
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="PLUS"
            label="Plus"
            v-model="module"
          />
          <q-radio
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="BUSINESS"
            label="Business"
            v-model="module"
            disable
          />
          <q-radio
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="ENTERPRISE"
            label="Enterprise"
            v-model="module"
            disable
          />
        </div>

        <div>
          <q-checkbox
            right-label
            v-model="acceptedTerms"
            :label="$t('view.newUser.lbl.termAccepted')"
            checked-icon="task_alt"
            unchecked-icon="highlight_off"
            :rules="[(val) => val || $t('components.lbl.checkBoxRequire')]"
          />
        </div>

        <q-stepper-navigation>
          <q-btn
            color="primary"
            @click="onOkClick()"
            :label="$t('components.lbl.buttonFinish')"
          />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            :label="$t('components.lbl.buttonReturn')"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<style lang="sass" scoped></style>

<script lang="js">

import { defineComponent, ref } from 'vue'
import InputRequired from 'src/components/InputRequired.vue'
import { useDialogPluginComponent } from 'quasar'
import { UserNew } from 'src/models/UserModel'

export default defineComponent({
  name: 'UserRegistration',
  components: {
    InputRequired
  },
  data () {
    return {
      confirm: false,
      step: ref(1),
      userName: ref(''), // Login
      fullName: ref(''),
      userMail: ref(''),
      password: ref(''),
      repeatPass: ref(''),
      acceptedTerms: ref(false),
      module: ref('')
    }
  },
  emits: {
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick: function () {
      const newUser = new UserNew(
        this.userName,
        this.fullName,
        this.password,
        this.userMail,
        false,
        true,
        this.module
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
