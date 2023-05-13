import { registerNewTask } from 'src/composables/TasksService'
import { TaskNew } from 'src/models/TaskModel'
import { showLoading, LoadingStatus } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import i18n from 'src/util/i18n'

/**
 * Contains the user properties/state.
 */
const state = {
}

/**
 * Setters for properties
 */
const mutations = {
}

/**
 * Getters for properties
 */
const getters = {
}

const actions = {
  /**
 * Do user login with credentials informed.
 * @param payload User login object
 * @returns User object or error
 */
  async newTask ({ commit }, payload: TaskNew) {
    try {
      showLoading(LoadingStatus.ON)
      const task = await registerNewTask(payload)
      showLoading(LoadingStatus.OFF)
      notifySuccess(i18n.global.t('msg.task.newSuccess'))
      return task
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
