import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

/**
 * Function to be able to translate messages, functions or errors directly in TS files.
 */
const i18n = createI18n({
  // Set default locale
  locale: 'pt-BR',
  // Refer a global scope Composer instance of i18n
  globalInjection: true,
  // Set locale messages
  messages,
  // Must be set to 'false', to use Composition API
  legacy: false
})

export default i18n
