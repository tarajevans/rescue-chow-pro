import React, { useEffect, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { loadStripe } from "@stripe/stripe-js";
import CartItem from "../CartItem";
import "./style.module.css";
import CartContex from "../../GlobalStates/cartState";
import { useQuery } from "@tanstack/react-query";
import { Result } from "postcss";
import { useSession } from "next-auth/react";
import { idbPromise } from "../../utils/helpers";
import ListsDataContex from "../../GlobalStates/listsDataState";

const stripePromise = loadStripe(
    "pk_test_51LwBkjLpYjTk7wEvqTVHj6U7uKjLuHKc2dnyWXW21jXoMfXoP9EAAbD1JIkMqXWOVqwUGMY9M5GbmoktReevW0Lq00Jm9RbWPH"
);

const Cart = (props) => {
    const cartContext = useContext(CartContex);
    const listDataContext = useContext(ListsDataContex);

    const { data: session, status } = useSession();

    function toggleCart() {
        cartContext.toggleCart();
    }

    function calculateTotal() {
        let sum = 0;
        cartContext.cart.products.forEach((item) => {
            sum += item.price * item.quantity;
        });
        return sum.toFixed(2);
    }

    async function submitCheckout() {
        const products = prepCart();
        const response = await fetch("/api/data/checkout", {
            method: "POST",
            body: JSON.stringify({ products: products }),
        });

        const data = await response.json();

        // save order with stripe sessionId
        saveOrder(data, products);

        stripePromise.then((res) => {
            res.redirectToCheckout({
                sessionId: data,
            });
        });
    }

    const saveOrder = async (stripeSessionId, productsIn) => {
        if (productsIn.length) {
            const selectedRescue = listDataContext.data.rescues.filter(
                (rescue) => rescue._id === cartContext.cart.selectedRescueValue
            );

            console.log(selectedRescue);

            const response = await fetch("/api/data/orders", {
                method: "POST",
                body: JSON.stringify({
                    products: productsIn,
                    rescue: selectedRescue[0]._id,
                    customer: session.user._id,
                    status: "new",
                    stripeSessionId: stripeSessionId,
                    paymentStatus: "pending",
                }),
            });
        }
    };

    const prepCart = () => {
        const products = [];
        cartContext.cart.products.forEach((item) => {
            const newLine = { prodId: item._id, qnty: item.quantity };
            products.push(newLine);
        });
        return products;
    };

    const onlyProceeds = () => {
        const treatRemoved = calculateTotal() / 4;
        return treatRemoved.toFixed(2);
    };

    return (
        <Transition.Root show={cartContext.cart.cartOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={toggleCart}>
                <div className="fixed inset-0" />
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Checkout
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                                        onClick={toggleCart}
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <XMarkIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-200">
                                            <div className="px-6"></div>
                                        </div>
                                        <ul className=" divide-y divide-gray-200 overflow-y-auto">
                                            {cartContext.cart.products.map(
                                                (item) => (
                                                    <CartItem
                                                        key={item._id}
                                                        item={item}
                                                    />
                                                )
                                            )}
                                        </ul>
                                        <div className="flex flex-col align-center justify-center">
                                            <span className="text-sm ml-4 mt-2 font-medium text-gray-900">
                                                {
                                                    cartContext.cart
                                                        .selectedRescueValue
                                                }
                                            </span>
                                            <span className="ml-4 mt-1 text-sm text-gray-500">
                                                25% of this purchase ($
                                                {onlyProceeds()}) is saving
                                                animals!
                                            </span>
                                            <strong className="relative ml-4 mb-4 mt-1  text-lg font-semibold text-black">
                                                Total: ${calculateTotal()}
                                            </strong>
                                            {status === "authenticated" ? (
                                                <button
                                                    className="ml-4 my-2 inline-flex items-center justify-center rounded-md border border-gray-400 bg-red-300 px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                                    onClick={submitCheckout}
                                                >
                                                    Checkout
                                                </button>
                                            ) : (
                                                <span>
                                                    (your session timed out,
                                                    please log back in to
                                                    checkout)
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Cart;
