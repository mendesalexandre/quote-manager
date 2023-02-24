<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!--Menu button-->
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>

        <!--Application title-->
        <q-toolbar-title>{{$t('pages.home.menu.subTitle')}}</q-toolbar-title>
        <LanguageSwitch/>
        <UserSubmenuOptions/>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <SideMenuOptions/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <WelcomeBack/> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SideMenuOptions from 'src/components/SideMenuOptions.vue'
import UserSubmenuOptions from 'src/components/UserSubmenuOptions.vue'
import LanguageSwitch from '../generic/LanguageSwitch.vue'

export default defineComponent({
  name: 'HomeScreen',

  components: {
    UserSubmenuOptions,
    SideMenuOptions,
    LanguageSwitch
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
