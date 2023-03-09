import { getUser, updateUser } from 'src/composables/User'
import { UserLogin, UserNew, UserUpdate } from 'src/models/user'
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
export async function doLogin (payload: UserLogin) {
  try {
    showLoading(LoadingStatus.ON)
    const user: any = await getUser(payload)

    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('messages.login.success'))

    return user
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(mapError(error))
  }
}

/**
 * Register a new user into application
 * @param payload User registration object
 * @returns User object or error
 */
export async function newUser (payload: UserNew) {
  try {
    showLoading(LoadingStatus.ON)
    const user = await newUser(payload)

    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('messages.login.success'))

    return user
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(mapError(error))
  }
}

export async function updateUserInfo (payload: UserUpdate) {
  try {
    showLoading(LoadingStatus.ON)
    const user = await updateUser(payload)

    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('messages.login.success'))

    return user
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(mapError(error))
  }
}

export default { doLogin, newUser, updateUserInfo }
