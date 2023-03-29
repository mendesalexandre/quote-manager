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
  emits: ['onClick'],
  setup (props, { emit }) {
    const handleClick = () => {
      console.log('clicking in button search')
      emit('onClick')
    }
    return {
      handleClick
    }
  }
})
</script>
