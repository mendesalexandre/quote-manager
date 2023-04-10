<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      expand-separator
      icon="mdi-filter-outline"
      :label="$t('components.lbl.filterTitle')"
      :caption="$t('components.lbl.filterCaption')"
      header-class="text-primary"
    >
      <q-separator/>
      <div></div>
      <q-card>
        <q-card-section>
          <div class="q-pa-md row items-start q-gutter-md">
            <slot name="filter-content">
            </slot>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterPanel',
  props: {
    label: {
      type: String,
      required: false
    }
  },
  setup () {
    return { }
  }
})
</script>
