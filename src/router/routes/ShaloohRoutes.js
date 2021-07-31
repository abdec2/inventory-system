import { lazy } from 'react'

const ShaloohRoutes = [
    {
        path: '/order/pending',
        component: lazy(() => import('../../views/shalooh/orders/pending')),
        exact: true
    },
    {
        path: '/order/processing',
        component: lazy(() => import('../../views/shalooh/orders/processing')),
        exact: true
    },
    {
        path: '/order/shipped',
        component: lazy(() => import('../../views/shalooh/orders/shipped')),
        exact: true
    },
    {
        path: '/order/cancelled',
        component: lazy(() => import('../../views/shalooh/orders/cancelled')),
        exact: true
    },
    {
        path: '/picknpack',
        component: lazy(() => import('../../views/shalooh/picknpack')),
        exact: true
    }
]

export default ShaloohRoutes