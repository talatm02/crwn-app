import CartTypes from './cart.types';
import { addItemToCart, removeItemFromCart, substractItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartTypes.SUBSTRACT_ITEM:
            return {
                ...state,
                cartItems: substractItemFromCart(state.cartItems, action.payload)
            }
        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
