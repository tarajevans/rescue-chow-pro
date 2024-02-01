import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// if the user is an affiliate load a page with affliate info, if user is not an affiliate present a page explaining the program and signup functions
const Affiliate = () => {
    const { data: session, status, update } = useSession();

    const [rescueName, setrescueName] = useState("");
    const [rescueUrl, setRescueUrl] = useState("");
    const [rescueDescription, setRescueDescription] = useState("");
    const [products, setProducts] = useState([]);

    const [affiliateRescue, setAffiliateRescue] = useState();
    const [affiliateEarning, setAffiliateEarnings] = useState(0.0);

    const rescueNameRef = useRef();
    const rescueUrlRef = useRef();
    const rescueDescriptionRef = useRef();

    const fetchRescue = async () => {
        const response = await fetch(
            `/api/data/rescues/${session.user.affiliateRescue}`
        );

        const stringData = await response.json();

        return stringData;
    };

    const updateRescueName = () => {
        setrescueName(rescueNameRef.current.value);
    };

    const updateRescueUrl = () => {
        setRescueUrl(rescueUrlRef.current.value);
    };

    const updateRescueDescription = () => {
        setRescueDescription(rescueDescriptionRef.current.value);
    };

    const createRescue = async (e) => {
        e.preventDefault();

        await fetch("/api/data/rescues", {
            method: "POST",
            body: JSON.stringify({
                name: rescueName,
                website: rescueUrl,
                description: rescueDescription,
                adminUser: session.user._id,
            }),
        });

        // const result = await response.json();
        update();
        // console.log(session);
    };

    const fetchProducts = async () => {
        const response = await fetch("/api/data/products");

        const productData = await response.json();

        return productData;
    };

    const fetchEarnings = async () => {
        const response = await fetch(
            `api/data/rescue_earnings/${session.user.affiliateRescue}`
        );

        const earningsData = await response.json();

        return earningsData;
    };

    const rescueEarningQuery = useQuery({
        queryKey: ["rescueEarnings"],
        queryFn: fetchEarnings,
        enabled: false,
    });

    const productQuery = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        enabled: true,
    });

    const rescueData = useQuery({
        queryKey: ["singleRescue"],
        queryFn: fetchRescue,
        enabled: false,
    });

    // useEffect(() => {
    //     if (productQuery.data) {
    //         console.log(productQuery.data)
    //         setProducts(productQuery.data);
    //     }
    //     console.log(products)
    // }, productQuery.isFetching);

    useEffect(() => {
        if (status === "authenticated") {
            if (session?.user?.isAffiliate) {
                // fetch the rescue info from the DB
                rescueData.refetch();
                rescueEarningQuery.refetch();
            }
        }
    }, [status]);

    useEffect(() => {
        if (rescueData.data) {
            setAffiliateRescue(rescueData.data);
        }
    }, [rescueData.isFetching]);

    useEffect(() => {
        let salesTotal = 0;

        if (rescueEarningQuery.data) {
            if (productQuery.data)
                rescueEarningQuery.data.map((order) => {
                    order.products.map((product) => {
                        productQuery.data.forEach((prod) => {
                            if (prod._id === product.prodId) {
                                const itemTotal = prod.price * product.qnty;
                                salesTotal = salesTotal + itemTotal;
                            }
                        });
                    });
                });
        }

        setAffiliateEarnings(salesTotal * 0.2);
    }, [rescueEarningQuery.isFetching, productQuery.isFetching]);

    return (
        <div className="pt-32">
            {status === "authenticated" ? (
                <div>
                    {session.user.isAffiliate ? (
                        <div>
                            <div>Is affiliate</div>
                            {affiliateRescue && (
                                <div>
                                    <div>
                                        {" "}
                                        Rescue Name: {affiliateRescue.name}{" "}
                                    </div>
                                    <div>
                                        {" "}
                                        Rescue Website:{" "}
                                        {affiliateRescue.website}{" "}
                                    </div>
                                    <div>
                                        {" "}
                                        Rescue Description:{" "}
                                        {affiliateRescue.description}
                                    </div>
                                    <div>
                                        {" "}
                                        {affiliateRescue.active ? (
                                            <div> Rescue Status: Active</div>
                                        ) : (
                                            <div> Rescue Status: Pending </div>
                                        )}
                                    </div>

                                    <div>
                                        Affiliate Link:
                                        https://rescue-chow-pro.vercel.app/orderNow/
                                        {affiliateRescue._id}
                                    </div>

                                    <div>
                                        Affiliate Earnings: ${affiliateEarning}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div> Affiliate Signup</div>
                            <div> Describe the program here </div>
                            <div>
                                <div>Sign Up</div>
                                <div>
                                    <form>
                                        <div>
                                            <label
                                                htmlFor="rescueName"
                                                className="pr-2"
                                            >
                                                Animal Rescue Name:
                                            </label>
                                            <input
                                                className="border-2"
                                                type="text"
                                                ref={rescueNameRef}
                                                onChange={updateRescueName}
                                                id="recueName"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="rescueUrl"
                                                className="pr-2"
                                            >
                                                Animal Rescue URL:
                                            </label>
                                            <input
                                                className="border-2"
                                                type="text"
                                                ref={rescueUrlRef}
                                                onChange={updateRescueUrl}
                                                id="rescueUrl"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="rescueDescription"
                                                className="pr-2"
                                            >
                                                Animal Rescue Description:
                                            </label>
                                            <input
                                                className="border-2"
                                                type="text"
                                                ref={rescueDescriptionRef}
                                                onChange={
                                                    updateRescueDescription
                                                }
                                                id="rescueDescription"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                onClick={createRescue}
                                                className="border-2"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div>Please Log In to continue</div>
            )}
        </div>
    );
};

export default Affiliate;
