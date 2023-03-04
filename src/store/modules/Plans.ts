import { getPlans } from 'src/composables/Plans'
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
export async function getPlansAvailable () {
  try {
    showLoading(LoadingStatus.ON)
    const plans: any = await getPlans()

    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('messages.login.success'))

    return plans
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(mapError(error))
  }
}

export default { getPlansAvailable }
