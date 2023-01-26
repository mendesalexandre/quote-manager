<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!--Menu button-->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <!--Application title-->
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <!--Version-->
        <!-- <div>Quasar v{{ $q.version }}</div> -->

        <q-button>
          <!--Create a div to add more components-->
          <!-- <template v-slot:header>
            <q-chip>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              Dionei
            </q-chip>
          </template> -->

            <q-chip>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-chip>

          <q-menu fit>
            <q-list style="width: 175px">
              <q-item clickable class="bg-tertiary text-black">
                <q-item-section><q-icon name="dark_mode" /></q-item-section>
                <q-item-section>Alterar tema</q-item-section>
              </q-item>
              <q-item clickable class="bg-tertiary text-black">
                <q-item-section><q-icon name="edit" /></q-item-section>
                <q-item-section>Atualizar dados</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="bg-tertiary text-black">
                <q-item-section><q-icon name="newspaper" /></q-item-section>
                <q-item-section>Notas de atualização</q-item-section>
              </q-item>
              <q-item clickable class="bg-tertiary text-black">
                <q-item-section><q-icon name="history" /></q-item-section>
                <q-item-section>Histórico</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="bg-tertiary text-black">
                <q-item-section><q-icon name="settings" /></q-item-section>
                <q-item-section>Configurações</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="bg-tertiary text-black">
                <q-item-section><q-icon name="help_outline" /></q-item-section>
                <q-item-section>Ajuda &amp; Feedback</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="bg-primary text-white">
                <q-item-section><q-icon name="logout" /></q-item-section>
                <q-item-section>
                  <q-item-label bd-color="primary">Sair</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>

        </q-button>

        <!--Notification badge-->
        <!-- <div class="q-gutter-sm">
          <q-chip>
            <q-avatar color="red" text-color="white">50</q-avatar>
            Emails
          </q-chip>

        </div> -->

      </q-toolbar>
    </q-header>

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
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'HomeScreen',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
