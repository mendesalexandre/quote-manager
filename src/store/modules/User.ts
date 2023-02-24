import { LocalStorage, date } from 'quasar'
import user from 'src/composables/User'

const state = {

}

const mutations = {

}

const actions = {
  async login ({ commit }, payload: any) {
    const userObject = user()

    try {
      commit('teste', true)
      await userObject.getUser(payload)
    } catch (error) {

    }
  }
}

const getters = {

}

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}
