import React, { createContext, useState } from "react";
import { idbPromise } from "../utils/helpers";

const CartContext = createContext({
    products: [],
    cartOpen: false,
    currentCategory: "",
    selectedRescueValue: "",
    toggleCart: function () {},
    addProdToCart: function (prod) {},
    updateQuantity: function (prod) {},
    removeItemFromCart: function (prod) {},
    emptyCart: function () {},
    setRescue: function (rescueId) {},
});

export function CartContextProvider(props) {
    const [cart, setCart] = useState({
        products: [],
        cartOpen: false,
        currentCategory: "",
        selectedRescueValue: "",
    });

    // functions here
    const updateQuantity = (item, qnty) => {
        const itemInCart = cart.products.find(
            (cartItem) => cartItem._id === item._id
        );

        if (itemInCart) {
            const nextProds = cart.products.map((prod) => {
                if (prod._id === item._id) {
                    return {
                        ...prod,
                        quantity: qnty,
                    };
                } else {
                    return prod;
                }
            });
            setCart({
                ...cart,
                products: nextProds,
            });
        }
    };

    const addProdToCart = (item) => {
        const itemInCart = cart.products.find(
            (cartItem) => cartItem._id === item._id
        );

        if (itemInCart) {
            const nextProds = cart.products.map((prod) => {
                if (prod._id === item._id) {
                    return {
                        ...prod,
                        quantity: prod.quantity + 1,
                    };
                } else {
                    return prod;
                }
            });
            setCart({
                ...cart,
                products: nextProds,
            });
            idbPromise("cart", "put", {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.quantity) + 1,
              });
        } else {
            setCart({
                ...cart,
                products: [...cart.products, item],
            });

            idbPromise("cart", "put", { ...item, quantity: 1 });
        }
    };

    const removeItemFromCart = (prod) => {
        const newCart = cart.products.filter(
            (product) => product._id != prod._id
        );
        setCart({
            ...cart,
            products: newCart,
        });
    };

    const emptyCart = () => {
        setCart({
            ...cart,
            products: [],
        });
    };

    const toggleCart = () => {
        setCart({
            ...cart,
            cartOpen: !cart.cartOpen,
        });
    };

    const setRescue = (rescueId) => {
        setCart({
            ...cart,
            selectedRescueValue: rescueId,
        });
    };

    const context = {
        cart: cart,
        toggleCart: toggleCart,
        addProdToCart: addProdToCart,
        updateQuantity: updateQuantity,
        removeItemFromCart: removeItemFromCart,
        emptyCart: emptyCart,
        setRescue: setRescue,
    };

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
