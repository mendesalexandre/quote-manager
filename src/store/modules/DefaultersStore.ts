import {
  getDefaulters,
  newDefaulter,
  addValueDebt,
  subtractValueDebt,
  deleteDefaulter
} from 'src/composables/DefaultersService'

// Utils
import { showLoading, LoadingStatus } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'

/**
 * Contains the user properties/state.
 */
const state = {
  defaulters: []
}

/**
 * Setters for properties
 */
const mutations = {
  setDefaulters (state, value) {
    state.defaulters = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getDefaulters (state) {
    return state.defaulters
  }
}

const actions = {
  async getDefaultersList ({ commit }, payload) {
    showLoading(LoadingStatus.ON)
    try {
      const defaulters = await getDefaulters(payload)
      commit('setDefaulters', defaulters)
      showLoading(LoadingStatus.OFF)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.defaulter.success'))
      return defaulters
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async registerNewDefaulter ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const newDefaulterResp = await newDefaulter(payload)
      const defaulters = await getDefaulters(null)
      commit('setDefaulters', defaulters)
      showLoading(LoadingStatus.OFF)
      notifySuccess(newDefaulterResp)
      return newDefaulterResp
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async addDebt ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const addDebt = await addValueDebt(payload)
      showLoading(LoadingStatus.OFF)
      notifySuccess(addDebt)
      return addDebt
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async subtractDebt ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const subDebt = await subtractValueDebt(payload)
      showLoading(LoadingStatus.OFF)
      notifySuccess(subDebt)
      return subDebt
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async removeDefaulter ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const removeDefaulter = await deleteDefaulter(payload)
      const defaulters = await getDefaulters(null)
      commit('setDefaulters', defaulters)
      showLoading(LoadingStatus.OFF)
      notifySuccess(removeDefaulter)
      return removeDefaulter
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
