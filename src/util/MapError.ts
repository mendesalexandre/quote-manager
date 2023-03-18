import i18n from './i18n'

/**
 * Translate a error message in a different languages, according to i18n.
 * @param errorMessage Error message to translate
 * @returns String containing the translated message
 */
export function mapError (errorMessage: string) {
  const err = errorMessage.toUpperCase().trim()

  if (typeof (err) !== 'string' || err === '') return i18n.global.t('msg.notMapped')
  else {
    switch (err) {
      case 'NETWORK ERROR': return i18n.global.t('msg.login.networkError')
      default: return errorMessage
    }
  }
}

export default { mapError }
