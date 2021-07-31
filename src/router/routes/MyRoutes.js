import { lazy } from 'react'

const MyRoutes = [
    {
        path: '/dashboard/home',
        component: lazy(() => import('../../views/dashboard/home')),
        exact: true
    }, 
    {
        path: '/account-settings',
        component: lazy(() => import('../../views/mypages/account-settings')),
        exact: true
    },
    {
        path: '/reports',
        component: lazy(() => import('../../views/mypages/reports')),
        exact: true
    },
    {
        path: '/register',
        component: lazy(() => import('../../views/pages/authentication/RegisterV2')),
        layout: 'BlankLayout',
        meta: {
          authRoute: true
        }
    },
    {
        path: '/forgot-password',
        component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV2.js')),
        layout: 'BlankLayout',
        meta: {
          authRoute: true
        }
    },
    {
        path: '/login',
        component: lazy(() => import('../../views/pages/authentication/Login')),
        layout: 'BlankLayout',
        meta: {
          authRoute: true
        }
    }
]

export default MyRoutes