// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Custom Components
import Breadcrumbs from '../../../myComponents/breadcrumbs'

// ** Third Party Components
import { Row, Col, Button } from 'reactstrap'

// ** Tables
import DataTableWithButtons from './table'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const index = () => {
    useEffect(() => {
        document.title = 'AB Sales Pro'
    })
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Product Category' breadCrumbParent='Products' breadCrumbActive='Product Category' />
      <Row>
        <Col sm='12'>
          <DataTableWithButtons />
        </Col>
      </Row>
    </Fragment>
  )
}

export default index
