import React, { useContext, useEffect } from "react";
import ProductItem from "../ProductItem";
import ListsDataContex from "../../GlobalStates/listsDataState";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
    //fetch rescues from api

    const response = await fetch("/api/data/products");
    const data = await response.json();
    return data;
};

function ProductList() {
    const listContext = useContext(ListsDataContex);

    const { isLoading, data } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        enabled: true,
    });

    useEffect(() => {
        if (isLoading) {
            console.log("Loading...");
        } else {
            listContext.loadProducts(data);
        }
        console.log(listContext.data.categories);
        // load rescues into globalState
    }, [isLoading, data]);

    // const [state, dispatch] = useStoreContext();

    // const { currentCategory } = state;

    // const { loading, data } = useQuery(QUERY_PRODUCTS);

    // useEffect(() => {
    //   if (data) {
    //     dispatch({
    //       type: UPDATE_PRODUCTS,
    //       products: data.products,
    //     });
    //     data.products.forEach((product) => {
    //       idbPromise("products", "put", product);
    //     });
    //   } else if (!loading) {
    //     idbPromise("products", "get").then((products) => {
    //       dispatch({
    //         type: UPDATE_PRODUCTS,
    //         products: products,
    //       });
    //     });
    //   }
    // }, [data, loading, dispatch]);

    // function filterProducts() {
    //   if (!currentCategory) {
    //     return state.products;
    //   }

    //   return state.products.filter(
    //     (product) => product.category._id === currentCategory
    //   );
    // }

    return (
        <div className=" bg-opacity-20 from-red-200 to-white bg-gradient-to-t">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                    All Products
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {listContext.data.products.map((product) => (
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
            </div>
        </div>
    );
}

export default ProductList;
