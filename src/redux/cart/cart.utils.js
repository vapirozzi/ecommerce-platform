export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItemToAdd.id === cartItem.id
  );

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id);
};
