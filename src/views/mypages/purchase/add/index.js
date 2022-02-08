import { Fragment, useEffect } from 'react'
import Breadcrumbs from '../../../myComponents/breadcrumbs'

// ** Third Party Components
import { Row, Col, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


export default function index() {
    return (
        <Fragment>
            <Breadcrumbs breadCrumbTitle='Add Purchase' breadCrumbParent='Purchase' breadCrumbActive='Add Purchase' />
            <Row>
                <Col sm='12'>
                    
                </Col>
            </Row>
        </Fragment>
    )
}