import {
  getBills,
  getBillsCloseToOverdue,
  getBillsNotPayed,
  newBill
} from 'src/composables/BillsService'

// Utils
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/StatusModel'
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
  setBillsCloseToOverdueLength (state, value) {
    state.billsCloseToOverdueLength = value
  },
  setBillsOverdue (state, value) {
    state.billsNotPayed = value
  },
  setBillsNotPayedLength (state, value) {
    state.billsNotPayedLength = value
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
  getBillsCloseToOverdueLength (state) {
    return state.billsCloseToOverdueLength
  },
  getBillsNotPayed (state) {
    return state.billsNotPayed
  },
  getBillsNotPayedLength (state) {
    return state.billsNotPayedLength
  }
}

const actions = {
  async getBillsList ({ commit }, payload) {
    // const $router = (this as any).$router
    showLoading(LoadingStatus.ON)
    try {
      const bills = await getBills(payload)
      commit('setBills', bills)
      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.bill.querySuccess'))
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async getBillsCloseToOverdueList ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const bills = await getBillsCloseToOverdue()
      commit('setBillsCloseToOverdue', bills)
      commit('setBillsCloseToOverdueLength', bills?.length || 0)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.bill.queryCloseToOverdueSuccess'))
      showLoading(LoadingStatus.OFF)
      return bills
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
    }
  },
  async getBillsNotPayedList ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const bills = await getBillsNotPayed()
      commit('setBillsOverdue', bills)
      commit('setBillsNotPayedLength', bills?.length || 0)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.bill.queryBillNotPaidSuccess'))
      showLoading(LoadingStatus.OFF)
      return bills
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(mapError(error))
    }
  },
  async registerNewBill ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const newBillResp = await newBill(payload)
      showLoading(LoadingStatus.OFF)
      notifySuccess(newBillResp)
      return newBillResp
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
