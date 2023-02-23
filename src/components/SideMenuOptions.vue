<template>

  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-input outlined v-model="textSearch" placeholder="Pesquisar..."/>

      <q-expansion-item expand-separator label="Página inicial" class="text-secondary" icon="home" to="/welcome">
        <q-item :inset-level="0.5" clickable v-ripple to="/todo">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-format-list-bulleted"/>
            </q-item-section>
          <q-item-section>
            <q-item-label>Tarefas à fazer</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/done">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-check-all"/>
            </q-item-section>
          <q-item-section>
            <q-item-label>Tarefas concluídas</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item expand-separator label="Minhas finanças" class="text-secondary" icon="account_balance" default-opened>
        <q-item :inset-level="0.5" clickable v-ripple to="/finances">
          <q-item-section avatar>
            <q-icon color="secondary" name="fa-solid fa-hand-holding-dollar"/>
            </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">Finanças</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/defaulters">
          <q-item-section avatar>
            <q-icon color="secondary" name="assignment_ind"/>
            </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">Inadimplentes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/reports">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-chart-line"/>
            </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">Relatórios</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/tags">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-tag-multiple"/>
            </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">Tags</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/indicators">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-finance"/>
            </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">Indicadores</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SideMenuOptions',
  setup () {
    return {
      textSearch: ref('')
    }
  }
})
</script>
