import Types from "./types";

const setAllProductsAction = (payload) => {
    return { 
        type: Types.ALL_PRODUCTS,
        payload: payload
    }
}

const setSelectedProductsAction = (payload) => {
    return { 
        type: Types.SELECTED_PRODUCTS,
        payload: payload
    }
}

const setAddressAction = (payload) => {
    return { 
        type: Types.DELIVERY_ADDRESS,
        payload: payload
    }
}

const setIncreaseQuantityAction = (payload) => {
    return { 
        type: Types.INCREASE_QUANTITY,
        payload: payload
    }
}

const setDecreaseQuantityAction = (payload) => {
    return { 
        type: Types.DECREASE_QUANTITY,
        payload: payload
    }
}

export default { 
    setAllProductsAction, 
    setSelectedProductsAction, 
    setAddressAction, 
    setIncreaseQuantityAction, 
    setDecreaseQuantityAction
};