import axios from 'axios'
import * as alert from './../../../../../myComponents/AlertMsgs'

export const getCategories = () => {
    return dispatch => {
        return axios.get(`${process.env.REACT_APP_API_URL}/categories`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        }).then(res => {
            dispatch({
                type: 'GET_CATEGORIES',
                categories: res.data
            })
        })
    }
}

export const updateCategory = (category) => {
    return dispatch => {
        return axios.put(`${process.env.REACT_APP_API_URL}/categories/${category._id}`, category, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        })
        .then(res => {
            alert.handleSuccess('Category has been updated successfully!')
            dispatch({
                type: 'UPDATE_CATEGORIES', 
                category: res.data
            })
        }).catch(e => alert.handleError('You are not allowed to perform this action!'))
        
    }
}

export const addCategory = (category) => {
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_API_URL}/categories`, category, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        })
        .then(res => {
            alert.handleSuccess('Category has been added successfully!')
            dispatch({
                type: 'ADD_CATEGORIES',
                category: res.data
            })
        }).catch(e => alert.handleError('You are not allowed to perform this action!'))

    }
}

export const deleteCategory = (id) => {
    return dispatch => {

        return axios.delete(`${process.env.REACT_APP_API_URL}/categories/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData')).jwt}`
            }
        })
            .then(res => {
                alert.handleSuccess('Category has been deleted successfully!')
                dispatch({
                    type: 'DELETE_CATEGORIES',
                    id
                })
            }).catch(e => alert.handleError('You are not allowed to perform this action!'))

    }
}