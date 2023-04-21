import { CartActionTypes } from "./actionTypes";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const increaseProductToCart = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT,
    payload
})

export const decreaseProductFromCart = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT,
    payload
})