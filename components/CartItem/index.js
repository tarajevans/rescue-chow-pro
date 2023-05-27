// import { useStoreContext } from "../../../utils/shopping/GlobalState";
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
// } from "../../../utils/shopping/actions";
// import { idbPromise } from "../../../utils/helpers";
import { useContext, useEffect } from "react";
import CartContext from "../../GlobalStates/cartState";

const CartItem = ({ item }) => {
    // const [, dispatch] = useStoreContext();
    const cartContext = useContext(CartContext);

    const removeFromCart = () => {
        cartContext.removeItemFromCart(item);
    };

    const onChange = (e) => {
        const value = parseInt(e.target.value);

        if (value <= 0) {
            removeFromCart();
        } else {
            cartContext.updateQuantity(item, value);
        }
    };

    return (
        <li>
            <div className="group relative flex items-center justify-between w-10/12  py-6">
                <a
                    href={`/products/${item._id}`}
                    className=" block  py-1 pl-3 "
                >
                    <div
                        className="absolute inset-0 group-hover:bg-gray-50"
                        aria-hidden="true"
                    />
                    <div className="relative flex min-w-0 flex-1 items-center">
                        <span className="relative inline-block flex-shrink-0"></span>
                        <div className="ml-4 truncate">
                            <p className="truncate text-sm font-medium text-gray-900">
                                {item.name}
                            </p>
                            <p className="truncate text-sm text-gray-500">
                                {"$" + item.price}
                            </p>
                        </div>
                    </div>
                </a>
                <div className="relative  inline-block flex-shrink-0 text-left ">
                    <div className="group relative inline-flex h-8 w-4 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span>Qty:</span>
                        <input
                            type="number"
                            placeholder="1"
                            value={item.quantity}
                            onChange={onChange}
                            className="w-10"
                        />

                        <button
                            type="button"
                            onClick={removeFromCart}
                            className="rounded-full  p-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span role="Image" aria-label="trash">
                                🗑️
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
