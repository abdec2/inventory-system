import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import CustomSelect from '../../../myComponents/customSelect'
import AutoComplete from '@components/autocomplete'
import classNames from 'classnames'
import UploadFile from './UploadFile'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { addProduct } from '../list/store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const formSchema = Yup.object().shape({
    // productType: Yup.string().transform(function (value, originalValue) {
    //     return originalValue.trim() === "" ? null : value
    // }).required('Required'),
    productType: Yup.object({
        id: Yup.string().required(), 
        label: Yup.string().required()
    }).required('Required'), 
    parentProduct: Yup.string().when("productType.label", {
        is: "variation",
        then: Yup.string().required('Required')
    }),
    productName: Yup.string().required('Required').transform(function (value, originalValue) {
        return originalValue.trim() === "" ? null : value
    }),
    sku: Yup.string().required('Required').transform(function (value, originalValue) {
        return originalValue.trim() === "" ? null : value
    }),
    category: Yup.string().required('Required'),
    unit: Yup.string().required('Required').transform(function (value, originalValue) {
        return originalValue.trim() === "" ? null : value
    }),
    price: Yup.number().required('Required'),
    brand: Yup.string().notRequired().transform(function (value, originalValue) {
        return originalValue.trim() === "" ? null : value
    }), 
    weight: Yup.number().notRequired(), 
    heit: Yup.number().notRequired(),
    wid: Yup.number().notRequired(),
    len: Yup.number().notRequired(),
    desc: Yup.string().notRequired().transform(function (value, originalValue) {
        return originalValue.trim() === "" ? null : value
    }),
    feature: Yup.string().notRequired().transform(function (value, originalValue) {
        return originalValue.trim() === "" ? null : value
    })
})

const AddProductForm = ({ categories, products, misc }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const fileInputStyle = {
        border: "1px solid #d8d6de",
        padding: "0.438rem 1rem",
        borderRadius: "0.357rem",
        '::fileSelectorButton': {
            backgroundColor: 'blue'
        }
    }

    const ProductTypeOpt = [{ value: '', label: 'Select...' }]
    if (misc.productType && misc.productType.length > 0) {
        misc.productType.map(item => ProductTypeOpt.push({value: {id: item._id, label: item.type}, label: item.type}))
    }    

    const categoryOpt = [{ value: '', label: 'Select...' }]
    
    categories.map(category => {
        categoryOpt.push({ value: category._id, label: category.category })
    })

    const unitOpt = [{ value: '', label: 'Select...' }]
    if (misc.units && misc.units.length > 0) {
        misc.units.map(item => unitOpt.push({value: item._id, label: item.unit}))
    } 

    const formik = useFormik({
        initialValues: {
            productType: '',
            parentProduct: '',
            productName: '',
            sku: '',
            category: '',
            unit: '',
            price: '',
            brand: '',
            weight: '',
            heit: '',
            wid: '',
            len: '',
            desc: '',
            feature: ''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            dispatch(addProduct(values))
            history.push('/product/list')
        }
    })

    const [showParent, setShowParent] = useState(false)

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'></CardTitle>
            </CardHeader>

            <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Product Type <span className="text-danger">*</span></Label>
                                <CustomSelect
                                    options={ProductTypeOpt}
                                    value={formik.values.productType}
                                    className={`react-select ${formik.errors.productType && 'is-invalid'}`}
                                    onChange={value => {
                                        formik.setFieldValue('productType', value.value)
                                        if (value.label === "variation") {
                                            setShowParent(true)
                                        } else {
                                            setShowParent(false) 
                                            formik.setFieldValue('parentProduct', '')
                                        }
                                    }}
                                />
                            </FormGroup>
                        </Col>

                        {showParent && (
                            <Col md='4' sm='12' className="px-lg-2">
                                <FormGroup>
                                    <Label>Parent Product <span className="text-danger">*</span></Label>
                                    <AutoComplete
                                        suggestions={products}
                                        className={`form-control ${formik.errors.productType && 'is-invalid'}`}
                                        filterKey='sku'
                                        placeholder="Type Parent Product SKU"
                                        customRender={(suggestion, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) => (
                                            <li
                                                className={classNames('suggestion-item', {
                                                    active: filteredData.indexOf(suggestion) === activeSuggestion
                                                })}
                                                key={i}
                                                onMouseEnter={() => onSuggestionItemHover(filteredData.indexOf(suggestion))}
                                                onClick={e => {
                                                    onSuggestionItemClick(null, e)
                                                    formik.setFieldValue('parentProduct', suggestion._id)
                                                }}
                                            >
                                                <img src={suggestion.imageUrl} alt={suggestion.name} height='32' width='32' className='mr-1' />
                                                <span>{suggestion.name}</span>
                                                <span className="mx-2"><strong>SKU:</strong> {suggestion.sku}</span>
                                            </li>
                                        )}
                                    />

                                </FormGroup>
                            </Col>
                        )}

                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Product Name <span className="text-danger">*</span></Label>
                                <Input type='text' name='productName' id='productName' placeholder='Product Name' className={`form-control ${formik.errors.productName && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.productName} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>SKU <span className="text-danger">*</span></Label>
                                <Input type='text' name='sku' id='sku' placeholder='Product SKU' className={`form-control ${formik.errors.sku && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.sku} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Category <span className="text-danger">*</span></Label>
                                <CustomSelect
                                    options={categoryOpt}
                                    value={formik.values.category}
                                    className={`react-select ${formik.errors.category && 'is-invalid'}`}
                                    onChange={value => formik.setFieldValue('category', value.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Unit <span className="text-danger">*</span></Label>
                                <CustomSelect
                                    options={unitOpt}
                                    value={formik.values.unit}
                                    className={`react-select ${formik.errors.unit && 'is-invalid'}`}
                                    onChange={value => formik.setFieldValue('unit', value.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Price <span className="text-danger">*</span></Label>
                                <Input type='text' name='price' id='price' placeholder='Enter Product Price' className={`form-control ${formik.errors.price && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.price} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Brand</Label>
                                <Input type='text' name='brand' id='brand' placeholder='Type Product Brand' className={`form-control ${formik.errors.brand && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.brand} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Weight</Label>
                                <Input type='text' name='weight' id='weight' placeholder='Enter Product Weight' className={`form-control ${formik.errors.weight && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.weight} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Height</Label>
                                <Input type='text' name='heit' id='heit' placeholder='Enter Product Height' className={`form-control ${formik.errors.heit && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.heit} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Width</Label>
                                <Input type='text' name='wid' id='wid' placeholder='Enter Product Width' className={`form-control ${formik.errors.wid && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.wid} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Length</Label>
                                <Input type='text' name='len' id='len' placeholder='Enter Product Length' className={`form-control ${formik.errors.len && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.len} />
                            </FormGroup>
                        </Col>
                        <Col  sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Description</Label>
                                <Input type='textarea' name='desc' id='desc' placeholder='Description' className={`form-control ${formik.errors.desc && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.desc} />
                            </FormGroup>
                        </Col>
                        <Col  sm='12' className="px-lg-2">
                            <FormGroup>
                                <Label>Features</Label>
                                <Input type='textarea' name='feature' id='feature' placeholder='Features' className={`form-control ${formik.errors.feature && 'is-invalid'}`} onChange={formik.handleChange} value={formik.values.feature} />
                            </FormGroup>
                        </Col>

                        <Col sm='12' className="px-lg-2">
                            <FormGroup>
                                <UploadFile name='file' id='file' setFieldvalue={formik.setFieldValue} />
                            </FormGroup>
                        </Col>
                        <Col sm='12' className="px-lg-2">
                            <FormGroup className='d-flex mb-0'>
                                <div className='mr-1'>
                                    <Button.Ripple color='primary' type='submit'>
                                        Submit
                                    </Button.Ripple>
                                </div>
                                <Button.Ripple outline color='secondary' type='reset' onClick={formik.resetForm}>
                                    Reset
                                </Button.Ripple>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
export default AddProductForm