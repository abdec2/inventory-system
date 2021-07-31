import { lazy } from 'react'

const TransferRoutes = [
    {
        path: '/transfer/list',
        component: lazy(() => import('../../views/mypages/transfer/list')),
        exact: true
    },
    {
        path: '/transfer/add',
        component: lazy(() => import('../../views/mypages/transfer/add')),
        exact: true
    },
    {
        path: '/transfer/import',
        component: lazy(() => import('../../views/mypages/transfer/import')),
        exact: true
    }
]

export default TransferRoutes