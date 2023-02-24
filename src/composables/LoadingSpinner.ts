import { useQuasar } from 'quasar'
import { LoadingStatus } from 'src/models/status'

/**
 * Bb
 * @returns Bb
 */
export default function loading () {
  const $q = useQuasar()
  /**
   * Show a loading spinner
   * @param status Loading status (can be ON or OFF)
   */
  const show = (status: LoadingStatus) => {
    if (status === LoadingStatus.ON) {
      $q.loading.show({
        message: 'Aguarde uns instantes...'
      })
    } else $q.loading.hide()
  }

  return {
    show
  }
}
