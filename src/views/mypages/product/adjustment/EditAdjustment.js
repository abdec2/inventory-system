import { Fragment, useEffect } from 'react'
import BreadCrumbs from "../../../myComponents/breadcrumbs"
import { useParams } from 'react-router'

function EditAdjustment() {
    const { id } = useParams()
    console.log(id)
    return (
        <Fragment>
            <BreadCrumbs breadCrumbTitle="Edit Adjustment" breadCrumbParent="Product" breadCrumbParent="Adjustment List" breadCrumbActive="Edit Adjustment" />
        </Fragment>
    )
}

export default EditAdjustment