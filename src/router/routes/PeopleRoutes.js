import { lazy } from 'react'

const PeopleRoutes = [
    {
        path: '/people/user',
        component: lazy(() => import('../../views/mypages/people/list_user')),
        exact: true
    },
    {
        path: '/people/customer',
        component: lazy(() => import('../../views/mypages/people/list_customer')),
        exact: true
    },
    {
        path: '/people/biller',
        component: lazy(() => import('../../views/mypages/people/list_biller')),
        exact: true
    },
    {
        path: '/people/supplier',
        component: lazy(() => import('../../views/mypages/people/list_supplier')),
        exact: true
    }
]

export default PeopleRoutes