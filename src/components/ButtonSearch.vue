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
  props: {
    dio: {
      type: String,
      required: false
    }
  },
  emits: ['onClickInfo'],
  setup (props, { emit }) {
    const handleClick = () => {
      console.log('1. clicking in button search')
      emit('onClickInfo')
    }
    return {
      handleClick
    }
  }
})
</script>
