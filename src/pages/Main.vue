<template>
  <q-layout view="lHh Lpr lFf">
    <q-card class="cls-mat-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <div class="q-gutter-md">
          <q-input outlined v-model="txtLogin" label="Login" class="text-white"/>

          <q-input outlined v-model="txtPassword" label="Senha" class="text-white" :type="isPwd ? 'password' : 'text'" >
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </div>
      </q-card-section>

       <q-toggle v-model="keepUserConnected" label="Mantenha-me conectado"/>

      <q-separator dark />

      <q-card-actions align="center">
        <q-btn push icon="person" class="bg-primary text-white" label="Crir nova conta">
          <q-tooltip>Clique para registrar-se</q-tooltip>
        </q-btn>
        <q-btn push icon="login" class="bg-primary text-white" label="Login" to="/home">
          <q-tooltip>Clique para efetuar o login</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>

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

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      keepUserConnected: ref(false),
      txtLogin: ref(''),
      txtPassword: ref(''),
      isPwd: ref(true),

      essentialLinks: null,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
