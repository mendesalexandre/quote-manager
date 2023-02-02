<template>

  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-input outlined v-model="textSearch" placeholder="Pesquisar..." class="text-black" />

      <q-expansion-item expand-separator label="Página inicial" default-opened class="text-primary" icon="home" to="/welcome"/>

      <q-expansion-item expand-separator icon="account_balance" label="Minhas finanças" default-opened class="text-primary">
        <q-item :inset-level="0.5" clickable v-ripple to="/finances">
          <q-item-section avatar>
            <q-icon name="request_quote"/>
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
            <q-icon name="leaderboard"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Relatórios</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/tags">
          <q-item-section avatar>
            <q-icon name="local_offer"/>
            </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary">Tags</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/indicators">
          <q-item-section avatar>
            <q-icon name="assignment_ind"/>
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
