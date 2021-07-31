// ** Routes Imports
// import AppRoutes from './Apps'
// import FormRoutes from './Forms'
// import PagesRoutes from './Pages'
// import TablesRoutes from './Tables'
// import ChartMapsRoutes from './ChartsMaps'
// import DashboardRoutes from './Dashboards'
// import UiElementRoutes from './UiElements'
// import ExtensionsRoutes from './Extensions'
// import PageLayoutsRoutes from './PageLayouts'
import ProductRoutes from './ProductRoutes'
import PurchaseRoutes from './PurchaseRoutes'
import SaleRoutes from './SaleRoutes'
import MyRoutes from './MyRoutes'
import ExpenseRoutes from './ExpenseRoutes'
import QuotationRoutes from './QuotationRoutes'
import TransferRoutes from './TransferRoutes'
import ReturnRoutes from './ReturnRoutes'
import PeopleRoutes from './PeopleRoutes'
import ShaloohRoutes from './ShaloohRoutes'
import SettingsRoutes from './SettingsRoutes'

// ** Document title
const TemplateTitle = '%s - AB Sales Pro'

// ** Default Route
const DefaultRoute = '/dashboard/home'

// ** Merge Routes
// const Routes = [
//   ...DashboardRoutes,
//   ...AppRoutes,
//   ...PagesRoutes,
//   ...UiElementRoutes,
//   ...ExtensionsRoutes,
//   ...PageLayoutsRoutes,
//   ...FormRoutes,
//   ...TablesRoutes,
//   ...ChartMapsRoutes
// ]

const Routes = [
  ...MyRoutes, 
  ...ProductRoutes, 
  ...PurchaseRoutes, 
  ...SaleRoutes, 
  ...ExpenseRoutes, 
  ...QuotationRoutes,
  ...TransferRoutes,
  ...ReturnRoutes,
  ...PeopleRoutes,
  ...ShaloohRoutes,
  ...SettingsRoutes

]

export { DefaultRoute, TemplateTitle, Routes }
