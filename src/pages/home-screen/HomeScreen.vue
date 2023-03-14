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
      <!-- <WelcomeBack/> -->
      <!-- <router-view /> -->
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            Contas próximas do vencimento
            {{ overdueBills }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LanguageSwitch from '../generic/LanguageSwitch.vue'
import SideMenuOptions from 'src/components/SideMenuOptions.vue'
import UserSubmenuOptions from 'src/components/UserSubmenuOptions.vue'

// Utilities
import { notifySuccess, notifyError } from 'src/util/Notification'

// Services
import { getBillsCloseToOverdue } from 'src/composables/Bills'

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
      slide: ref('style'),
      overdueBills: ref(0),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    /**
     * Get user overdue bills
     */
    getBillsCloseToOverdue () {
      getBillsCloseToOverdue()
        .then((bills: any) => {
          this.overdueBills = bills.length
        })
        .catch((error: any) => {
          notifyError(error)
        })
    }
  },
  beforeMount () {
    this.getBillsCloseToOverdue()
  }
})
</script>
