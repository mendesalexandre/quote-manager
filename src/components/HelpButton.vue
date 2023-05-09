<template>
  <q-btn flat round color="secondary" icon="help" >
    <q-tooltip>{{ $t('components.lbl.helpButton') }}</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelpButton',
  setup () {
    return { }
  }
})
</script>
