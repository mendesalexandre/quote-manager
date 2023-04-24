<template>
  <q-input
    filled
    :label="label"
    :rules="[(val) => (val && val.length > 0) || $t('components.lbl.inputRequire')]"
    :hint="customHint || $t('components.lbl.mandatory')"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputRequired',
  props: {
    label: {
      type: String,
      required: true
    },
    customHint: {
      type: String,
      required: false
    }
  }
})
</script>
