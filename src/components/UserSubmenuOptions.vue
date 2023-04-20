<template>
  <div>
    <q-btn-dropdown color="secondary" :label="userFirstName">
      <div class="row no-wrap q-pa-md">
        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">{{ userCompoundName }}</div>
          <q-list>
            <q-item clickable color="secondary">
              <q-item-section>
                <q-toggle
                  v-model="enableDarkMode"
                  checked-icon="brightness_5"
                  unchecked-icon="bedtime"
                  :label="$t('view.userSubMenu.lbl.changeTheme')"
                />
              </q-item-section>
            </q-item>
            <q-item clickable color="secondary" @click="onUserDataUpdateClick()">
              <q-item-section avatar>
                <q-icon name="edit" color="primary" />
              </q-item-section>
              <q-item-section>{{ $t("view.userSubMenu.lbl.update") }}</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary" @click="onReleaseNotesClick()">
              <q-item-section avatar>
                <q-icon name="newspaper" color="primary" />
              </q-item-section>
              <q-item-section>{{
                $t("view.userSubMenu.lbl.releaseNotes")
              }}</q-item-section>
            </q-item>
            <q-item clickable color="secondary" @click="onHistoryClick()">
              <q-item-section avatar>
                <q-icon name="history" color="primary" />
              </q-item-section>
              <q-item-section>{{ $t("view.userSubMenu.lbl.history") }}</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary" disabled>
              <q-item-section avatar>
                <q-icon name="settings" color="primary" />
              </q-item-section>
              <q-item-section>{{ $t("view.userSubMenu.lbl.settings") }}</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary" @click="onAboutClick()">
              <q-item-section avatar>
                <q-icon name="help_outline" color="primary" />
              </q-item-section>
              <q-item-section>{{ $t("view.userSubMenu.lbl.about") }}</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary" disabled>
              <q-item-section avatar>
                <q-icon name="fa-regular fa-comment" color="primary" />
              </q-item-section>
              <q-item-section>{{ $t("view.userSubMenu.lbl.help") }}</q-item-section>
            </q-item>
          </q-list>
          <q-btn
            color="primary"
            icon="logout"
            :label="$t('view.userSubMenu.lbl.logout')"
            push
            size="sm"
            v-close-popup
            @click="onLogoutClick()"
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch
} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'

import { clear } from 'src/util/Cookies'
import i18n from 'src/util/i18n'

import ServerAvailability from 'src/pages/generic/ServerAvailability.vue'
import ReleaseNotes from 'src/pages/generic/ReleaseNotes.vue'
import UserHistory from 'src/pages/user/UserHistory.vue'
import UserUpdate from 'src/pages/user/UserUpdate.vue'
import { store } from 'quasar/wrappers'

export default defineComponent({
  name: 'UserSubmenuOptions',
  data () {
    const $q = useQuasar()
    const store = useStore()
    // eslint-disable-next-line prefer-const
    let enableDarkMode = ref(false)
    const user = store.getters['user/getUser']
    const translation = i18n.global

    watch(enableDarkMode, () => {
      $q.dark.set(enableDarkMode.value)
    })

    return {
      mobileData: ref(false),
      bluetooth: ref(false),
      enableDarkMode,
      userCompoundName: this.getCompoundUserName(user.data.userName),
      userFirstName: `Olá ${this.getFirstUserName(user.data.userName)}`,
      translation,
      store
    }
  },
  methods: {
    getCompoundUserName (fullName: string) {
      const names = fullName.includes(' ') ? fullName.split(' ') : fullName.substring(0, 10)
      if (names.length > 1) {
        return `${names[0]} ${names[1]}`
      } else return names
    },
    getFirstUserName (fullName: string) {
      const names = fullName.includes(' ') ? fullName.split(' ') : fullName.substring(0, 10)
      if (names.length > 1) {
        return names[0]
      } else return names
    },
    onUserDataUpdateClick () {
      this.$q
        .dialog({
          component: UserUpdate,
          persistent: true,
          cancel: true
        })
        .onOk((userToUpdate: any) => {
          console.log('userToUpdate 2: ', userToUpdate)
          this.store.dispatch('user/updateUser', userToUpdate)
        })
    },
    onReleaseNotesClick () {
      this.$q
        .dialog({
          component: ReleaseNotes,
          persistent: true,
          cancel: true
        })
        .onOk((data: any) => { })
    },
    onHistoryClick () {
      this.$q
        .dialog({
          component: UserHistory,
          persistent: true,
          cancel: true
        })
        .onOk((data: any) => { })
    },
    onAboutClick () {
      this.$q
        .dialog({
          component: ServerAvailability,
          persistent: true,
          cancel: true
        })
        .onOk((data: any) => { })
    },
    onLogoutClick () {
      clear()
      this.$router.push('/').catch(() => {})
    }
  }
})
</script>
