import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import ChooseARescue from "../components/ChooseRescue";

const OrderNow = () => {
    const [currentCategory, setCurrentCategory] = useState("all");

    return (
        <div>
            <div className="w-full">
                <ChooseARescue />
                <CategoryMenu setCurrentCategory={setCurrentCategory} />
                <ProductList currentCategory={currentCategory} />
            </div>
        </div>
    );
};

export default OrderNow;
