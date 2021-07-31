import { lazy } from 'react'

const ReturnRoutes = [
    {
        path: '/return/sale',
        component: lazy(() => import('../../views/mypages/returns/sale')),
        exact: true
    },
    {
        path: '/return/purchase',
        component: lazy(() => import('../../views/mypages/returns/purchase')),
        exact: true
    }
]

export default ReturnRoutes