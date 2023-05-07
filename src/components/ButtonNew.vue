<template>
  <q-btn
    push
    rounded
    class="bg-secondary text-white"
    :label="$t('components.lbl.buttonNew')"
    icon="add"
    style="margin-right: 10px;"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonNew'
})
</script>
