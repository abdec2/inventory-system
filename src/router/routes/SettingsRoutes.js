import { lazy } from 'react'

const SettingsRoutes = [
    {
        path: '/settings/role-permissions',
        component: lazy(() => import('../../views/mypages/settings/role_permissions')),
        exact: true
    },
    {
        path: '/settings/generate-locations',
        component: lazy(() => import('../../views/mypages/settings/generate_locations')),
        exact: true
    },
    {
        path: '/settings/warehouse',
        component: lazy(() => import('../../views/mypages/settings/warehouse')),
        exact: true
    },
    {
        path: '/settings/tax',
        component: lazy(() => import('../../views/mypages/settings/tax')),
        exact: true
    },
    {
        path: '/settings/user-profile',
        component: lazy(() => import('../../views/mypages/settings/user_profile')),
        exact: true
    },
    {
        path: '/settings/general-settings',
        component: lazy(() => import('../../views/mypages/settings/general_settings')),
        exact: true
    },
    {
        path: '/settings/currency',
        component: lazy(() => import('../../views/mypages/settings/currency')),
        exact: true
    },
    {
        path: '/settings/pos-settings',
        component: lazy(() => import('../../views/mypages/settings/pos_settings')),
        exact: true
    }
]

export default SettingsRoutes