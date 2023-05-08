import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import ChooseARescue from "../components/ChooseRescue";

const OrderNow = () => {
  return (
    <div>
      <div className="w-full">
        <ChooseARescue />
        <CategoryMenu />
        <ProductList />

      </div>
    </div>
  );
};

export default OrderNow;
