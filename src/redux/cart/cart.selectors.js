import { createSelector } from 'reselect';

//define the input
const selectCart = state => state.cart;

//memoize the cartItem
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuantity, cartItem) => (totalQuantity = totalQuantity + cartItem.quantity), 0)
)