export const addItemToCart = (cartItems, itemToCart) => {
    const existingItem = cartItems.find(item => {
        return (item.id === itemToCart.id)
    });

    if (existingItem) {
        return cartItems.map(item =>
            ((item.id === itemToCart.id) ? {
                ...item,
                quantity: item.quantity + 1
            }
                : item)
        )
    }
    return [...cartItems, { ...itemToCart, quantity: 1 }]
}

export const substractItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => {
        return (item.id === itemToRemove.id)
    });

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => (cartItem.id != itemToRemove.id))
    }

    return cartItems.map(item =>
        ((item.id === itemToRemove.id) ? {
            ...item,
            quantity: item.quantity - 1
        }
            : item)
    )
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => (cartItem.id != itemToRemove.id))
}