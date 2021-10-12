import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { getProducts, getMisc } from '../list/store/actions'
import { getCategories } from '../category/store/actions'
import { ArrowLeft } from 'react-feather'
import { Row, Col, Button } from 'reactstrap'

import Breadcrumbs from '../../../myComponents/breadcrumbs'
import EditProductForm from './EditProductForm'

export default function index() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const store = useSelector(state => state)
    const products = store.products.products1
    const categories = store.categories.categories
    const misc = store.products.misc
    const productEdit = products.filter(product => product._id === id)
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    useEffect(() => {
        document.title = 'AB Sales Pro'
        if (products.length === 0) {
            dispatch(getProducts())
            dispatch(getCategories())  
            dispatch(getMisc()) 
        }
    }, [])

    return (
        <Fragment>
            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <Button.Ripple className='btn-icon' color='flat-primary' onClick={goBack}>
                        <ArrowLeft size={20} /> Go Back
                    </Button.Ripple>
                </Col>
            </Row>
            <Breadcrumbs breadCrumbTitle='Edit Product' breadCrumbParent='Products' breadCrumbActive='Edit Product' />
            <EditProductForm categories={categories} product={productEdit} products={products} misc={misc} />
        </Fragment>
    )
}