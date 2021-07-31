import { lazy } from 'react'

const PurchaseRoutes = [
    {
        path: '/purchase/list',
        component: lazy(() => import('../../views/mypages/purchase/list')),
        exact: true
    },
    {
        path: '/purchase/add',
        component: lazy(() => import('../../views/mypages/purchase/add')),
        exact: true
    },
    {
        path: '/purchase/import',
        component: lazy(() => import('../../views/mypages/purchase/import')),
        exact: true
    }
]

export default PurchaseRoutes