import { data } from "autoprefixer";
import React, { createContext, useState } from "react";

const ListsDataContex = createContext({
    products: [],
    categories: [],
    rescues: [],
    loadRescues: function (rescues) {},
    loadCategories: function (categories) {},
    loadProducts: function (products) {},
});

export function ListsDataContexProvider(props) {
    const [data, setData] = useState({
        products: [],
        categories: [],
        rescues: [],
    });

    const loadRescues = (rescues) => {
        setData({
            ...data,
            rescues: rescues,
        });
    };

    const loadCategories = (categories) => {
        setData({
            ...data,
            categories: categories,
        });
    };

    const loadProducts = (products) => {
        setData({
            ...data,
            products: products,
        });
    };

    // functions here

    const context = {
        data: data,
        loadRescues: loadRescues,
        loadCategories: loadCategories,
        loadProducts: loadProducts,
    };

    return (
        <ListsDataContex.Provider value={context}>
            {props.children}
        </ListsDataContex.Provider>
    );
}

export default ListsDataContex;
