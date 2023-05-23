import React, { createContext, useState } from "react";

const CartContex = createContext({
    products: [],
    cartOpen: false,
    currentCategory: "",
    selectedRescueValue: {},
    toggleCart: function () {},
    addProdToCart: function (prod) {},
});

export function CartContextProvider(props) {
    const [cart, setCart] = useState({
        products:[],
        cartOpen: false,
        currentCategory: "",
        selectedRescueValue: {},
    });

    // functions here
    const addProdToCart = (prod) => {
      setCart({
        ...cart,
        products: [...cart.products, prod],
      })
    }

    const toggleCart = (isOpen) => {
            setCart({
                ...cart,
                cartOpen: isOpen,
            });
    };

    const context = {
        cart: cart,
        toggleCart: toggleCart,
        addProdToCart:addProdToCart,
    };

    return (
        <CartContex.Provider value={context}>
            {props.children}
        </CartContex.Provider>
    );
}

export default CartContex;
