import { useQuery } from "@tanstack/react-query";
import BemOrderLineItem from "./bemOrderLineItem";
import { useEffect, useState } from "react";

const getOpenOrders = (orders) => {
    let openOrders;
    if (orders) {
        const newOrders = orders.filter((order) => order.status === "new");
        openOrders = newOrders.filter(
            (order) => order.paymentStatus === "success"
        );
    }
    return openOrders; 
    
};

const OpenOrders = ({ allOrders, allProducts, ordersRefetch }) => {

    const openOrders = getOpenOrders(allOrders);

    return (
        <div>
            <div>
                <div>
                    {openOrders && (
                        <div>
                            {openOrders.map((order) => (
                                <div key={order._id}>
                                    <BemOrderLineItem
                                        order={order}
                                        products={allProducts}
                                        ordersRefetch={ordersRefetch}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OpenOrders;
