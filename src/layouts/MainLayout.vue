<template>
  <q-layout view="lHh Lpr lFf">
  <!-- <q-card class="cls-mat-card bg-primary text-white"> -->
  <q-card class="cls-mat-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
      <div class="q-gutter-md">
        <q-input outlined v-model="txtLogin" label="Login" class="text-white"/>

        <q-input outlined v-model="txtPassword" label="Senha" class="text-white"/>
        </div>
      </q-card-section>

       <q-toggle v-model="keepUserConnected" label="Mantenha-me conectado"/>

      <q-separator dark />

      <q-card-actions>
        <q-btn push icon="fa-regular fa-user" class="bg-primary text-white" label="Crir nova conta">
          <q-tooltip>Clique para registrar-se</q-tooltip>
        </q-btn>
        <q-btn push icon="mail" class="bg-primary text-white" label="Login">
          <q-tooltip>Clique para efetuar o login</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quote manager
        </q-toolbar-title>

        <div>Product V1.0.0</div>
      </q-toolbar>
    </q-header> -->

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

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
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   }
// ]

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

      essentialLinks: null,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
