<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-dialog v-model="confirm" ref="dialog">
    <div class="q-gutter-md">
      <q-chip color="primary" text-color="white">
        {{ envName }}
      </q-chip>
      <q-chip color="positive" text-color="white" icon="mdi-check-bold">
        {{ dbOnText }}
      </q-chip>
      <q-chip color="positive" text-color="white" icon="mdi-check-bold">
        {{ beOnText }}
      </q-chip>
      <q-separator></q-separator>
      <q-btn
        push
        @click="onOkClick()"
        class="bg-white text-primary q-ml-sm"
        :label="$t('view.newFinance.lbl.back')"
      />
    </div>
  </q-dialog>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { environment } from 'src/environments/environment'
import i18n from 'src/util/i18n'

export default defineComponent({
  name: 'ServerAvailability',
  data () {
    const text = `${i18n.global.t('view.userSubMenu.lbl.titleAbout').replace('%s', environment.app.env)} - ${environment.app.version}`
    return {
      confirm: false,
      envName: text,
      dbOnText: i18n.global.t('view.userSubMenu.lbl.dbOnText'),
      beOnText: i18n.global.t('view.userSubMenu.lbl.beOnText')
    }
  },
  emits: {
    ...useDialogPluginComponent.emits
  },
  methods: {
    onOkClick () {
      this.$emit('ok', null)
      this.$emit('hide')
    }
  }
})
</script>
