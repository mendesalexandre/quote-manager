<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <!-- <q-expansion-item expand-separator label="Filtro" class="text-primary" icon="mdi-filter-outline">
    <q-item :inset-level="0.5" clickable v-ripple to="/todo">
      <q-item-section avatar>
        <q-icon name="mdi-format-list-bulleted"/>
        </q-item-section>
      <q-item-section>
        <q-item-label class="text-secondary">Tarefas à fazer</q-item-label>
      </q-item-section>
    </q-item>
    <q-item :inset-level="0.5" clickable v-ripple to="/done">
      <q-item-section avatar>
        <q-icon name="mdi-check-all"/>
        </q-item-section>
      <q-item-section>
        <q-item-label class="text-secondary">Tarefas concluídas</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item> -->

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
          <q-btn icon="event" round color="primary">
            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
              <q-date v-model="proxyDate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancel" color="primary" flat v-close-popup />
                  <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
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

export default {
  setup () {
    const date = ref('2019/03/01')
    const proxyDate = ref('2019/03/01')
    return {
      billName: ref(''),
      tagName: ref(''),
      date,
      proxyDate,
      updateProxy () {
        proxyDate.value = date.value
      },

      save () {
        date.value = proxyDate.value
      }
    }
  }
}
</script>

<style lang="sass">
</style>
