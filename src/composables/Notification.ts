import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'

/**
 * Aa
 * @returns Aaa
 */
export default function notification () {
  const { t } = useI18n()

  /**
   * bb
   * @param message Bb
   */
  const success = (message: string) => {
    Notify.create({
      type: 'positive',
      message: t('generic.success'),
      actions: [
        {
          label: 'Ok',
          color: 'white',
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          handler: () => { }
        }
      ]
    })
  }

  /**
   * Aa
   * @param message Aa
   */
  const error = (message: string) => {
    Notify.create({
      type: 'negative',
      message: message || 'Ocorreu um erro inesperado',
      actions: [
        {
          label: 'Ok',
          color: 'white',
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          handler: () => { }
        }
      ]
    })
  }

  return {
    success,
    error
  }
}
