import React, { useContext, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { CheckIcon } from "@heroicons/react/24/outline";
import { idbPromise } from "../utils/helpers";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

function Success() {
    const { data: session, status } = useSession();
    // signIn("direct_jwt_auth", null, { credentials: { id: "testId" } });
    // const user = session.user;

    useEffect(() => {
        if (status === "authenticated") {
            console.log(session);
            saveOrder();
        }
    }, [status]);

    // console.log(session);
    const saveOrder = async () => {
        const cart = await idbPromise("cart", "get");
        const products = [];

        cart.forEach((item) => {
            let newItem = { prodId: item._id, qnty: item.quantity };
            products.push(newItem);
            idbPromise("cart", "delete", item);
        });

        if (products.length) {
            const rescues = await idbPromise("selectedRescue", "get");
            const rescue = rescues[0];
            // console.log(rescues);
            rescues.forEach((rescue) => {
                idbPromise("selectedRescue", "delete", rescue);
            });
            const response = await fetch("/api/data/orders", {
                method: "POST",
                body: JSON.stringify({
                    products: products,
                    rescue: rescue._id,
                    customer: session.user._id,
                    status: "new",
                }),
            });
        }

        setTimeout(() => {
            window.location.assign("/");
        }, 10000);
    };

    return (
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Jumbotron>
                <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckIcon
                                className="h-6 w-6 text-green-600"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                            <div
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Payment successful
                            </div>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Thank you for your purchase!
                                </p>
                            </div>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    You will now be redirected to the Home Page
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Success;
