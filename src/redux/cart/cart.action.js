import CartTypes from './cart.types';

export const toggleHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
})

export const substractItem = item => ({
    type: CartTypes.SUBSTRACT_ITEM,
    payload: item
})
