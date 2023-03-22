import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// Modules
import user from './modules/User'
import bills from './modules/Bills'
import tasks from './modules/Tasks'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      bills,
      tasks
    }
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: process.env.DEBUGGING || undefined
  })

  return Store
})
