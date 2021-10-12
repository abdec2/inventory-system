import { lazy } from 'react'

const ProductRoutes = [
    {
        path: '/product/category',
        component: lazy(() => import('../../views/mypages/product/category')),
        exact: true
    },
    {
        path: '/product/category/import',
        component: lazy(() => import('../../views/mypages/product/category/ImportResult')),
        exact: true
    },
    {
        path: '/product/import',
        component: lazy(() => import('../../views/mypages/product/list/ImportResult')),
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
        path: '/product/adjustment',
        component: lazy(() => import('../../views/mypages/product/adjustment')),
        exact: true
    }, 
    {
        path: '/product/adjustment/add',
        component: lazy(() => import('../../views/mypages/product/adjustment/addAdjustment')),
        exact: true
    }, 
    {
        path: '/product/edit/:id',
        component: lazy(() => import('../../views/mypages/product/edit'))
    }, 
    {
        path: '/product/adjustment/edit/:id',
        component: lazy(() => import('../../views/mypages/product/adjustment/EditAdjustment'))
    }
]

export default ProductRoutes