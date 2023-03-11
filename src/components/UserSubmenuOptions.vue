<template>
   <div>
    <q-btn-dropdown color="secondary" label="Olá Dionei">
      <div class="row no-wrap q-pa-md">
        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">Dionei Beilke</div>
          <q-list>
            <q-item clickable color="secondary">
              <q-item-section>
                <q-toggle v-model="enableDarkMode" checked-icon="brightness_5" unchecked-icon="bedtime" label="Trocar tema"/>
              </q-item-section>
            </q-item>
            <q-item clickable color="secondary">
              <q-item-section avatar>
                <q-icon name="edit" color="primary"/>
              </q-item-section>
              <q-item-section>Atualizar dados</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary">
              <q-item-section avatar>
                <q-icon name="newspaper" color="primary"/>
              </q-item-section>
              <q-item-section>Notas de atualização</q-item-section>
            </q-item>
            <q-item clickable color="secondary">
              <q-item-section avatar>
                <q-icon name="history" color="primary"/>
              </q-item-section>
              <q-item-section>Histórico</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary">
              <q-item-section avatar>
                <q-icon name="settings" color="primary"/>
              </q-item-section>
              <q-item-section>Configurações</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable color="secondary">
              <q-item-section avatar>
                <q-icon name="help_outline" color="primary"/>
              </q-item-section>
              <q-item-section>Ajuda &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
          <q-btn color="primary" icon="logout" label="Sair..." push size="sm" v-close-popup @click="logout()"/>
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { clear } from 'src/util/Cookies'

export default defineComponent({
  name: 'UserSubmenuOptions',
  data () {
    const $q = useQuasar()
    // eslint-disable-next-line prefer-const
    let enableDarkMode = ref(false)

    watch(enableDarkMode, () => {
      $q.dark.set(enableDarkMode.value)
    })

    return {
      mobileData: ref(false),
      bluetooth: ref(false),
      enableDarkMode
    }
  },
  methods: {
    logout () {
      clear()
      this.$router.push('/').catch(() => { })
    }
  }
})
</script>
