<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" :title="$t('pages.user.new.firstTitle')" icon="settings" :done="step > 1">

        <div class="q-gutter-md">
          <q-input filled v-model="fullName" :label="$t('pages.user.new.fullName')" />
          <q-input filled v-model="userName" :label="$t('pages.user.new.userName')"/>
          <q-input filled v-model="userMail" :label="$t('pages.user.new.mail')" />
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" :label="$t('pages.user.new.continue')" />
        </q-stepper-navigation>
      </q-step>

      <!--caption="Optional"-->
      <q-step :name="2" :title="$t('pages.user.new.secondTitle')" icon="create_new_folder" :done="step > 2">

        <div class="q-gutter-md">
            <q-input filled v-model="password" :label="$t('pages.user.new.password')" />
            <q-input filled v-model="repeatPass" :label="$t('pages.user.new.repeatPass')" />
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" :label="$t('pages.user.new.continue')" />
          <q-btn flat @click="step = 1" color="primary" :label="$t('pages.user.new.back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!--Disable stepper-->
      <!-- <q-step :name="3" title="Ad template" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step> -->

      <q-step :name="4" :title="$t('pages.user.new.thirdTitle')" icon="add_comment">

        <div class="q-gutter-md">
            <div>
              <q-checkbox v-model="moduleOne" :label="$t('pages.user.new.moduleOne')" keep-color/>
            </div>
            <div>
              <q-checkbox v-model="moduleTwo" :label="$t('pages.user.new.moduleTwo')" keep-color/>
            </div>
            <div>
              <q-checkbox v-model="moduleThree" :label="$t('pages.user.new.moduleThree')" keep-color/>
            </div>
            <div>
              <q-checkbox v-model="moduleFourth" :label="$t('pages.user.new.moduleFourth')" keep-color/>
            </div>
            <div>
              <q-checkbox v-model="moduleFifth" :label="$t('pages.user.new.moduleFifth')" keep-color/>
            </div>
            <div>
              <q-checkbox right-label v-model="acceptedTerms" :label="$t('pages.user.new.termAccepted')" checked-icon="task_alt" unchecked-icon="highlight_off"/>
            </div>
        </div>

        <q-stepper-navigation>
          <q-btn color="primary" @click="newUser()" :label="$t('pages.user.new.finish')" />
          <q-btn flat @click="step = 2" color="primary" :label="$t('pages.user.new.back')" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<style lang="sass" scoped></style>

<script>
import { ref } from 'vue'

export default {
  name: 'UserRegistration',
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
      moduleOne: ref(false),
      moduleTwo: ref(false),
      moduleThree: ref(false),
      moduleFourth: ref(false),
      moduleFifth: ref(false)
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
