import { lazy } from 'react'

const ProductRoutes = [
    {
        path: '/product/category',
        component: lazy(() => import('../../views/mypages/product/category')),
        exact: true
    },
    {
        path: '/product/list',
        component: lazy(() => import('../../views/mypages/product/list')),
        exact: true
    },
    {
        path: '/product/add',
        component: lazy(() => import('../../views/mypages/product/add')),
        exact: true
    },
    {
        path: '/product/import',
        component: lazy(() => import('../../views/mypages/product/import')),
        exact: true
    },
    {
        path: '/product/adjustment',
        component: lazy(() => import('../../views/mypages/product/adjustment')),
        exact: true
    }
]

export default ProductRoutes