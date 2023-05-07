<template>
    <div class="menu">
        <p class="tasks-left-text"> {{ incompletedTasks.length }} task(s) left! </p>
        <button @click="showAll = !showAll" class="determine-todos">
            {{ showAll ? 'Hide Completed' : 'Show All' }}
        </button>
    </div>

    <q-input rounded autofocus placeholder="Add a new task" @keyup.enter="addTask"/>
    <div class="q-pa-md row items-start q-gutter-md">
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
    </div>

</template>

<script>
export default {
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todos') || '[]'),
      id: JSON.parse(localStorage.getItem('id') || 0),
      showAll: false
    }
  },

  computed: {
    filteredTasks () {
      return this.showAll ? this.todos : this.todos.filter((t) => !t.completed)
    },
    incompletedTasks () {
      return this.todos.filter((t) => !t.completed)
    }
  },

  watch: {
    todos: {
      handler (todos) {
        localStorage.setItem('todos', JSON.stringify(todos))
      },
      deep: true
    },
    id: {
      handler (id) {
        localStorage.setItem('id', id)
      }
    }
  },

  methods: {
    addTask (e) {
      const value = e.target.value.trim()
      if (value === '') return
      this.todos.push({
        id: this.id++,
        title: value,
        completed: false
      })
      e.target.value = ''
    },
    removeTask (task) {
      // Removes a todo from the array at the index of todo and of 1 obj
      this.todos.splice(this.todos.indexOf(task), 1)

      // Resets id counter to 0 if array is empty
      if (this.todos.length === 0) {
        this.id = 0
        localStorage.setItem('id', 0)
      }
    },
    completeTask (task) {
      task.title += ' - Completa'
      task.completed = true
    }
  }
}
</script>
