<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" :title="$t('view.newUser.lbl.firstTitle')" icon="settings" :done="step > 1">

        <div class="q-gutter-md">
          <input-required v-model="fullName" :label="$t('view.newUser.lbl.fullName')"/>
          <input-required v-model="userName" :label="$t('view.newUser.lbl.userName')"/>
          <input-required v-model="userMail" :label="$t('view.newUser.lbl.mail')" />
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" :label="$t('view.newUser.lbl.continue')" />
        </q-stepper-navigation>
      </q-step>

      <!--caption="Optional"-->
      <q-step :name="2" :title="$t('view.newUser.lbl.secondTitle')" icon="create_new_folder" :done="step > 2">

        <div class="q-gutter-md">
            <input-required v-model="password" :label="$t('view.newUser.lbl.password')" />
            <input-required v-model="repeatPass" :label="$t('view.newUser.lbl.repeatPass')" />
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" :label="$t('view.newUser.lbl.continue')" />
          <q-btn flat @click="step = 1" color="primary" :label="$t('view.newUser.lbl.back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" :title="$t('view.newUser.lbl.thirdTitle')" icon="add_comment">

        <div class="q-gutter-md">
           <q-radio checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="FREE" label="Free" v-model="module" />
           <q-radio checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="PLUS" label="Plus" v-model="module"/>
           <q-radio checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="BUSINESS" label="Business" v-model="module" disable />
           <q-radio checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ENTERPRISE" label="Enterprise" v-model="module" disable/>
        </div>

        <div>
          <q-checkbox
            right-label
            v-model="acceptedTerms"
            :label="$t('view.newUser.lbl.termAccepted')"
            checked-icon="task_alt"
            unchecked-icon="highlight_off"
            :rules="[(val) => (val) || $t('components.checkBoxRequire')]"
          />
        </div>

        <q-stepper-navigation>
          <q-btn color="primary" @click="newUser()" :label="$t('view.newUser.lbl.finish')" />
          <q-btn flat @click="step = 2" color="primary" :label="$t('view.newUser.lbl.back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<style lang="sass" scoped></style>

<script>
import { ref } from 'vue'
import InputRequired from 'src/components/InputRequired.vue'

export default {
  name: 'UserRegistration',
  components: {
    InputRequired
  },
  data () {
    return {
      confirm: false,
      step: ref(1),
      fullName: ref(''),
      userName: ref(''),
      userMail: ref(''),
      password: ref(''),
      repeatPass: ref(''),
      acceptedTerms: ref(false),
      module: ref('')
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  created: function () {

  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    newUser () {
      this.$refs.dialog.close()
    },
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit('hide')
    },
    onOKClick () {
      // code that you want to emit or functionality you want
    },
    onCancelClick () {
      this.hide()
    }
  }
}
</script>
