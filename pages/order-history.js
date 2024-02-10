import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Order, Product } from "../models";
import OrderLineItem from "../components/orderLineItem";

const mapOrders = () => {};

const findProduct = (prodId, productList) => {
    let curProd;
    productList.forEach((prod) => {
        if (prod._id === prodId) {
            curProd = prod;
        }
    });
    return curProd;
};

const orderHistory = ({ orders, products }) => {
    const { data: session, status } = useSession();
    // const [userId, setUserId] = useState();
    // const [myOrders, setMyOrders] = useState([]);

       return (
        <div>
            <div> Order History </div>
            <div>
                <ul>
                    {orders.map((order) => (
                        <OrderLineItem
                            date={order.purchaseDate}
                            orderNum={order._id}
                            status={order.status}
                            key={order._id}
                            popProducts={order.popProdList}
                            productList={products}
                            order={order}
                            paymentStatus={order.paymentStatus}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default orderHistory;

export const getServerSideProps = async (ctx) => {
    const thisSession = await getSession(ctx);

    const allOrders = await Order.find({ customer: thisSession.user._id })
        .populate("rescue")
        .populate("customer");
    const orderData = JSON.parse(JSON.stringify(allOrders));

    const allProducts = await Product.find();
    const prodData = JSON.parse(JSON.stringify(allProducts));

    orderData.map((order) => {
        const popProdList = [];
        let orderTotal = 0;
        if (order.products) {
            order.products.map((product) => {
                const thisProd = findProduct(product.prodId, prodData);
                const newProdObj = { product: thisProd, qnty: product.qnty };
                popProdList.push(newProdObj);
                orderTotal += (thisProd.price * product.qnty)
            });
        }
        Object.assign(order, { populatedProdList: popProdList, orderTotal: orderTotal });
    });

    return { props: { orders: orderData, products: prodData } };
};
