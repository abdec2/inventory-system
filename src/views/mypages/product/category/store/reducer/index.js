const initialState = {
    categories: []
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, categories: action.categories }
        case 'UPDATE_CATEGORIES':
            return { ...state,  categories: [...state.categories.filter(category => category._id !== action.category._id), action.category]}
        case 'DELETE_CATEGORIES':
            return { ...state, categories: state.categories.filter(category => category._id !== action.id) }
        case 'ADD_CATEGORIES':
            return { ...state, categories: [...state.categories, action.category] }
        default:
            return state
    }
}

export default categoriesReducer