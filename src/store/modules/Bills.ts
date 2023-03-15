import { getBills, getBillsCloseToOverdue, getBillsNotPayed } from 'src/composables/Bills'

// Utils
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/status'
import i18n from 'src/util/i18n'
import { mapError } from 'src/util/MapError'

/**
 * Contains the bills properties/state.
 */
const state = {
  bills: '',
  billsCloseToOverdue: [],
  billsOverdue: []
}

/**
 * Setters for properties
 */
const mutations = {
  setBills (state, value) {
    state.bills = value
  },
  setBillsCloseToOverdue (state, value) {
    state.billsCloseToOverdue = value
  },
  setBillsOverdue (state, value) {
    state.billsNotPayed = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getBills (state) {
    return state.bills
  },
  getBillsCloseToOverdue (state) {
    return state.billsCloseToOverdue
  },
  getBillsNotPayed (state) {
    return state.billsNotPayed
  }
}

const actions = {
  async getBills ({ commit }, payload) {
    const $router = (this as any).$router
    showLoading(LoadingStatus.ON)
    try {
      const bills = await getBills(payload)
      commit('setBills', bills)
      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.login.success'))
      $router.push('/home')
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async getBillsCloseToOverdue ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const bills = await getBillsCloseToOverdue()
      commit('setBillsCloseToOverdue', bills)
      showLoading(LoadingStatus.OFF)
      return bills
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
    }
  },
  async getBillsNotPayed ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const bills = await getBillsNotPayed(payload)
      commit('setBillsOverdue', bills)
      showLoading(LoadingStatus.OFF)
      return bills
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
