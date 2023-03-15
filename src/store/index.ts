import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// Modules
import user from './modules/User'
import bills from './modules/Bills'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      bills
    }
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: process.env.DEBUGGING || undefined
  })

  return Store
})
