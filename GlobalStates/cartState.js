import React, { createContext, useState } from "react";

const CartContex = createContext({
  products: [],
  cartOpen: false,
  currentCategory: "",
  selectedRescueValue: {},
});

export function CartContextProvider(props) {
  const [cart, setCart] = useState({
    products: [],
    cartOpen: false,
    currentCategory: "",
    selectedRescueValue: {},
  });

  // functions here

  const context = {
    cart: cart,
  };

  return (
    <CartContex.Provider value={context}>{props.children}</CartContex.Provider>
  );
}

export default CartContex;
