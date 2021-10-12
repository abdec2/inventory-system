import { Fragment, useEffect } from 'react'
import BreadCrumbs from "../../../myComponents/breadcrumbs"

import AdjTable from './AdjTable'
// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

export default function index() {
    return (
        <Fragment>
            <BreadCrumbs breadCrumbTitle="Adjustment List" breadCrumbParent="Products" breadCrumbActive="Adjustment List" />
            <AdjTable />
        </Fragment>
    )
}