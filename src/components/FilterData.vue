<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      expand-separator
      icon="mdi-filter-outline"
      label="Filtro"
      caption="Preencha os campos para o filtro"
      header-class="text-primary"
    >
      <q-separator/>
      <div></div>
      <q-card>
        <q-card-section>

          <div class="q-pa-md row items-start q-gutter-md">
            <!--Bill name-->
            <q-input filled v-model="billName" label="Nome da conta">
              <template v-slot:prepend>
                <q-icon name="mdi-text-box-outline" />
              </template>
            </q-input>
            <!--Tag name-->
            <q-input filled v-model="tagName" label="Nome da tag">
              <template v-slot:prepend>
                <q-icon name="mdi-tag" />
              </template>
            </q-input>
            <!--Date picker-->
            <MonthPickerVue/>
            <!-- <q-input filled label="Mês/Ano" v-model="currentDate" mask="##/####" fill-mask="##/####">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale" :breakpoint="0">
                    <q-date v-model="currentDate" years-in-month-view default-view="Months" emit-immediately
                      @update:model-value="onUpdateMv"
                      :key="dpKey"
                      minimal mask="MM/YYYY"
                    ></q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input> -->

            <!--Buttons-->
            <ButtonNew/>
            <ButtonSearch/>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ButtonNew from './ButtonNew.vue'
import ButtonSearch from './ButtonSearch.vue'
import MonthPickerVue from './MonthPicker.vue'

export default defineComponent({
  name: 'FilterData',
  components: {
    ButtonNew,
    ButtonSearch,
    MonthPickerVue
  },
  props: {
    label: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      billName: ref(''),
      tagName: ref(''),
      currentDate: ref(''),
      onUpdateMv: ref(''),
      dpKey: ref('')
    }
  }
})
</script>
