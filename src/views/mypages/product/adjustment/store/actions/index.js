import axios from "axios"

export const getAdjustments = () => {
    return dispatch => {
        return axios.get('/api/adjustment/all-data').then(res => {
            dispatch({
                type: 'GET_ADJ',
                adjustments: res.data
            })
        })
    }
}