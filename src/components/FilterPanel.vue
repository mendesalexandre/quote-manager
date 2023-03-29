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
            <!--Bill name-->
            <q-input filled :label="$t('view.finance.lbl.billName')">
              <template v-slot:prepend>
                <q-icon name="mdi-text-box-outline" />
              </template>
            </q-input>
            <!--Tag name-->
            <q-input filled :label="$t('view.finance.lbl.tagName')">
              <template v-slot:prepend>
                <q-icon name="mdi-tag" />
              </template>
            </q-input>
            <!--Date picker-->
            <month-picker></month-picker>
            <!--Action buttons-->
            <button-new></button-new>
            <button-search @onClick="handleClick()"></button-search>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue'
import ButtonNew from './ButtonNew.vue'
import ButtonSearch from './ButtonSearch.vue'
import MonthPicker from './MonthPicker.vue'

export default defineComponent({
  name: 'FilterPanel',
  components: {
    ButtonNew,
    ButtonSearch,
    MonthPicker
  },
  props: {
    label: {
      type: String,
      required: false
    }
  },
  emits: ['onClickSearchButton'],
  setup (props, { emit }) {
    const handleClick = () => {
      console.log('clicking')
      emit('onClickSearchButton')
    }
    return {
      handleClick
    }
  }
})
</script>
