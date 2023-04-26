<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      :default-opened="isMobile"
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
            <slot name="filter-content"></slot>
          </div>
          <div>
            <slot name="filter-buttons"></slot>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'FilterPanel',
  setup () {
    const $q = useQuasar()
    return {
      isMobile: ref(!$q.platform.is.mobile)
    }
  }
})
</script>
