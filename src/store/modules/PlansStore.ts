import { getPlans } from 'src/composables/PlansService'
import { showLoading, LoadingStatus } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
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
    const plans = await getPlans()

    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('msg.plan.success'))

    return plans
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(mapError(error))
  }
}

export default { getPlansAvailable }
