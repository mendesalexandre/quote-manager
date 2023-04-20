import { getUser, newUser, updateUser, getUserHistory } from 'src/composables/UserService'

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
  darkMode: false,
  userHistory: []
}

/**
 * Setters for properties
 */
const mutations = {
  setUser (state, value) {
    state.user = value
  },
  setAuth (state, value) {
    state.auth = value
  },
  setPermissions (state, value) {
    state.permissions = value
  },
  setDarkMode (state, value) {
    state.darkMode = value
  },
  setUserHistory (state, value) {
    state.userHistory = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getUser (state) {
    return state.user
  },
  getAuth (state) {
    return state.auth
  },
  getPermissions (state) {
    return state.permissions
  },
  getDarkMode (state) {
    return state.darkMode
  },
  getUserHistory (state) {
    return state.userHistory
  }
}

const actions = {
  /**
   * Do user login with credentials informed.
   * @param payload User login object
   * @returns User object or error
   */
  async doLogin ({ commit }, payload) {
    const $router = (this as any).$router
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
        $router.push('/welcome')
      }
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  /**
   * Register a new user into application
   * @param payload User registration object
   * @returns User object or error
   */
  async registerUser ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const user = await newUser(payload)

      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.login.success'))

      return user
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
    }
  },
  async updateUser (payload) {
    try {
      showLoading(LoadingStatus.ON)
      console.log('3. user to update: ', payload)
      const user = await updateUser(payload)

      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.login.success'))

      return user
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
    }
  },
  async queryUserHistory ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const history = await getUserHistory()
      commit('setUserHistory', history)

      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.usr.historySuccess'))

      return history
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
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
