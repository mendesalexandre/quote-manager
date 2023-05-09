<template>
  <q-btn
    push
    rounded
    class="bg-secondary text-white"
    :label="$t('components.lbl.buttonReturn')"
    icon="arrow_back_ios_new"
    style="margin-right: 10px;"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonBack'
})
</script>
