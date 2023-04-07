import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// Modules
import user from './modules/UserStore'
import bills from './modules/BillsStore'
import tasks from './modules/TasksStore'
import tags from './modules/TagsStore'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      bills,
      tags,
      tasks
    }
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: process.env.DEBUGGING || undefined
  })

  return Store
})
