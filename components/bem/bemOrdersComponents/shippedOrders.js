import { useEffect, useState } from "react";
import BemOrderLineItem from "./bemOrderLineItem";

const getShippedOrders = (orders) => {
    let openOrders;
    if (orders) {
        openOrders = orders.filter((order) => order.status === "shipped");
    }
    return openOrders;
};

const ShippedOrders = ({ allOrders, allProducts, ordersRefetch }) => {
    
    const shippedOrders = getShippedOrders(allOrders);
console.log(shippedOrders)
    return (
        <div>
            <div>
                <div>
                    {!shippedOrders.length ? (
                        <div> No Orders To Display</div>
                    ) : (
                        <div>
                            <div>
                                {shippedOrders.map((order) => (
                                    <div key={order._id}>
                                        <BemOrderLineItem
                                            order={order}
                                            products={allProducts}
                                            ordersRefetch={ordersRefetch}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShippedOrders;
