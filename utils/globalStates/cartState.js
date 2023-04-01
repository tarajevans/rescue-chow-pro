import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  cartOpen: false,
  currentCategory: '',
  selectedRescueValue: {},
  toggleCart: function () {},
});

export function CartContextProvider (props) {
  const [cartState, setCartState] = useState ({
    cart: [],
    cartOpen: false,
    currentCategory: '',
    selectedRescueValue: {},
});
const toggleCart = () => {
  const cartValue=!cartState.cartOpen;
  setCartState({
    ...cartState,
    cartOpen:cartValue,
  })
}
const context = {
  cartState: cartState,
  toggleCart: toggleCart,
}
return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}


export default CartContext;