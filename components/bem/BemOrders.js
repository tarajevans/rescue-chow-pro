import { useState, Fragment, useEffect } from "react";
import { Tab } from "@headlessui/react";
import OrdersNav from "./bemOrdersComponents/ordersNav";
import OpenOrders from "./bemOrdersComponents/openOrders";
import ShippedOrders from "./bemOrdersComponents/shippedOrders";
import AllOrders from "./bemOrdersComponents/allOrders";
import LookupOrder from "./bemOrdersComponents/lookupOrder";
import { useQuery } from "@tanstack/react-query";

const BemOrders = ({ allOrders, allProducts, ordersRefetch }) => {
    const [currentModule, setCurrentModule] = useState("open");
  
    return (
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
                            ordersRefetch={ordersRefetch}
                        />
                    </div>
                )}
                {currentModule === "shipped" && (
                    <div>
                        <ShippedOrders
                            allOrders={allOrders}
                            allProducts={allProducts}
                            ordersRefetch={ordersRefetch}
                        />
                    </div>
                )}
                {currentModule === "all" && (
                    <div>
                        <AllOrders
                            allOrders={allOrders}
                            allProducts={allProducts}
                            ordersRefetch={ordersRefetch}
                        />
                    </div>
                )}
                {currentModule === "lookup" && (
                    <div>
                        <LookupOrder
                            allOrders={allOrders}
                            allProducts={allProducts}
                            ordersRefetch={ordersRefetch}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BemOrders;
