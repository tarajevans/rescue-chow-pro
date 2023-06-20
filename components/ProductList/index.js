import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import ListsDataContex from "../../GlobalStates/listsDataState";
import CartContext from "../../GlobalStates/cartState";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
    //fetch rescues from api

    const response = await fetch("/api/data/products");
    const data = await response.json();
    return data;
};

function ProductList({ currentCategory }) {
    const listContext = useContext(ListsDataContex);
    const cartContext = useContext(CartContext);
    const [currProds, setCurrProds] = useState([]);

    const { isLoading, data } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        enabled: true,
    });

    useEffect(()=> {
        if (currentCategory === "all"){
            setCurrProds(listContext.data.products)
        }else{
            setCurrProds(listContext.data.products.filter((prod) => prod.category === currentCategory ))
        }
    }, [currentCategory])

    useEffect(() => {
        if (isLoading) {
            console.log("Loading...");
        } else {
            listContext.loadProducts(data);
        }
    }, [isLoading, data]);

    return (
        <div className=" bg-opacity-20 from-red-200 to-white bg-gradient-to-t">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                    All Products
                </h2>

                {isLoading && (
                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        <h4>Loading...</h4>
                    </div>
                )}

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {currProds.map((product) => (
                        <ProductItem
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
                <div className="flex justify-center align-center">
                    <button
                        onClick={cartContext.toggleCart}
                        type="submit"
                        className="m-5 inline-flex items-center rounded-md border border-gray-400 bg-red-300 px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
