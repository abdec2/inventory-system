import { lazy } from 'react'

const QuotationRoutes = [
    {
        path: '/quotation/list',
        component: lazy(() => import('../../views/mypages/quotation/list')),
        exact: true
    },
    {
        path: '/quotation/add',
        component: lazy(() => import('../../views/mypages/quotation/add')),
        exact: true
    }
]

export default QuotationRoutes