<template>
  <q-btn flat round color="primary" icon="help" >
    <q-tooltip>{{ $t('components.lbl.helpButton') }}</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelpButton',
  setup () {
    return {
      date: ref('')
    }
  }
})
</script>
