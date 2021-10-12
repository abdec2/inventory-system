import axios from 'axios'
import * as alert from '../../../../../myComponents/AlertMsgs'

export const getProducts = () => {
    return dispatch => {
        return axios.get(`${process.env.REACT_APP_API_URL}/products`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        }).then(res => {
            dispatch({
                type: 'GET_PRODUCTS_ALL',
                products: res.data
            })
        })
    }
}

export const getMisc = () => {
    return dispatch => {
        return axios.get(`${process.env.REACT_APP_API_URL}/misc`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        }).then(res => {
            dispatch({
                type: 'GET_MISC',
                misc: res.data
            })
        })
    }
}

export const deleteProduct = id => {
    return dispatch => {
        return axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        })
            .then(res => {
                alert.handleSuccess('Product has been deleted successfully!')
                dispatch({
                    type: 'DELETE_PRODUCT',
                    id
                })
            }).catch(e => alert.handleError('You are not allowed to perform this action!'))
    }
}

export const addProduct = product => {
    const data = {
        categories: [product.category],
        brand: product.brand,
        desc: product.desc,
        feature: product.feature,
        height: (product.heit !== "") ? product.heit : null,
        size_length: (product.len !== "") ? product.len : null,
        parent_product: (product.parentProduct !== "") ? product.parentProduct : null,
        price: product.price,
        label: product.productName,
        product_type: product.productType.id,
        sku: product.sku,
        unit: product.unit,
        weight: (product.weight !== "") ? product.weight : null,
        width: (product.wid !== "") ? product.wid : null
    }
    const form = new FormData()
    if (product.file) {
        form.append('files.product_image', product.file, product.file.name)
    }
    form.append('data', JSON.stringify(data))
    
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_API_URL}/products`, form, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`, 
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            alert.handleSuccess('Product has been added successfully!')
            dispatch({
                type: 'ADD_PRODUCT',
                product: res.data
            })
                
        }).catch(err => alert.handleError('You are not allowed to perform this action!'))
    }
}

export const updateProduct = product => {
    const data = {
        categories: [product.category],
        brand: product.brand,
        desc: product.desc,
        feature: product.feature,
        height: (product.heit !== "") ? product.heit : null,
        size_length: (product.len !== "") ? product.len : null,
        parent_product: (product.parentProduct !== "") ? product.parentProduct : null,
        price: product.price,
        label: product.productName,
        product_type: product.productType.id,
        sku: product.sku,
        unit: product.unit,
        weight: (product.weight !== "") ? product.weight : null,
        width: (product.wid !== "") ? product.wid : null
    }
    const form = new FormData()
    if (product.file) {
        form.append('files.product_image', product.file, product.file.name)
    }
    form.append('data', JSON.stringify(data))
    
    return dispatch => {
        return axios.put(`${process.env.REACT_APP_API_URL}/products/${product._id}`, form, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`, 
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            alert.handleSuccess('Product has been updated successfully!')
            dispatch({
                type: 'UPDATE_PRODUCT',
                product: res.data
            })
                
        }).catch(err => alert.handleError('You are not allowed to perform this action!'))
    }
}