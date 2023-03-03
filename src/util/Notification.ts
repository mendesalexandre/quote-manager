import { Notify } from 'quasar'
import i18n from './i18n'

export function notifySuccess (message: string) {
  Notify.create({
    type: 'positive',
    position: 'top',
    message: message || i18n.global.t('messages.success'),
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

export function notifyError (message: string) {
  Notify.create({
    type: 'negative',
    position: 'top',
    icon: 'report_problem',
    message: message || i18n.global.t('messages.error'),
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

export default { notifySuccess, notifyError }
