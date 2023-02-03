<template>

  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-input outlined v-model="textSearch" placeholder="Pesquisar..." class="text-black" />

      <q-expansion-item expand-separator label="Página inicial" class="text-primary" icon="home" to="/welcome">
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
      </q-expansion-item>

      <q-expansion-item expand-separator icon="account_balance" label="Minhas finanças" default-opened class="text-primary">
        <q-item :inset-level="0.5" clickable v-ripple to="/finances">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-hand-holding-dollar"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Finanças</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/defaulters">
          <q-item-section avatar>
            <q-icon name="assignment_ind"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Inadimplentes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/reports">
          <q-item-section avatar>
            <q-icon name="mdi-chart-line"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Relatórios</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/tags">
          <q-item-section avatar>
            <q-icon name="mdi-tag-multiple"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Tags</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/indicators">
          <q-item-section avatar>
            <q-icon name="mdi-finance"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Indicadores</q-item-label>
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
