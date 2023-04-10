<template>
  <q-btn
    outline
    rounded
    color="primary"
    :label="$t('components.lbl.buttonSearch')"
    icon="search"
    @click="handleClick()"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonSearch',
  emits: ['onClickInfo'],
  setup (props, { emit }) {
    const handleClick = () => {
      emit('onClickInfo')
    }
    return {
      handleClick
    }
  }
})
</script>
