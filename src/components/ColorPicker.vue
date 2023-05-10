<template>
  <div class="q-gutter-md">
    <q-input
      filled
      v-model="colorSelected"
      :rules="['anyColor']"
      class="my-input"
      :label="label"
    >
      <template v-slot:append>
        <q-icon name="colorize" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-color @update:model-value="onColorPick" v-model="colorSelected" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  props: {
    label: {
      required: true,
      type: String
    },
    /**
     * Property to overwrite the default color '#027be3'
     */
    startColor: {
      require: false,
      type: String
    }
  },
  setup (props) {
    return {
      colorSelected: ref(props.startColor || '#027be3')
    }
  },
  methods: {
    onColorPick (value: any) {
      if (value !== undefined) {
        this.colorSelected = value
        this.$emit('input', this.colorSelected)
      }
    }
  }
})
</script>
