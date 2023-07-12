import { useRef, useState } from "react";
import BemProdLineItem from "./bemProdLineItem";

const BemOrderLineItem = ({ order, products, ordersRefetch }) => {
    console.log(products);
    const [showDetails, setShowDetails] = useState(false);
    const [orderStatus, setOrderStatus] = useState();

    const orderStatusRef = useRef();

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleStatusUpdate = async () => {
        const orderStatusObj = { status: orderStatus };
        console.log(orderStatusObj);
        const result = await fetch(`/api/data/orders/${order._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderStatusObj),
        });
        if (!result) {
            console.log("ERROR line 14");
        }
        ordersRefetch();
    };

    const handleStatusChange = (e) => {
        const updatedStatus = e.target.value;
        setOrderStatus(updatedStatus);
    };

    const getOrderedProducts = () => {
        let orderedProducts = [];
        if (order.products.length) {
            order.products.map((item) => {
                console.log(products);
                const selectedItem = products.filter(
                    (product) => product._id === item.prodId
                );

                const newLineItem = {
                    product: selectedItem[0],
                    qnty: item.qnty,
                };
                orderedProducts.push(newLineItem);
            });
        }
        return orderedProducts;
    };

    const orderedItems = getOrderedProducts();
    return (
        <div>
            <div>
                {order.paymentStatus != "success" ? (
                    <div>
                        {" "}
                        <div className="py-2">
                            <div className="bg-red-100 rounded overflow-hidden shadow-lg border-2 border-red-700">
                                <div className="py-2">
                                    <span className="font-bold">Order#</span>{" "}
                                    {order._id},{" "}
                                    <span className="font-bold">
                                        Order Date:{" "}
                                    </span>
                                    {order.purchaseDate},{" "}
                                    <span className="font-bold pl-4">
                                        Status:{" "}
                                    </span>
                                    <span className="pl-1 pr-4">
                                        {order.status}
                                    </span>
                                    <button
                                        className="border-2 bg-gray-300 border-black rounded"
                                        onClick={toggleDetails}
                                    >
                                        <span className="px-1">Details</span>
                                    </button>
                                    <span className="px-4">
                                        <label>
                                            Select Status:{" "}
                                            <span className="px-1">
                                                <select
                                                    defaultValue={order.status}
                                                    ref={orderStatusRef}
                                                    onChange={
                                                        handleStatusChange
                                                    }
                                                >
                                                    <option value="new">
                                                        {" "}
                                                        New{" "}
                                                    </option>
                                                    <option value="picking">
                                                        {" "}
                                                        Picking{" "}
                                                    </option>
                                                    <option value="picked">
                                                        {" "}
                                                        Picked{" "}
                                                    </option>
                                                    <option value="shipped">
                                                        {" "}
                                                        Shipped{" "}
                                                    </option>
                                                </select>
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <input
                                            className="rounded border-2 border-slate-500 bg-slate-200 px-1"
                                            type="button"
                                            value="Update Status"
                                            onClick={handleStatusUpdate}
                                        />
                                    </span>
                                </div>
                                {showDetails && (
                                    <div>
                                        <div className=" flex flex-row">
                                            <div id="products" className="px-2">
                                                {orderedItems.map((item) => (
                                                    <div key={item.product._id}>
                                                        <BemProdLineItem
                                                            item={item}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div id="shipping" className="px-2">
                                                <div>
                                                    <div>
                                                        <span className="font-bold ">
                                                            Shippping Address:
                                                        </span>
                                                    </div>
                                                    <div>{order.shipLine1}</div>
                                                    <div>{order.shipLine2}</div>
                                                    <div>
                                                        {order.shipCity},{" "}
                                                        {order.shipProv}{" "}
                                                        {order.shipPostalCode}{" "}
                                                    </div>
                                                    <div>
                                                        {order.shipCountry}
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="payment_status">
                                                <div>
                                                    <span className="font-bold pl-8">
                                                        Payment Status:{" "}
                                                    </span>
                                                    {order.paymentStatus}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                        {" "}
                        <div className="py-2">
                            <div className="bg-green-100 rounded overflow-hidden shadow-lg border-2 border-green-700">
                                <div className="py-2">
                                    <span className="font-bold">Order#</span>{" "}
                                    {order._id},{" "}
                                    <span className="font-bold">
                                        Order Date:{" "}
                                    </span>
                                    {order.purchaseDate},{" "}
                                    <span className="font-bold pl-4">
                                        Status:{" "}
                                    </span>
                                    <span className="pl-1 pr-4">
                                        {order.status}
                                    </span>
                                    <button
                                        className="border-2 bg-gray-300 border-black rounded"
                                        onClick={toggleDetails}
                                    >
                                        <span className="px-1">Details</span>
                                    </button>
                                    <span className="px-4">
                                        <label>
                                            Select Status:{" "}
                                            <span className="px-1">
                                                <select
                                                    defaultValue={order.status}
                                                    ref={orderStatusRef}
                                                    onChange={
                                                        handleStatusChange
                                                    }
                                                >
                                                    <option value="new">
                                                        {" "}
                                                        New{" "}
                                                    </option>
                                                    <option value="picking">
                                                        {" "}
                                                        Picking{" "}
                                                    </option>
                                                    <option value="picked">
                                                        {" "}
                                                        Picked{" "}
                                                    </option>
                                                    <option value="shipped">
                                                        {" "}
                                                        Shipped{" "}
                                                    </option>
                                                </select>
                                            </span>
                                        </label>
                                    </span>
                                    <span>
                                        <input
                                            className="rounded border-2 border-slate-500 bg-slate-200 px-1"
                                            type="button"
                                            value="Update Status"
                                            onClick={handleStatusUpdate}
                                        />
                                    </span>
                                </div>
                                {showDetails && (
                                    <div>
                                        <div className=" flex flex-row">
                                            <div id="products" className="px-2">
                                                {orderedItems.map((item) => (
                                                    <div key={item.product._id}>
                                                        <BemProdLineItem
                                                            item={item}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div id="shipping" className="px-2">
                                                <div>
                                                    <div>
                                                        <span className="font-bold ">
                                                            Shippping Address:
                                                        </span>
                                                    </div>
                                                    <div>{order.shipLine1}</div>
                                                    <div>{order.shipLine2}</div>
                                                    <div>
                                                        {order.shipCity},{" "}
                                                        {order.shipProv}{" "}
                                                        {order.shipPostalCode}{" "}
                                                    </div>
                                                    <div>
                                                        {order.shipCountry}
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="payment_status">
                                                <div>
                                                    <span className="font-bold pl-8">
                                                        Payment Status:{" "}
                                                    </span>
                                                    {order.paymentStatus}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BemOrderLineItem;
