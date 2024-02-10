import Link from "next/link";
import { useState } from "react";
import OrderDetails from "./orderDetails";

const OrderLineItem = ({
    date,
    orderNum,
    status,
    products,
    productList,
    order,
    paymentStatus
}) => {
    const [showOrderDetails, setShowOrderDetails] = useState(false);


    const findProduct = (prodId) => {
        let returnProd;
        productList.map((prod) => {
            if (prodId === prod._id) {
                returnProd = prod;
            }
        });
        return returnProd;
    };

    const toggleDetails = () => {
        setShowOrderDetails(!showOrderDetails);
    };

    return (
        <div className="py-2">
            <div className="bg-yellow-100 rounded overflow-hidden shadow-lg">
                <div>
                    Date: {new Date(date).toLocaleString()}, Order#: {orderNum}, Status: {status}{" "}
                    <button
                        className="px-4 bg-blue-100"
                        onClick={toggleDetails}
                    >
                        {" "}
                        view order{" "}
                    </button>
                </div>
                {showOrderDetails && (
                    <OrderDetails
                        order={order}
                        products={products} // products in the order
                        productList={productList} // list of all products
                        paymentStatus={paymentStatus}

                    />
                )}
            </div>
        </div>
    );
};

export default OrderLineItem;
