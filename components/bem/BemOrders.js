import { useState, Fragment, useEffect } from "react";
import { Tab } from "@headlessui/react";
import OrdersNav from "./bemOrdersComponents/ordersNav";
import OpenOrders from "./bemOrdersComponents/openOrders";
import ShippedOrders from "./bemOrdersComponents/shippedOrders";
import AllOrders from "./bemOrdersComponents/allOrders";
import LookupOrder from "./bemOrdersComponents/lookupOrder";
import { useQuery } from "@tanstack/react-query";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const fetchProducts = async () => {
    const response = await fetch("/api/data/products");
    const data = await response.json();
    return data;
};

const fetchOrders = async () => {
    //fetch orders from api
    const response = await fetch("/api/data/orders");
    const data = await response.json();

    // const openOrders = data.filter((order) => order.status === "new");
    return data;
};

const BemOrders = () => {
    const [currentModule, setCurrentModule] = useState("open");
    const [allOrders, setAllOrders] = useState();
    const [allProducts, setAllProducts] = useState();

    const ordersQuery = useQuery({
        queryKey: ["orders"],
        queryFn: fetchOrders,
        enabled: true,
    });

    const productsQuery =  useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        enabled: true,
    });

    const {status, data} = productsQuery

    useEffect(() => {
        if (productsQuery.status === "success") {
            setAllProducts(productsQuery.data);
        }
        console.log(allProducts)
    }, [productsQuery.status]);

    useEffect(() => {
        if (ordersQuery.data) {
            setAllOrders(ordersQuery.data);
        }
    }, [ordersQuery.isLoading, ordersQuery.data]);

    return (
        <div>
            {ordersQuery.isLoading ? (
                <div>LOADING Orders ...</div>
            ) : (
                <div>
                    {productsQuery.isLoading ? (
                        <div> LOADING Products...</div>
                    ) : (
                        <div>
                            <div>
                                <OrdersNav
                                    currentModule={currentModule}
                                    setCurrentModule={setCurrentModule}
                                />
                            </div>
                            <div>
                                {currentModule === "open" && (
                                    <div>
                                        <OpenOrders
                                            allOrders={allOrders}
                                            allProducts={allProducts}
                                        />
                                    </div>
                                )}
                                {currentModule === "shipped" && (
                                    <div>
                                        <ShippedOrders
                                            allOrders={allOrders}
                                            allProducts={allProducts}
                                        />
                                    </div>
                                )}
                                {currentModule === "all" && (
                                    <div>
                                        <AllOrders
                                            allOrders={allOrders}
                                            allProducts={allProducts}
                                        />
                                    </div>
                                )}
                                {currentModule === "lookup" && (
                                    <div>
                                        <LookupOrder
                                            allOrders={allOrders}
                                            allProducts={allProducts}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BemOrders;
