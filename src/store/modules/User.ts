import { getUser } from 'src/composables/User'
import { UserLogin } from 'src/models/user'
import { notifySuccess, notifyError } from 'src/util/Notification'

// const state = {

// }

// const mutations = {

// }

// const actions = {
//   async login ({ commit }, payload: any) {
//     try {

//       commit('teste', true)
//       // await userObject.getUser(payload)
//     } catch (error) {

//     }
//   }
// }

// const getters = {

// }

// export default {
//   namespace: true,
//   state,
//   mutations,
//   actions,
//   getters
// }

export async function doLogin (payload: UserLogin) {
  try {
    const user = await getUser(payload)
    console.log('user in user.ts: ', user)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // this.$router.push('/welcome').catch(() => { })
    return user
  } catch (error: any) {
    notifyError(error)
  }
}
