import { getUser } from 'src/composables/User'
import { User, UserLogin } from 'src/models/user'
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/status'
import i18n from 'src/util/i18n'
import { mapError } from 'src/util/MapError'

/**
 * Do user login with credentials informed.
 * @param payload User login object
 * @returns User object or error
 */
export async function doLogin (payload: UserLogin) /* : Promise<User> */ {
  try {
    showLoading(LoadingStatus.ON)
    const user: any = await getUser(payload)

    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('messages.login.success'))

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // this.$router.push('/welcome').catch(() => { })

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
    notifyError(mapError(error))
  }
}

export default { doLogin }
