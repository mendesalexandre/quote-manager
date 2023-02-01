import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Main.vue')//,
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/home',
    component: () => import('pages/home-screen/HomeScreen.vue')
  }
]

export default routes
