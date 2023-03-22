<template>
  <q-btn
    outline
    rounded
    color="primary"
    :label="$t('components.buttonSearch')"
    icon="add"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonSearch',
  props: {
    dio: {
      type: String,
      required: false
    }
  }
})
</script>
