import { useRef, useState } from "react";
import BemOrderLineItem from "./bemOrderLineItem";

const fetchOrder = async (orderNum) => {
    const response = await fetch(`/api/data/orders/${orderNum}`);
    const data = await response.json();
    return data;
};

const LookupOrder = ({ allProducts, ordersRefetch }) => {
    const [currentOrder, setCurrentOrder] = useState();
    const [orderNumber, setOrderNumber] = useState();

    const orederNumRef = useRef();

    const changeOrderNumber = () => {
        setOrderNumber(orederNumRef.current.value);
    };

    const lookupOrder = async () => {
        if (orderNumber) {
            const thisOrder = await fetchOrder(orderNumber);
            if (thisOrder) {
                setCurrentOrder(thisOrder);
            }
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                <label>
                    Order Number:
                    <span className="pl-4">
                        <input
                            onChange={changeOrderNumber}
                            className="border-2 border-black "
                            size="30"
                            type="text"
                            ref={orederNumRef}
                        />
                    </span>
                </label>
                <span className="pl-4">
                    <input
                        onClick={lookupOrder}
                        className="border-2 border-gray-400 bg-slate-200 px-2"
                        type="button"
                        value="Lookup"
                    />
                </span>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            {currentOrder && (
                                <div>
                                    <div key={currentOrder._id}>
                                        <BemOrderLineItem
                                            order={currentOrder}
                                            products={allProducts}
                                            ordersRefetch={ordersRefetch}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookupOrder;
