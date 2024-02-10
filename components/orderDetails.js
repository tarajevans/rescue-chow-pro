import { useEffect, useState } from "react";

const OrderDetails = ({ order, paymentStatus }) => {
    const [orderTotal, setOrderTotal] = useState(0);

    return (
        <div>
            <div>
                <div className="py-2">Payment Status: {paymentStatus}</div>
                <ul>
                    {order.populatedProdList.map((product) => (
                        <li key={product.product._id}>
                            Qnty:{product.qnty} - {product.product.name}
                        </li>
                    ))}
                </ul>
                <span>Order Total: ${order.orderTotal}</span>
            </div>
        </div>
    );
};

export default OrderDetails;
