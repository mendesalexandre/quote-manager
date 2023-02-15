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
          <q-input filled
            label="Mês/Ano"
            v-model="currentDate"
            mask="##/####"
            fill-mask="##/####"
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale" :breakpoint="0">
                  <q-date
                    v-model="currentDate"
                    years-in-month-view
                    default-view="Months"
                    emit-immediately
                    @update:model-value="onUpdateMv"
                    :key="dpKey"
                    minimal mask="MM/YYYY"
                  ></q-date>
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
import { ref, computed } from 'vue'
import moment from 'moment'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Finances',
  setup () {
    const currentDate = ref(moment().format('MM/YYYY').toString())
    const qDateProxy = ref()
    const dpKey = ref(Date.now())
    const displayDate = computed(() => currentDate.value ?? 'Escolha o mês')
    function onUpdateMv (v: any, r: any) {
      dpKey.value = Date.now()
      r === 'month' && qDateProxy.value.hide()
    }
    return {
      billName: ref(''),
      tagName: ref(''),
      currentDate,
      displayDate,
      qDateProxy,
      dpKey,
      onUpdateMv
    }
  }
}
</script>

<style lang="sass">
</style>
