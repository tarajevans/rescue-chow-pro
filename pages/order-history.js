import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Order, Product } from "../models";
import OrderLineItem from "../components/orderLineItem";

const orderHistory = ({ orders, products }) => {
    const { data: session, status } = useSession();
    const [userId, setUserId] = useState();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        if (status === "authenticated") {
            setUserId(session.user._id);
        }
    }, [status, session]);

    useEffect(() => {
        if (userId) {
            // fetch all orders with the userId of the current user
            const selectedOrders = orders.filter(
                (order) => order.customer._id === userId
            );

            if (selectedOrders.length) {
                setMyOrders(selectedOrders);
            }
            // save orders in the orders state
        }
    }, [userId]);

    // console.log(myOrders);

    return (
        <div>
            <div> Order History </div>
            <div>
                <ul>
                    {myOrders.map((order) => (
                        <OrderLineItem
                            date={order.purchaseDate}
                            orderNum={order._id}
                            status={order.status}
                            key={order._id}
                            products={order.products}
                            productList={products}
                            order={order}
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

    const OrderData = JSON.parse(JSON.stringify(allOrders));
    const allProducts = await Product.find();
    const ProdData = JSON.parse(JSON.stringify(allProducts));

    return { props: { orders: OrderData, products: ProdData } };
};
