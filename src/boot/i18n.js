// import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app }) => {
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

  // This allow to use translation in typescript files
  app.config.globalProperties.$i18n = i18n

  // Tell app to use the I18n instance
  app.use(i18n)
}
