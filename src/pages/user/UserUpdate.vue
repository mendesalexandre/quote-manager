<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-card class="q-gutter-md" style="max-width: 580px;">
      <q-input
        class="text-white"
        outlined
        v-model="currentUserName"
        type="text"
        :label="$t('view.userUpdate.lbl.userName')"
      />

      <q-input
        outlined
        v-model="currentUserEmail"
        type="email"
        :label="$t('view.userUpdate.lbl.userEmail')"
      />

      <q-input
        outlined
        v-model="oldPassword"
        :type="isPwd ? 'password' : 'text'"
        :label="$t('view.userUpdate.lbl.oldPassword')"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="newPassword"
        :type="isPwd ? 'password' : 'text'"
        :label="$t('view.userUpdate.lbl.newPassword')"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-separator></q-separator>
      <q-btn
        push
        @click="onOkClick()"
        class="bg-white text-primary q-ml-sm"
        :label="$t('components.lbl.buttonFinish')"
      />
      <q-space></q-space>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'UserUpdate',
  data () {
    const store = useStore()
    const user = store.getters['user/getUser']
    const currentUserName = user.data.userName
    const currentUserEmail = user.data.email
    console.log('1. currentUserName: ', currentUserName)
    console.log('2. currentUserEmail: ', currentUserEmail)
    return {
      confirm: false,
      currentUserName,
      currentUserEmail,
      oldPassword: ref(''),
      newPassword: ref(''),
      isPwd: ref(true),
      user
    }
  },
  emits: {
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick () {
      const user = {
        oldUserName: this.user.data.userName,
        newUserName: this.user.data.userName === this.currentUserName ? '' : this.currentUserName,
        oldEmail: this.user.data.email,
        newEmail: this.user.data.email === this.currentUserEmail ? '' : this.currentUserEmail,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword === this.oldPassword ? '' : this.newPassword
      }
      console.log('3. user to update: ', user)
      this.$emit('ok', user)
      this.$emit('hide')
    }
  }
})

</script>
