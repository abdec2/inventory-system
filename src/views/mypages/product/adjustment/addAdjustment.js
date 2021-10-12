import { Fragment, useEffect } from 'react'
import BreadCrumbs from "../../../myComponents/breadcrumbs"
import {
    Card,
    CardHeader,
    CardTitle,
    Button,
    UncontrolledButtonDropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Label,
    Form,
    Row,
    Col,
    CardBody,
    FormGroup
} from 'reactstrap'

function addAdjustment() {

    const warehouseOpt = [
        {id: 1, label: "Warehouse 1"}, 
        {id: 2, label: "Warehouse 2"}
    ]
    return (
        <Fragment>
            <BreadCrumbs breadCrumbTitle="Add Adjustment" breadCrumbParent="Product" breadCrumbActive="Add Adjustment" />

            <Card>
                <CardBody>
                    <Form>
                        <Row>
                            <Col sm={12} md={3}>
                                <FormGroup>
                                    <Label size='lg'>Warehouse <span className="text-danger">*</span></Label>
                                    <Input type="select" name="warehouse" bsSize="lg" id="warehouse" className="form-control">
                                        <option value="">Select...</option>
                                        {warehouseOpt.length > 0 && (
                                            warehouseOpt.map(item => <option value={item.id} key={item.id}>{item.label}</option>)
                                        )}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <FormGroup>
                                    <Label size='lg'>Select Product</Label>
                                    <Input></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default addAdjustment
