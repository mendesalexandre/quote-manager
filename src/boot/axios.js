import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { environment } from '../environments/environment'

const baseUrl = `${environment.api.url}/${environment.api.version}`

/**
 * Contains API to user login exclusively
 */
const apiLogin = axios.create({ baseURL: baseUrl })

/**
 * Contains API object to run HTTP requests with user authentication (bearer)
 */
const apiAuth = axios.create({ baseURL: baseUrl })

/**
 * Contains API exclusively to user registration (request a different headers)
 */
const apiNewUser = axios.create({ baseURL: baseUrl })

export default boot(({ app, router, store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  /**
   * Contains the API object
   */
  app.config.globalProperties.$apiLogin = apiLogin
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$apiNewUser = apiNewUser
  app.config.globalProperties.$apiAuth = apiAuth

  /**
   * Contains the baseUrl API
   */
  app.config.globalProperties.$baseUrl = baseUrl
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  apiLogin.interceptors.request.use(
    (config) => {
      config.headers['Content-Type'] = 'application/json'
      config.headers.Accept = '*/*'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  apiNewUser.interceptors.request.use(
    (config) => {
      config.headers['Content-Type'] = 'application/json'
      config.headers.Accept = '*/*'
      config.headers.x_client_secret = environment.api.secret
      config.headers.x_client_id = environment.api.clientId
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  apiAuth.interceptors.request.use(
    (config) => {
      const bearer = store.getters['user/getAuth']
      config.headers.Authorization = bearer
      config.headers['Content-Type'] = 'application/json'
      config.headers.Accept = '*/*'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
})

export { apiLogin, apiNewUser, apiAuth }
