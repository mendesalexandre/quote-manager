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

  <q-expansion-item>
    <template v-slot:header>

      <q-item-section>
        <q-icon icon="mdi-filter-outline" color="text-primary" text-color="white" />
      </q-item-section>
      <q-item-section>
        Filtro
      </q-item-section>

      <q-item-section side></q-item-section>
    </template>

    <q-card>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
        eveniet doloribus ullam aliquid.
      </q-card-section>
    </q-card>
  </q-expansion-item>

      <q-separator />

  <!-- <div class="q-pa-md row items-start q-gutter-md">
    <div v-for="todo in filteredTasks" :key="todo.id" class="todo-item">
      <q-card class="">
        <q-card-section>
          <div class="text-h6">{{ todo.title }}</div>
          <div class="text-subtitle2">Description here</div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat icon="mdi-check" @click="completeTask(todo)" class="bg-primary text-white">Completar tarefa</q-btn>
          <q-btn flat icon="mdi-delete-forever" @click="removeTask(todo)" class="bg-primary text-white">Remover tarefa</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div> -->
</template>

<script lang="ts">

export default {
  setup () {
    return { }
  }
}
</script>

<style lang="sass">
</style>
