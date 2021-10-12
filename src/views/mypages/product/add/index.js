import { Fragment, useEffect } from 'react'
import AddProductForm from './addProductForm'
// ** Custom Components
import Breadcrumbs from '../../../myComponents/breadcrumbs'
import { getCategories } from '../category/store/actions'
import { getProducts, getMisc } from '../list/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowLeft } from 'react-feather'
import { Row, Col, Button } from 'reactstrap'
import { useHistory } from 'react-router'

export default function index() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const categories = state.categories.categories
    const products = state.products.products1
    const misc = state.products.misc
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    
    useEffect(() => {
        document.title = "AB Sales Pro"
        dispatch(getCategories())
        dispatch(getProducts())
        dispatch(getMisc())
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
            <Breadcrumbs breadCrumbTitle='Add Product' breadCrumbParent='Products' breadCrumbActive='Add Product' />
            <AddProductForm categories={categories} products={products} misc={misc} />
        </Fragment>
    )
}
