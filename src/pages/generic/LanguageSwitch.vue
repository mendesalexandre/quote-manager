<template>
  <q-select
    v-model="locale"
    :options="languagesAvailable"
    :label="$t('generic.language')"
    filled
    emit-value
    map-options
    color="primary"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from 'src/environments/environment'

export default defineComponent({
  name: 'LanguageSwitch',
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
      languagesAvailable: languages
    }
  }
})
</script>
