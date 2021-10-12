const initialState = {
    adjustments: []
} 

const adjustmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ADJ':
            return { ...state, adjustments: action.adjustments }
        case 'UPDATE_ADJ':
            return { ...state,  adjustments: [...state.adjustments.filter(adj => adj.id !== action.adjustment.id), action.adjustment]}
        case 'DELETE_ADJ':
            return { ...state, adjustments: state.adjustments.filter(adj => adj.id !== action.id) }
        case 'ADD_ADJ':
            return { ...state, adjustments: [...state.adjustments, action.adjustment] }
        default:
            return state
    }
}

export default adjustmentReducer