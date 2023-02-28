import { getUser } from 'src/composables/User'
import { User, UserLogin } from 'src/models/user'
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/status'

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

/**
 *
 * @param payload User login object
 * @returns User object or
 */
export async function doLogin (payload: UserLogin) /* : Promise<User> */ {
  try {
    showLoading(LoadingStatus.ON)
    const user: any = await getUser(payload)
    console.log('user in user.ts: ', user)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // this.$router.push('/welcome').catch(() => { })

    showLoading(LoadingStatus.OFF)
    notifySuccess('Sucesso ao logar')

    return new User(
      user.data.name,
      user.data.userName,
      user.data.password,
      user.data.email,
      user.data.loggedIn,
      user.data.active,
      false,
      user.data.id
    )
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(error)
  }
}

export default { doLogin }
