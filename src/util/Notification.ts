import { Notify } from 'quasar'
// TODO: Need to implement i18n here
import { useI18n } from 'vue-i18n'

export function notifySuccess (message: string) {
  Notify.create({
    type: 'positive',
    message: message || 'Sucesso ao executar a ação', // this.$t('generic.success'),
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

export default { notifySuccess, notifyError }
