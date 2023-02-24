// import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app }) => {
  // Create I18n instance
  const i18n = createI18n({
    locale: 'pt-BR',
    globalInjection: true,
    messages,
    legacy: false
  })

  // This allow to use translation in typescript files
  app.config.globalProperties.$i18n = i18n

  // Tell app to use the I18n instance
  app.use(i18n)
}

// const i18n = createI18n({
//   locale: 'pt-BR',
//   globalInjection: true,
//   messages,
//   legacy: false
// })

// export default boot(({ app }) => {
//   // This allow to use translation in typescript files
//   app.config.globalProperties.$i18n = i18n
// })

// export { i18n }
