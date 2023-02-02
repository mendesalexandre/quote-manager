// import { boot } from 'quasar/wrappers'
// import axios from 'axios'

// const baseURL = process.env.API + '/v3/'

// const baseURLV2 = process.env.API + '/v2/'

// const apiKey = axios.create({ baseURL })

// const apiBearer = axios.create({ baseURL })

// const apiBearerV2 = axios.create({ baseURL: baseURLV2 })

// export default boot(({ app, router, store }) => {
//   apiKey.interceptors.request.use(
//     (config) => {
//       const apiKeyToken = 'Api-Key ODJiZjdkNzZjZTc1YTE0Zjg0YWQzNTBk'
//       config.headers.Authorization = apiKeyToken

//       return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     }
//   )

//   apiBearer.interceptors.request.use(
//     (config) => {
//       const bearerToken = store.getters['auth/getBearerToken']
//       config.headers.Authorization = bearerToken
//       return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     }
//   )

//   apiBearerV2.interceptors.request.use(
//     (config) => {
//       const bearerToken = store.getters['auth/getBearerToken']
//       config.headers.Authorization = bearerToken
//       return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     }
//   )
// })

// export { apiKey, apiBearer, apiBearerV2 }
