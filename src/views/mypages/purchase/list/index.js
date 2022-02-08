import { Fragment, useEffect } from 'react'
import Breadcrumbs from '../../../myComponents/breadcrumbs'

import ProductList from './ProductList'

// ** Third Party Components
import { Row, Col, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


export default function index() {
    return (
        <Fragment>
            <Breadcrumbs breadCrumbTitle='Purchase List' breadCrumbParent='Purchase' breadCrumbActive='Purchase List' />
            <Row>
                <Col sm='12'>
                    <ProductList />
                </Col>
            </Row>
        </Fragment>
    )
}