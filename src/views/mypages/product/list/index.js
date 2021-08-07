import { Fragment, useEffect } from 'react'

// ** Custom Components
import Breadcrumbs from '../../../myComponents/breadcrumbs'
import ProductTable from './ProductTable'

// ** Third Party Components
import { Row, Col, Button } from 'reactstrap'


// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const index = () => {
    useEffect(() => {
        document.title = 'AB Sales Pro'
    })
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Product List' breadCrumbParent='Products' breadCrumbActive='Product List' />
      <Row>
        <Col sm='12'>
            <ProductTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default index
