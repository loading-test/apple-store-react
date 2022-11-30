export const selectCart = (state) => state.cart
export const selectCartItemById = (id) => (state) => state.cart.itemsCart.find(obj => obj.id === id)