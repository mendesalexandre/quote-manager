import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/user/UserLogin.vue')
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
      // Home and tasks
      {
        path: '/welcome',
        name: 'Home',
        component: () => import('pages/home-screen/Welcome.vue')
      },
      {
        path: '/todo',
        name: 'TasksTodo',
        component: () => import('pages/tasks/TasksTodo.vue')
      },
      {
        path: '/done',
        name: 'TasksDone',
        component: () => import('pages/tasks/TasksDone.vue')
      },
      // Finances
      {
        path: '/finances',
        name: 'Finances',
        component: () => import('src/pages/finances/Finances.vue')
      },
      {
        path: '/close-to-overdue',
        name: 'CloseToOverdue',
        component: () => import('src/pages/finances/CloseToOverdue.vue')
      },
      {
        path: '/not-paid',
        name: 'NotPayed',
        component: () => import('src/pages/finances/NotPayed.vue')
      },
      {
        path: '/defaulters',
        name: 'Defaulters',
        component: () => import('src/pages/defaulters/Defaulters.vue')
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
      },
      // AdSense
      {
        path: '/presell',
        name: 'Pre-sell',
        component: () => import('src/pages/ad-words/PreSell.vue')
      },
      {
        path: '/campaigns',
        name: 'Campaigns',
        component: () => import('src/pages/ad-words/Campaigns.vue')
      },
      {
        path: '/ads-tips',
        name: 'AdsTips',
        component: () => import('src/pages/ad-words/AdsTips.vue')
      },
      {
        path: '/roi',
        name: 'Roi',
        component: () => import('src/pages/ad-words/ReturnOfInvestment.vue')
      }
    ]
  }
]

export default routes
