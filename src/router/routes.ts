import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/user/UserLogin.vue')//,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/home-screen/HomeScreen.vue'),
    children: [
      {
        path: '/todo',
        name: 'Tasks',
        component: () => import('pages/tasks/TasksTodo.vue')
      },
      {
        path: '/done',
        name: 'Tasks',
        component: () => import('pages/tasks/TasksDone.vue')
      },
      {
        path: '/welcome',
        name: 'Home',
        component: () => import('pages/home-screen/Welcome.vue')
      },
      {
        path: '/finances',
        name: 'Finances',
        component: () => import('src/pages/finances/Finances.vue')
      },
      {
        path: '/defaulters',
        name: 'Defaulters',
        component: () => import('src/pages/finances/Defaulters.vue')
      },
      {
        path: '/reports',
        name: 'Reports',
        component: () => import('src/pages/finances/Reports.vue')
      },
      {
        path: '/tags',
        name: 'Tags',
        component: () => import('src/pages/finances/Tags.vue')
      },
      {
        path: '/indicators',
        name: 'Indicators',
        component: () => import('src/pages/finances/Indicators.vue')
      }
    ]
  }
]

export default routes
