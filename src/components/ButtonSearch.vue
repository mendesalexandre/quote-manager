<template>
  <q-btn
    push
    rounded
    class="bg-secondary text-white"
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
