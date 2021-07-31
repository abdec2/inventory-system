import { lazy } from 'react'

const ExpenseRoutes = [
    {
        path: '/expense/add',
        component: lazy(() => import('../../views/mypages/expenses/add')),
        exact: true
    },
    {
        path: '/expense/list',
        component: lazy(() => import('../../views/mypages/expenses/list')),
        exact: true
    }
]

export default ExpenseRoutes