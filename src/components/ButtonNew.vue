<template>
  <q-btn
    outline
    rounded
    color="primary"
    :label="$t('components.lbl.buttonNew')"
    icon="add"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonNew',
  props: {
    dio: {
      type: String,
      required: false
    }
  }
})
</script>
