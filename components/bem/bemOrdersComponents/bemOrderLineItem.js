import { useState } from "react";
import BemProdLineItem from "./bemProdLineItem";

const BemOrderLineItem = ({ order, products }) => {
    const [showDetails, setShowDetails] = useState(false);
console.log(order)
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const getOrderedProducts = () => {
        let orderedProducts = [];
        if (order.products.length) {
            order.products.map((item) => {
                const selectedItem = products.filter(
                    (product) => product._id === item.prodId
                );

                const newLineItem = {product: selectedItem[0], qnty: item.qnty}
                orderedProducts.push(newLineItem);
            });
        }
        return orderedProducts;
    };

    const orderedItems = getOrderedProducts();
    return (
        <div>
            {" "}
            <div className="py-2">
                <div className="bg-green-100 rounded overflow-hidden shadow-lg border-2 border-green-700">
                    <div>
                        <span className="font-bold">Order#</span> {order._id},{" "}
                        <span className="font-bold">Order Date: </span>
                        {order.purchaseDate},{" "}
                        <span className="font-bold pl-4">Status: </span>
                        <span className="pl-1 pr-4">{order.status}</span>
                        <button
                            className="border-2 bg-gray-300 border-black rounded"
                            onClick={toggleDetails}
                        >
                            <span className="px-1">Details</span>
                        </button>
                    </div>
                    {showDetails && (
                        <div>
                            <div className=" flex flex-row">
                                <div id="products" className="px-2" >
                                    {orderedItems.map((item) => (
                                        <div key={item.product._id}>
                                            <BemProdLineItem item={item} />
                                        </div>
                                    ))}
                                </div>
                                <div id="shipping" className="px-2">
                                    <div>
                                        <div><span className="font-bold ">Shippping Address:</span></div>
                                        <div>{order.shipLine1}</div>
                                        <div>{order.shipLine2}</div>
                                        <div>{order.shipCity}, {order.shipProv} {order.shipPostalCode} </div>
                                    </div>
                                </div>
                                <div id="payment_status">
                                        <div><span className="font-bold pl-8">Payment Status: </span>{order.paymentStatus}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BemOrderLineItem;
