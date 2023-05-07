import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
export default route(function ({ store /*, ssrContext */ }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    )
  })

  // Router guard
  Router.beforeEach((to, from, next) => {
    // console.log('1. to: ', to)
    // console.log('2. from: ', from)
    // console.log('3. next: ', next)
    if (to.name === undefined) {
      next() // First access
    } else {
      const destination = to.name?.toString() || ''
      const permissions = store.getters['user/getPermissions']
      // console.log('4. permissions: ', permissions)
      // console.log('5. permissions !== undefined: ', permissions !== undefined)
      // console.log('6. permissions.length > 0: ', permissions.length > 0)
      // console.log('7. destination !== \'\': ', destination !== '')
      // console.log('8. destination: ', destination)
      if (destination === 'Welcome') next()
      else if (permissions !== undefined && permissions.length > 0 && destination !== '') {
        const hasPermission = permissions
          .filter(p => p.name.toUpperCase().trim() === destination.toUpperCase().trim())
          .map((p) => p.hasAccess)
        // console.log('9. hasPermission: ', hasPermission[0])
        // console.log('10. hasPermission is true: ', hasPermission[0] === true)
        if (hasPermission[0]) {
          // console.log('11. next')
          next()
        } else {
          // console.log('12. return false')
          return false
        }
      } else next({ path: '/' })
    }
  })

  return Router
})
