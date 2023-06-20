import { Order, Product } from "../../models";
import OrderLineItem from "../../components/orderLineItem";

const OrdersPage = ({ orders, products }) => {
    // console.log(products);

    // orders.forEach((order) => {
    //     console.log(order._id);
    // });

    return (
        <div>
            <div>This is the Orders Management Page</div>
            <div>
                <ul>
                    {orders.map((order) => (
                        <OrderLineItem
                            date={order.purchaseDate}
                            orderNum={order._id}
                            status={order.status}
                            key={order._id}
                            products = {order.products}
                            productList={products}
                            order={order}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrdersPage;

export const getServerSideProps = async () => {
    const allOrders = await Order.find()
        .populate("rescue")
        .populate("customer");

    const OrderData = JSON.parse(JSON.stringify(allOrders));

    const allProducts = await Product.find();
    const ProdData = JSON.parse(JSON.stringify(allProducts));

    return { props: { orders: OrderData, products: ProdData } };
};
