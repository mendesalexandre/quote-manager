<!-- eslint-disable @typescript-eslint/no-empty-function -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-card class="cls-mat-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ $t('pages.login.title') }}</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <div class="q-gutter-md">
          <q-input outlined v-model="userLogin" :label="$t('pages.login.labelLogin')" class="text-white"/>

          <q-input outlined v-model="userPassword" :label="$t('pages.login.labelPassword')" class="text-white" :type="isPwd ? 'password' : 'text'" >
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-toggle v-model="keepUserConnected" :label="$t('pages.login.keepConnect')"/>
      <q-separator dark />

      <q-card-actions align="center">
        <q-btn push icon="person" class="bg-primary text-white" :label="$t('pages.login.newAccount')" @click="openUserDialog = true">
          <q-tooltip>{{ $t('pages.login.tipNewAccount') }}</q-tooltip>
        </q-btn>
        <q-btn push icon="login" class="bg-primary text-white" :label="$t('pages.login.doLogin')" @click="login()">
          <q-tooltip>{{ $t('pages.login.tipLogin') }}</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>

    <user-registration v-model="openUserDialog"></user-registration>

    <q-page-container>
      <router-view />
    </q-page-container>
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
import UserRegistration from './UserRegistration.vue'
import user from 'src/composables/User'
import { UserLogin } from 'src/models/user'

export default defineComponent({
  name: 'UserLogin',
  components: {
    UserRegistration
  },
  data () {
    const leftDrawerOpen = ref(false)
    const openUserDialog = ref(false)

    return {
      keepUserConnected: ref(false),
      userLogin: ref(''),
      userPassword: ref(''),
      isPwd: ref(true),
      essentialLinks: null,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      openUserDialog
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted () { },
  methods: {
    async login () {
      await user().getUser(new UserLogin(this.userLogin, this.userPassword))
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      this.$router.push('/welcome').catch(() => { })
      // console.log('userLogged: ', userLogged)
    }
  }
})
</script>
