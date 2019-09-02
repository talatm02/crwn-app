export const addItemToCart = (cartItems, itemToCart) => {
    const existingItem = cartItems.find(item => {
        return (item.id === itemToCart.id)
    });

    if (existingItem) {
        return cartItems.map(item => 
             ((item.id === itemToCart.id) ?{ ...item,
                quantity: item.quantity + 1}
            : item)
        )
    }
    return [...cartItems, { ...itemToCart, quantity: 1 }]
}

export const removeItemToCart = (cartItems, iteToRemove) => {
    // cartItems.filter(cartItems=>{

    // })
}