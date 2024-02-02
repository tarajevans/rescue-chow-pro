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
        <div className="pt-32 bg-rescue-paws bg-center pb-32">
            <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <h2 className="text-8xl font-medium font-love text-red-400">
                    Welcome Affiliate!
                </h2>
            </div>
            <div className=" pt-24 flex flex-row items-center justify-center space-x-4">
                {status === "authenticated" ? (
                    <div>
                        {session.user.isAffiliate ? (
                            <div>
                                {affiliateRescue && (
                                    <div>
                                        <div className="text-2xl font-serif text-gray-600 font-semibold">
                                            {" "}
                                            Rescue Name: {
                                                affiliateRescue.name
                                            }{" "}
                                        </div>
                                        <div className="text-2xl font-serif text-gray-600 font-semibold">
                                            {" "}
                                            Rescue Website:{" "}
                                            {affiliateRescue.website}{" "}
                                        </div>
                                        <div className="text-2xl font-serif text-gray-600 font-semibold">
                                            {" "}
                                            Rescue Description:{" "}
                                            {affiliateRescue.description}
                                        </div>
                                        <div className="text-2xl font-serif text-gray-600 font-semibold">
                                            {" "}
                                            {affiliateRescue.active ? (
                                                <div>
                                                    {" "}
                                                    Rescue Status: Active
                                                </div>
                                            ) : (
                                                <div>
                                                    {" "}
                                                    Rescue Status: Pending{" "}
                                                </div>
                                            )}
                                        </div>
                                        {affiliateRescue.active ? (
                                            <div className="text-2xl font-serif text-gray-600 font-semibold">
                                                Affiliate Link:
                                                https://rescue-chow-pro.vercel.app/orderNow/
                                                {affiliateRescue._id}
                                            </div>
                                        ) : (
                                            <div className="text-2xl font-serif text-gray-600 font-semibold">
                                                Affiliate Link: Your affiliate
                                                link will be available after our
                                                staff approves your Rescue
                                            </div>
                                        )}

                                    <div className="text-2xl font-serif text-gray-600 font-semibold">
                                        Affiliate earnings to date: ${affiliateEarning}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                    ) : (
                        <div className="pt-32 bg-rescue-paws bg-center pb-32">
                            <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                                <h2 className="text-8xl font-medium font-love text-red-400">
                                    Affiliate Application
                                </h2>
                            </div>
                            <div> Describe your organization! Please keep this to 1-2 sentences.  This is what the customer will read when choosing a charity to support.</div>
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
        </div>
    );
};

export default Affiliate;
