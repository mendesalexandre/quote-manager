<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!--Menu button-->
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <!--Application title-->
        <q-toolbar-title>{{ $t("view.home.lbl.subTitle") }}</q-toolbar-title>
        <LanguageSwitch />
        <UserSubmenuOptions />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <SideMenuOptions />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LanguageSwitch from '../generic/LanguageSwitch.vue'
import SideMenuOptions from 'src/components/SideMenuOptions.vue'
import UserSubmenuOptions from 'src/components/UserSubmenuOptions.vue'

export default defineComponent({
  name: 'HomeScreen',

  components: {
    LanguageSwitch,
    SideMenuOptions,
    UserSubmenuOptions
  },

  data () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
