const initialState = {
    products1: [], 
    misc: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_ALL':
            return { ...state, products1: action.products }
        case 'UPDATE_PRODUCT':
            return { ...state,  products1: [...state.products1.filter(product => product.id !== action.product.id), action.product]}
        case 'DELETE_PRODUCT':
            return { ...state, products1: state.products1.filter(product => product.id !== action.id) }
        case 'ADD_PRODUCT':
            return { ...state, products1: [...state.products1, action.product] }
        case 'GET_MISC':
            return {...state, misc: action.misc}
        default:
            return state
    }
}

export default productsReducer