import * as types from '../constants/ActionType'

export const actAddToCart = (product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMess = (message)=>{
    return {
        type:types.CHANGE_MESS,
        message
    }
}
export const actDeleteProductInCart = (product)=>{
    return {
        type:types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateQuantity = (product,quantity)=>{
    return {
        type : types.UPDATE_QUANTITY,
        product,
        quantity
    }
}