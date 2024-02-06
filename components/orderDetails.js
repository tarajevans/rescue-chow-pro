import { useEffect, useState } from "react";

const OrderDetails = ({ order, productList, paymentStatus }) => {
    const [orderTotal, setOrderTotal] = useState(0);
    const [products, setProducts] = useState([]);

    // const products = [];

    const findProduct = (prodId) => {
        let curProd;
        productList.forEach((prod) => {
            if (prod._id === prodId) {
                curProd = prod;
            }
        });
        return curProd;
    };

    useEffect(() => {
        const items = order.products;
        if (items.length){
            items.map((item) => {
                const curProd = findProduct(item.prodId);
                const newProd = { product: curProd, qnty: item.qnty };
                setProducts([...products, newProd]);
                // products.push(newProd);
                const newTotal = orderTotal + (curProd.price * item.qnty);
                setOrderTotal(newTotal)
            });
        }
    },[])

    return (
        <div>
            <div>
                <div className="py-2">Payment Status: {paymentStatus}</div>
                <ul>
                    {products.map((product) => (
                        <li key={product.product._id}>
                            Qnty:{product.qnty} - {product.product.name}
                        </li>
                    ))}
                </ul>
                <span>Order Total: {orderTotal}</span>
            </div>
        </div>
    );
};

export default OrderDetails;
