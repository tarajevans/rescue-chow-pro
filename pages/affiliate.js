import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// if the user is an affiliate load a page with affliate info, if user is not an affiliate present a page explaining the program and signup functions
const Affiliate = () => {
    const { data: session, status, update } = useSession();

    const [rescueName, setrescueName] = useState("");
    const [rescueUrl, setRescueUrl] = useState("");
    const [rescueDescription, setRescueDescription] = useState("");

    const [affiliateRescue, setAffiliateRescue] = useState();

    const rescueNameRef = useRef();
    const rescueUrlRef = useRef();
    const rescueDescriptionRef = useRef();

    const fetchRescue = async () => {
        const response = await fetch(
            `/api/data/rescues/${session.user.affiliateRescue}`
        );

        const stringData = await response.json();

        console.log(stringData);
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

    const { data, error, refetch, isfetching, isError, isInitialLoading } =
        useQuery({
            queryKey: ["singleRescue"],
            queryFn: fetchRescue,
            enabled: false,
        });

    useEffect(() => {
        if (status === "authenticated") {
            if (session?.user?.isAffiliate) {
                // fetch the rescue info from the DB
                refetch();
            }
        }
    }, [status]);

    useEffect(() => {
        if (data) {
            setAffiliateRescue(data);
        }
    }, [isfetching]);

    return (
        <div>
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
                                        {affiliateRescue.acive ? (
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
                                                Create Rescue
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
