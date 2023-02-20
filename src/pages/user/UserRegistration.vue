<template>
  <q-dialog v-model="confirm" ref="dialog" persistent>
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" title="Dados gerais" icon="settings" :done="step > 1">

        <div class="q-gutter-md">
          <q-input filled v-model="fullName" :label="$t('pages.user.new.fullname')" />
          <q-input filled v-model="fullName" :label="$t('pages.user.new.username')"/>
          <q-input filled v-model="fullName" :label="$t('pages.user.new.mail')" />
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continuar" />
          <div class="q-gutter-md">
            <q-input filled v-model="fullName" :label="$t('pages.user.new.username')" />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Create an ad group" caption="Optional" icon="create_new_folder" :done="step > 2">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Ad template" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-dialog>
</template>

<style lang="sass" scoped>

</style>

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
      repeatPass: ref('')
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  created: function () {

  },
  methods: {
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
