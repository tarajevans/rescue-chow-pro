import { useEffect, useState } from "react";
import BemNav from "../../components/bem/bemNav";
import BemOrders from "../../components/bem/BemOrders";
import BemProducts from "../../components/bem/bemProducts";
import BemRescues from "../../components/bem/bemRescues";
import BemUsers from "../../components/bem/bemUsers";
import { useQuery } from "@tanstack/react-query";

const fetchRescues = async () => {
    const response = await fetch("/api/data/rescues");
    const data = await response.json();
    return data;
};

const fetchProducts = async () => {
    const response = await fetch("/api/data/products");
    const data = await response.json();
    return data;
};

const fetchOrders = async () => {
    //fetch orders from api
    const response = await fetch("/api/data/orders");
    const data = await response.json();

    // const openOrders = data.filter((order) => order.status === "new");
    return data;
};

const fetchUsers = async () => {
    const response = await fetch("/api/data/users");
    const data = await response.json();

    return data;
};

const BemPage = () => {
    const [currentModule, setCurrentModule] = useState("orders");
    const [isDataLoading, setIsDataLoading] = useState(true);

    const [allOrders, setAllOrders] = useState();
    const [allProducts, setAllProducts] = useState();
    const [allRescues, setAllRescues] = useState();
    const [allUsers, setAllUsers] = useState();

    const usersQuery = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        enabled: true,
    });

    const ordersQuery = useQuery({
        queryKey: ["orders"],
        queryFn: fetchOrders,
        enabled: true,
    });

    const productsQuery = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        enabled: true,
    });

    const rescuesQuery = useQuery({
        queryKey: ["rescuesa"],
        queryFn: fetchRescues,
        enabled: true,
    });

    return (
        <div>
            {productsQuery.status === "success" ? (
                <div>
                    {rescuesQuery.status === "success" ? (
                        <div>
                            {ordersQuery.status === "success" ? (
                                <div>
                                    {usersQuery.status === "success" ? (
                                        <div>
                                            <div>
                                                <BemNav
                                                    currentModule={
                                                        currentModule
                                                    }
                                                    setCurrentModule={
                                                        setCurrentModule
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <div>
                                                    {currentModule ===
                                                        "orders" && (
                                                        <BemOrders
                                                            allOrders={
                                                                ordersQuery.data
                                                            }
                                                            allProducts={
                                                                productsQuery.data
                                                            }
                                                            ordersRefetch={
                                                                ordersQuery.refetch
                                                            }
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    {currentModule ===
                                                        "products" && (
                                                        <BemProducts
                                                            allProducts={
                                                                productsQuery.data
                                                            }
                                                            productRefetch={
                                                                productsQuery.refetch
                                                            }
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    {currentModule ===
                                                        "users" && (
                                                        <BemUsers
                                                            allUsers={
                                                                usersQuery.data
                                                            }
                                                            userRefetch={
                                                                usersQuery.refetch
                                                            }
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    {currentModule ===
                                                        "rescues" && (
                                                        <BemRescues
                                                            allRescues={
                                                                rescuesQuery.data
                                                            }
                                                            rescueRefetch={
                                                                rescuesQuery.refetch
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div> Loading ... </div>
                                    )}
                                </div>
                            ) : (
                                <div> Loading ...</div>
                            )}
                        </div>
                    ) : (
                        <div> Loading ...</div>
                    )}
                </div>
            ) : (
                <div> Loading ...</div>
            )}
        </div>
    );
};

export default BemPage;
