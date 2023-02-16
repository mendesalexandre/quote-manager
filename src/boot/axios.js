import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { environment, user, ui } from '../environments/environment'

const baseUrl = `${environment.api.url}/${environment.api.version}`
/**
 * Contains API object to run HTTP requests
 */
const api = axios.create({ baseURL: baseUrl })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  /**
   * Contains the API object
   */
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  /**
   * Contains the baseUrl API
   */
  app.config.globalProperties.$baseUrl = baseUrl
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  api.interceptors.request.use(
    (config) => {
      const bearer = ''
      config.headers.Authorization = bearer
      config.headers['Content-Type'] = 'application/json'
      config.headers.Accept = '*/*'
      config.headers['api-secret'] = ''
    },
    (error) => {
      return Promise.reject(error)
    }
  )
})

export { axios, api }
