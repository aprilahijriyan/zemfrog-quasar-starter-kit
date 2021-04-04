import auth from '../middlewares/auth'
import force_404 from '../middlewares/force_404'
import is_logged_in from '../middlewares/is_logged_in'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ],
    beforeEnter: is_logged_in
  },
  {
    path: '/register',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ],
    beforeEnter: is_logged_in
  },
  {
    path: '/confirm/account/:token',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ConfirmAccount.vue') }
    ]
  },
  {
    path: '/request-password-reset',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RequestPasswordReset.vue') }
    ],
    beforeEnter: is_logged_in
  },
  {
    path: '/password-reset/:token',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PasswordReset.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/Index.vue')}
    ],
    beforeEnter: auth
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error-404',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    beforeEnter: force_404
  }
]

export default routes
