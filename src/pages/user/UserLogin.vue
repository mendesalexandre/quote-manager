<!-- eslint-disable @typescript-eslint/no-empty-function -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-card class="cls-mat-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ $t("view.login.lbl.title") }}</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <div class="q-gutter-md">
          <q-input
            outlined
            v-model="userLogin"
            :label="$t('view.login.lbl.login')"
            class="text-white"
          />

          <q-input
            outlined
            v-model="userPassword"
            :label="$t('view.login.lbl.password')"
            class="text-white"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-toggle v-model="keepUserConnected" :label="$t('view.login.lbl.keepConnect')" />
      <q-separator dark />

      <q-card-actions align="center">
        <q-btn
          push
          icon="person"
          class="bg-primary text-white"
          :label="$t('view.login.lbl.newAccount')"
          @click="openDialogUserRegistration()"
        >
          <q-tooltip>{{ $t("view.login.tip.newAccount") }}</q-tooltip>
        </q-btn>
        <q-btn
          push
          icon="login"
          class="bg-white text-primary"
          :label="$t('view.login.lbl.enter')"
          @click="login()"
        >
          <q-tooltip>{{ $t("view.login.tip.login") }}</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>

    <user-registration v-model="openUserDialog"></user-registration>
  </q-layout>
</template>

<style lang="scss" scoped>
.cls-mat-card {
  max-width: 400px;
  margin: 10em auto;
  margin-top: 10em auto;
  text-align: center;
  border-radius: 10px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import UserRegistration from './UserRegistration.vue'

export default defineComponent({
  name: 'UserLogin',
  components: {
    UserRegistration
  },
  data () {
    const openUserDialog = ref(false)
    const store = useStore()

    return {
      keepUserConnected: ref(false),
      userLogin: ref(''),
      userPassword: ref(''),
      isPwd: ref(true),
      essentialLinks: null,
      openUserDialog,
      store
    }
  },
  methods: {
    login (isAutomaticLogin = false) {
      this.store.dispatch('user/doLogin', {
        userLogin: this.userLogin,
        password: this.userPassword,
        automaticLogin: isAutomaticLogin,
        deviceInfo: JSON.stringify(this.$q.platform.is)
      })
    },
    isUserAutomaticLogin () {
      // const keepUserConnected = decrypt(get('twi_kc'))
      // if (keepUserConnected) {
      //   this.userLogin = decrypt(get('twi_id'))
      //   this.userPassword = decrypt(get('twi_pd'))
      //   this.login(true)
      // }
    },
    openDialogUserRegistration () {
      this.$q
        .dialog({
          component: UserRegistration,
          persistent: true,
          cancel: true
        })
        .onOk((newUser) => {
          console.log('newUser: ', newUser)
        })
        .onCancel(() => {
          console.log('Cancel')
        })
        .onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
    }
  },
  beforeMount () {
    this.isUserAutomaticLogin()
  }
})
</script>
