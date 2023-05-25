import React, { createContext, useState } from "react";

const CartContex = createContext({
    products: [],
    cartOpen: false,
    currentCategory: "",
    selectedRescueValue: {},
    toggleCart: function () {},
    addProdToCart: function (prod) {},
    updateQuantity: function (prod) {},
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

    // const updateQuantitys = (prods) => {
    //     setCart({
    //         ...cart,
    //         products: prods,
    //     });
    // };

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

    // const addProdToCarts = (prod) => {
    //     setCart({
    //         ...cart,
    //         products: [...cart.products, prod],
    //     });
    // };

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
    };

    return (
        <CartContex.Provider value={context}>
            {props.children}
        </CartContex.Provider>
    );
}

export default CartContex;
