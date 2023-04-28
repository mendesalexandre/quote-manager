import { getTags, newTag, deleteTag } from 'src/composables/TagsService'

// Utils
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/StatusModel'
import i18n from 'src/util/i18n'

/**
 * Contains the user properties/state.
 */
const state = {
  tags: []
}

/**
 * Setters for properties
 */
const mutations = {
  setTags (state, value) {
    state.tags = value
  }
}

/**
 * Getters for properties
 */
const getters = {
  getTags (state) {
    return state.tags
  }
}

const actions = {
  async getTagsList ({ commit }, payload) {
    try {
      showLoading(LoadingStatus.ON)
      const tags = await getTags()
      if (tags) {
        commit('setTags', tags)
        showLoading(LoadingStatus.OFF)
        if (payload.showMessage) notifySuccess(i18n.global.t('msg.tag.querySuccess'))
        return tags
      }
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async newTag ({ commit }, payload: any) {
    try {
      showLoading(LoadingStatus.ON)
      const tags = await newTag(payload)
      if (tags) {
        showLoading(LoadingStatus.OFF)
        notifySuccess(i18n.global.t('msg.tag.newSuccess'))
      }
    } catch (error: any) {
      showLoading(LoadingStatus.OFF)
      notifyError(error)
    }
  },
  async deleteTag ({ commit }, tagName: string) {
    try {
      showLoading(LoadingStatus.ON)
      const tags = await deleteTag(tagName)
      if (tags) {
        showLoading(LoadingStatus.OFF)
        notifySuccess(i18n.global.t('msg.tag.deleteSuccess'))
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
