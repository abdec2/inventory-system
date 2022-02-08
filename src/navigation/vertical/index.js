// ** Navigation sections imports
// import apps from './apps'
// import pages from './pages'
// import forms from './forms'
// import tables from './tables'
// import others from './others'
// import dashboards from './dashboards'
// import uiElements from './ui-elements'
// import chartsAndMaps from './charts-maps'

// // ** Merge & Export
// export default [...dashboards, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]
import {Home, List, CreditCard, Circle, ShoppingBag, ShoppingCart, Folder, FileText, Share2, CornerUpLeft, User, Package, Settings} from 'react-feather'

const dashboard = [
    {
        header: ' '
    },
    {
        id: 'dashboard',
        title: 'Dashboards',
        icon: <Home size={20} />,
        navLink: '/dashboard/home'
    }
]

const products = [
    {
        id: 'products',
        title: 'Products',
        icon: <List size={20} />,
        children: [
            {
                id: 'category',
                title: 'Category',
                icon: <Circle size={20} />,
                navLink: '/product/category'
            },
            {
                id: 'product-list',
                title: 'Product List',
                icon: <Circle size={20} />,
                navLink: '/product/list'
            },
            {
                id: 'add_product',
                title: 'Add Product',
                icon: <Circle size={20} />,
                navLink: '/product/add'
            },
            {
                id: 'adjustment-list',
                title: 'Adjustment List',
                icon: <Circle size={20} />,
                navLink: '/product/adjustment', 
                disabled: true
            }, 
            {
                id: 'add-adjustment',
                title: 'Add Adjustment',
                icon: <Circle size={20} />,
                navLink: '/product/adjustment/add', 
                disabled: true
            }
        ]
    }
]

const purchase = [
    {
        id: 'purchase',
        title: 'Purchase',
        icon: <CreditCard size={20} />, 
        children: [
            {
                id: 'purchase-list',
                title: 'Purchase List',
                icon: <Circle size={20} />,
                navLink: '/purchase/list'
            },
            {
                id: 'add-purchase',
                title: 'Add Purchase',
                icon: <Circle size={20} />,
                navLink: '/purchase/add'
            },
            {
                id: 'import-purchase',
                title: 'Import Purchase',
                icon: <Circle size={20} />,
                navLink: '/purchase/import'
            }
        ]
    }
]

const order = [
    {
        header: 'For Shalooh'
    },
    {
        id: 'orders',
        title: 'Orders',
        icon: <ShoppingBag size={20} />, 
        children: [
            {
                id: 'pending',
                title: 'Pending',
                icon: <Circle size={20} />,
                navLink: '/order/pending'
            },
            {
                id: 'processing',
                title: 'Processing',
                icon: <Circle size={20} />,
                navLink: '/order/processing'
            },
            {
                id: 'shipped',
                title: 'Shipped',
                icon: <Circle size={20} />,
                navLink: '/order/shipped'
            },
            {
                id: 'cancelled',
                title: 'Cancelled',
                icon: <Circle size={20} />,
                navLink: '/order/cancelled'
            }
        ]
    }
]

const sales = [
    {
        id: 'sales',
        title: 'Sales',
        icon: <ShoppingCart size={20} />,
        children: [
            {
                id: 'sale-list',
                title: 'Sales List',
                icon: <Circle size={20} />,
                navLink: '/sale/list'
            },
            {
                id: 'pso',
                title: 'POS',
                icon: <Circle size={20} />,
                navLink: '/sale/pos'
            },
            {
                id: 'add-sale',
                title: 'Add Sale',
                icon: <Circle size={20} />,
                navLink: '/sale/add'
            },
            {
                id: 'import-sale',
                title: 'Import Sale',
                icon: <Circle size={20} />,
                navLink: '/sale/import'
            }
        ]
    }
]

const expenses = [
    {
        id: 'expense',
        title: 'Expenses',
        icon: <Folder size={20} />,
        children: [
            {
                id: 'add-expense',
                title: 'Add Expense',
                icon: <Circle size={20} />,
                navLink: '/expense/add'
            },
            {
                id: 'expense-list',
                title: 'Expense List',
                icon: <Circle size={20} />,
                navLink: '/expense/list'
            }
        ]
    }
]

const quotation = [
    {
        id: 'quotation',
        title: 'Quotation',
        icon: <FileText size={20} />,
        children: [
            {
                id: 'list-quotation',
                title: 'List Quotation',
                icon: <Circle size={20} />,
                navLink: '/quotation/list',
                disabled: true
            }, 
            {
                id: 'add-quotation',
                title: 'Add Quotation',
                icon: <Circle size={20} />,
                navLink: '/quotation/add',
                disabled: true
            }
        ]

    }
]

const transfer = [
    {
        id: 'transfer', 
        title: 'Transfer', 
        icon: <Share2 size={20} />,
        children: [
            {
                id: 'list-transfer',
                title: 'List Transfer',
                icon: <Circle size={20} />,
                navLink: '/transfer/list'
            },
            {
                id: 'add-transfer',
                title: 'Add Transfer',
                icon: <Circle size={20} />,
                navLink: '/transfer/add'
            },
            {
                id: 'import-transfer',
                title: 'Import Transfer',
                icon: <Circle size={20} />,
                navLink: '/transfer/import'
            }
        ]
    }
]

const returns = [
    {
        id: 'returns',
        title: 'Returns',
        icon: <CornerUpLeft size={20} />,
        children: [
            {
                id: 'sale-return',
                title: 'Sale Return',
                icon: <Circle size={20} />,
                navLink: '/return/sale'
            },
            {
                id: 'purchase-return',
                title: 'Purchase Return',
                icon: <Circle size={20} />,
                navLink: '/return/purchase'
            }
        ]
    }
]

const people = [
    {
        id: 'people',
        title: 'People', 
        icon: <User size={20} />,
        children: [
            {
                id: 'user-list',
                title: 'List User',
                icon: <Circle size={20} />,
                navLink: '/people/user'
            },
            {
                id: 'customer-list',
                title: 'List Customer',
                icon: <Circle size={20} />,
                navLink: '/people/customer'
            },
            {
                id: 'biller-list',
                title: 'List Biller',
                icon: <Circle size={20} />,
                navLink: '/people/biller'
            },
            {
                id: 'supplier-list',
                title: 'List Supplier',
                icon: <Circle size={20} />,
                navLink: '/people/supplier'
            }
        ]
    }
]

const report = [
    {
        id: 'reports',
        title: 'Reports',
        icon: <FileText size={20} />,
        navLink: '/reports', 
        disabled: true
    }
]

const pickNpack = [
    {
        header: 'For Shalooh'
    },
    {
        id:'pick-pack',
        title: 'Pick N Pack',
        icon: <Package size={20} />, 
        navLink: '/picknpack'
    }
]

const settings = [
    {
        header: 'Setup'
    },
    {
        id: 'settings', 
        title: 'Settings', 
        icon: <Settings size={20} />,
        children: [
            {
                id:'role-permissions',
                title: 'Role Permissions', 
                icon: <Circle size={20} />,
                navLink: '/settings/role-permissions'
            },
            {
                id:'generate-location',
                title: 'Generate Locations', 
                icon: <Circle size={20} />,
                navLink: '/settings/generate-locations'
            },
            {
                id:'warehouse',
                title: 'Warehouse', 
                icon: <Circle size={20} />,
                navLink: '/settings/warehouse'
            },
            {
                id:'tax',
                title: 'Tax', 
                icon: <Circle size={20} />,
                navLink: '/settings/tax'
            },
            {
                id:'user-profile',
                title: 'User Profile', 
                icon: <Circle size={20} />,
                navLink: '/settings/user-profile'
            },
            {
                id:'general-settings',
                title: 'General Settings', 
                icon: <Circle size={20} />,
                navLink: '/settings/general-settings'
            },
            {
                id:'currency',
                title: 'Currency', 
                icon: <Circle size={20} />,
                navLink: '/settings/currency'
            },
            {
                id:'pos-settings',
                title: 'POS Settings', 
                icon: <Circle size={20} />,
                navLink: '/settings/pos-settings'
            }
        ]
    }
]

export default [
    ...dashboard, 
    ...products, 
    ...purchase,  
    ...sales, 
    // ...expenses, 
    // ...quotation, 
    // ...transfer, 
    // ...returns, 
    ...people, 
    // ...report,
    // ...order, 
    ...pickNpack, 
    ...settings
]