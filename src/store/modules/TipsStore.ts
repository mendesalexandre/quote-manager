import { getTips } from 'src/composables/TipsService'

// Utils
import { showLoading, LoadingStatus } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'

/**
 * Contains the user properties/state.
 */
const state = {
  tips: []
}

/**
 * Setters for properties
 */
const mutations = {
  setTips (state, value) {
    state.tips = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getTips (state) {
    return state.tips
  }
}

const actions = {
  // async registerNewTip ({ commit }, payload) {
  //   showLoading(LoadingStatus.ON)
  //   try {
  //     const user = await getUser(payload)
  //     if (user) {
  //       commit('setUser', user)
  //       commit('setAuth', user.bearerKey)
  //       commit('setPermissions', user.data.permissions)
  //       commit('setDarkMode', false)
  //       showLoading(LoadingStatus.OFF)
  //       notifySuccess(i18n.global.t('msg.login.success'))
  //       // $router.push('/welcome')
  //     }
  //   } catch (error: any) {
  //     showLoading(LoadingStatus.OFF)
  //     notifyError(error)
  //   }
  // },
  async getTipsList ({ commit }, payload) {
    try {
      const tips = await getTips(payload)
      commit('setTips', tips)
      showLoading(LoadingStatus.OFF)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.login.success'))
      return tips
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
