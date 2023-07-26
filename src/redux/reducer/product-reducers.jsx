import { ProductActionTypes } from "../constants/product-action-types"

const initialState = {
    productList: []
}

export const productReducer = (state = initialState, action ) =>{
    switch (action.type){
        case ProductActionTypes.ALL_MOVIES:
            return {...state, productList: action.payload };
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {},{type, payload}) => {
    switch (type){
        case ProductActionTypes.SELECTED_MOVIE:
            return {...state, ...payload};
        case ProductActionTypes.REMOVE_MOVIE:
            return {}
        default:
            return state;
    }
}

