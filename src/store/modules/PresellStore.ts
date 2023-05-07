import { newPresell, getPresell } from 'src/composables/PresellService'

// Utils
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/StatusModel'
import i18n from 'src/util/i18n'

/**
 * Contains the pre-sell properties/state.
 */
const state = {
  presells: []
}

/**
 * Setters for properties
 */
const mutations = {
  setPresells (state, value) {
    state.presells = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getPresells (state) {
    return state.presells
  }
}

const actions = {
  /**
   * Register new pre-sell
   * @param payload Object with the data
   * @returns List of the pre-sells
   */
  async registerNewPresell ({ commit }, payload) {
    // const $router = (this as any).$router
    showLoading(LoadingStatus.ON)
    try {
      const presell = await newPresell(payload)
      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.presell.newSuccess'))
      return presell
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async getPresellList ({ commit }, payload) {
    showLoading(LoadingStatus.ON)
    try {
      const presells = await getPresell(payload)
      commit('setPresells', presells)
      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.presell.querySuccess'))
      return presells
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