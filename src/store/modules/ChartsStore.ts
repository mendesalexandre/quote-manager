import {
  getSumMoneyPerYear,
  getCalcExpenseByTagPerYear,
  getCalcEarningByTagPerYear
} from 'src/composables/ChartsService'

// Utils
import { showLoading, LoadingStatus } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'

/**
 * Contains the user properties/state.
 */
const state = {
  moneyPerYear: [],
  expensesByTagPerYear: [],
  earningsByTagPerYear: []
}

/**
 * Setters for properties
 */
const mutations = {
  setMoneyPerYear (state, value) {
    state.moneyPerYear = value
  },
  setExpensesPerYear (state, value) {
    state.expensesByTagPerYear = value
  },
  setEarningsPerYear (state, value) {
    state.earningsByTagPerYear = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getMoneyPerYear (state) {
    return state.moneyPerYear
  },
  getExpensesPerYear (state) {
    return state.expensesByTagPerYear
  },
  getEarningsPerYear (state) {
    return state.earningsByTagPerYear
  }
}

const actions = {
  async getSumMoneyPerYear ({ commit }, payload) {
    showLoading(LoadingStatus.ON)
    try {
      const chartResult = await getSumMoneyPerYear(payload.year)
      commit('setMoneyPerYear', chartResult)
      showLoading(LoadingStatus.OFF)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.chart.querySuccess'))
      return chartResult
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async getCalcExpenseByTagPerYear ({ commit }, payload) {
    showLoading(LoadingStatus.ON)
    try {
      const chartResult = await getCalcExpenseByTagPerYear(payload.year)
      commit('setExpensesPerYear', chartResult)
      showLoading(LoadingStatus.OFF)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.chart.querySuccess'))
      return chartResult
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async getCalcEarningByTagPerYear ({ commit }, payload) {
    showLoading(LoadingStatus.ON)
    try {
      const chartResult = await getCalcEarningByTagPerYear(payload.year)
      commit('setEarningsPerYear', chartResult)
      showLoading(LoadingStatus.OFF)
      if (payload.showMessage) notifySuccess(i18n.global.t('msg.chart.querySuccess'))
      return chartResult
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
