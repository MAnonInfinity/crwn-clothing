export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {  // if the existingCartItem exists (i.e. duplicate)
        return cartItems.map(
            cartItem => 
                cartItem.id === cartItemToAdd.id ? 
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]  // if the existingCartItem doesn't exist (first time)
}