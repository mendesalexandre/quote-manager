import { getUser, newUser, updateUser } from 'src/composables/UserService'

// Utils
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/StatusModel'
import i18n from 'src/util/i18n'
import { mapError } from 'src/util/MapError'

/**
 * Contains the user properties/state.
 */
const state = {
  user: undefined,
  auth: '',
  permissions: [],
  darkMode: false
}

/**
 * Setters for properties
 */
const mutations = {
  setUser (state, value) {
    state.user = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getUser (state) {
    return state.user
  }
}

const actions = {
  /**
   * Do user login with credentials informed.
   * @param payload User login object
   * @returns User object or error
   */
  async doLogin ({ commit }, payload) {
    // const $router = (this as any).$router
    showLoading(LoadingStatus.ON)
    try {
      const user = await getUser(payload)
      if (user) {
        commit('setUser', user)
        commit('setAuth', user.bearerKey)
        commit('setPermissions', user.data.permissions)
        commit('setDarkMode', false)
        showLoading(LoadingStatus.OFF)
        notifySuccess(i18n.global.t('msg.login.success'))
        // $router.push('/welcome')
      }
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
