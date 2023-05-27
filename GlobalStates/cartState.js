import React, { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
    cartOpen: false,
    currentCategory: "",
    selectedRescueValue: {},
    toggleCart: function () {},
    addProdToCart: function (prod) {},
    updateQuantity: function (prod) {},
    removeItemFromCart: function (prod) {},
    emptyCart: function () {},
});

export function CartContextProvider(props) {
    const [cart, setCart] = useState({
        products: [],
        cartOpen: false,
        currentCategory: "",
        selectedRescueValue: "",
    });

    // functions here
    const updateQuantity = (item) => {
        const itemInCart = cart.products.find(
            (cartItem) => cartItem._id === item._id
        );

        if (itemInCart) {
            const nextProds = products.map((prod) => {
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
        } else {
            setCart({
                ...cart,
                products: [...cart.products, item],
            });
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

    const context = {
        cart: cart,
        toggleCart: toggleCart,
        addProdToCart: addProdToCart,
        updateQuantity: updateQuantity,
        removeItemFromCart: removeItemFromCart,
        emptyCart: emptyCart,
    };

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
