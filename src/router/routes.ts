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
    component: () => import('pages/home-screen/HomeScreen.vue'),
    children: [
      {
        path: '/welcome',
        component: () => import('pages/home-screen/Welcome.vue')
      },
      {
        path: '/finances',
        component: () => import('src/pages/finances/Finances.vue')
      },
      {
        path: '/defaulters',
        component: () => import('src/pages/finances/Defaulters.vue')
      },
      {
        path: '/reports',
        component: () => import('src/pages/finances/Reports.vue')
      },
      {
        path: '/tags',
        component: () => import('src/pages/finances/Tags.vue')
      },
      {
        path: '/indicators',
        component: () => import('src/pages/finances/Indicators.vue')
      }
    ]
  }
]

export default routes
