import { Loading } from 'quasar'
import i18n from 'src/util/i18n'

export enum LoadingStatus {
  OFF,
  ON
}

/**
 * Function that show a loading at the center of the screen from quasar library
 * @param status LoadingStatus.ON or LoadingStatus.OFF, to show or hide loading
 */
export function showLoading (status: LoadingStatus) {
  if (status === LoadingStatus.ON) {
    Loading.show({
      message: i18n.global.t('msg.wait')
    })
  } else Loading.hide()
}

export default { showLoading, LoadingStatus }
