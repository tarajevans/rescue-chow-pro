import React, { useContext, useEffect } from "react";
import { pluralize, getProceeds } from "../../utils/helpers";
import CartContex from "../../GlobalStates/cartState";
import Link from "next/link";
import { idbPromise } from "../../utils/helpers";

const ProductItem = (item) => {
    const cartContext = useContext(CartContex);
    const { cart } = cartContext;
    const { products } = cart;

    const { image, name, _id, price, quantity, imgUrl } = item;

    const addToCart = () => {
        cartContext.addProdToCart(item);
    };
    
    console.log(item)
    return (
        <div key={_id}>
            {item.imgUrl}
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    {price && (
                        <img
                            src={"https://rescue-chow.s3.us-east-2.amazonaws.com/"+ image}
                            alt={name}
                            className="h-full w-full object-cover object-center"
                        />
                    )}
                </div>
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                        {name}
                    </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {quantity} {pluralize("item", quantity)} in stock
                        </p>
                    {price && (
                        <p className="mt-1 text-sm text-gray-500 font-semibold">
                            ${getProceeds(price)} of this item goes to the
                            charity You choose!
                        </p>
                    )}
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {price && (
                        <p className="relative text-lg font-semibold text-white">
                            {price}
                        </p>
                    )}
                </div>
            </div>
            <Link href={`/products/${_id}`}>View Item </Link>

                <div className="mt-6 flex items-center justify-center">
                    <button
                        type="button"
                        className="rounded-md relative w-11/12  py-2 px-8 outline outline-gray-400  outline-1 bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-400"
                        onClick={addToCart}
                    >
                        Add to bag
                    </button>
                </div>
        </div>
    );
};

export default ProductItem;
