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
      if (bills) {
        console.log('commit: ', commit)
        commit('setBills', bills)
        showLoading(LoadingStatus.OFF)
        notifySuccess(i18n.global.t('msg.login.success'))
        $router.push('/welcome')
      }
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async getBillsCloseToOverdue ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const user = await getBillsCloseToOverdue()

      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.login.success'))

      return user
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
    }
  },
  async getBillsNotPayed (payload) {
    try {
      showLoading(LoadingStatus.ON)
      const user = await getBillsNotPayed(payload)

      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.login.success'))

      return user
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
