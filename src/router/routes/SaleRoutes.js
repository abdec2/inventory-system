import { lazy } from 'react'

const SaleRoutes = [
    {
        path: '/sale/list',
        component: lazy(() => import('../../views/mypages/sale/list')),
        exact: true
    },
    {
        path: '/sale/pos',
        component: lazy(() => import('../../views/mypages/sale/pos')),
        exact: true
    },
    {
        path: '/sale/add',
        component: lazy(() => import('../../views/mypages/sale/add')),
        exact: true
    },
    {
        path: '/sale/import',
        component: lazy(() => import('../../views/mypages/sale/import')),
        exact: true
    }
]

export default SaleRoutes