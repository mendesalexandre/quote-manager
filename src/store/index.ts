import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// Modules
import user from './modules/User'

export default store(function (/* { ssrContext } */) {
  const customStore = createStore({
    modules: {
      user
    }//,

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: process.env.DEBUGGING || false
  })

  return customStore
})
