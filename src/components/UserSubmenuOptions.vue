<template>
  <!-- <q-button>
      <q-chip>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-chip>

      <q-menu fit>
        <q-list style="width: 175px">
          <q-item clickable class="bg-tertiary text-black">
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
          </q-item>
        </q-list>
      </q-menu>

  </q-button> -->
   <div>
    <q-btn-dropdown color="secondary" label="Olá Dionei">
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Atalhos</div>
          <div>
            <q-btn outline rounded color="primary" label="Config." icon="settings"/>
          </div>
          <div>
            <q-btn outline rounded color="primary" label="Ajuda" icon="help_outline"/>
          </div>
          <div>
            <q-toggle v-model="enableDarkMode" checked-icon="brightness_5" unchecked-icon="bedtime" label="Trocar tema"/>
          </div>
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">Dionei Beilke</div>

          <q-btn color="primary" label="Sair..." push size="sm" v-close-popup />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'UserSubmenuOptions',
  setup () {
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
  }
})
</script>
