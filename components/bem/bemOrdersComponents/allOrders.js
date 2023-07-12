import BemOrderLineItem from "./bemOrderLineItem";

const AllOrders = ({ allOrders, allProducts }) => {
    return (
        <div>
            <div>
                <div>
                    {!allOrders.length ? (
                        <div> No Orders To Display</div>
                    ) : (
                        <div>
                            <div>
                                {allOrders.map((order) => (
                                    <div key={order._id}>
                                        <BemOrderLineItem
                                            order={order}
                                            products={allProducts}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
