<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <q-expansion-item
    expand-separator
    icon="mdi-filter-outline"
    label="Filtro"
    caption="Preencha os campos para o filtro"
    header-class="text-primary"
  >
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
          <q-input readonly
            input-class="cursor-pointer"
            label="Inicio"
            v-model="date"
            @click="showDatePicker"
            mask="##/####"
            fill-mask="##/####"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="monthPicker" transition-show="scale" transition-hide="scale">
                  <q-date
                    minimal
                    mask="MM/YYYY"
                    emit-immediately
                    default-view="Years"
                    v-model="date"
                    @input="hideDatePicker"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!--Buttons-->
          <q-btn outline rounded color="primary" label="Novo" icon="add"/>
          <q-btn outline rounded color="primary" label="Pesquisar" icon="search"/>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>

  <q-separator/>

</template>

<script lang="ts">

import { ref } from 'vue'
import moment from 'moment'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Finances',

  // $refs!: {
  //   input: HTMLInputElement
  // },

  setup () {
    return {
      billName: ref(''),
      tagName: ref(''),
      date: ref(moment().format('MM/YYYY').toString())
    }
  },

  methods: {
    showDatePicker (val: any, reason: any, details: any) {
      (this.$refs.monthPicker as any).show()
    },
    hideDatePicker (val: any, reason: any, details: any) {
      if (reason === 'month') {
        // eslint-disable-next-line dot-notation
        (this.$refs['monthPicker'] as any).hide()
      }
    }
  }
}
</script>

<style lang="sass">
</style>
