import Types from "./types";

const iState = {
    type: 'INITIAL_STATE',
    selectedProducts: []
}

const AppReducer = (state = iState, action) => {
    switch (action.type) {
        case Types.ALL_PRODUCTS:
            return { ...state, products: action.payload }
        case Types.SELECTED_PRODUCTS:
            // return { ...state, selectedProducts: [ ...state.selectedProducts, action.payload ] }
            return action.payload
        case Types.DELIVERY_ADDRESS:
            return { ...state, deliveryAddress: action.payload }
        case Types.INCREASE_QUANTITY:
            return action.payload
        case Types.DECREASE_QUANTITY:
            return action.payload
        default:
            return state;
    }
}



export default AppReducer;