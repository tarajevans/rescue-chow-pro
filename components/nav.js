import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Img from "../public/images/favicon.ico";
import { useState } from "react";
import dropdownImg from "../public/images/icons8-double-down-50.png";
import CartFull1 from "../public/images/CartFull1.png";
import CartEmpty from "../public/images/CartEmpty.png";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import UserMenu from "./userMenu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CartContex from "../GlobalStates/cartState";
import { useSession } from "next-auth/react";

const Nav = () => {
    const cart = useContext(CartContex);
    const { data: session, status, update } = useSession();

    const navigation = [
        { name: "Home", href: "/", current: false },
        { name: "Who We Are", href: "/#WhoWeAre", current: false },
        { name: "Order Now", href: "/OrderNow", current: false },
        { name: "Find A Rescue", href: "/find-a-rescue", current: false },
        { name: "Get In Touch", href: "/#GetInTouch", current: false },
    ];

    const userNavigation = [
        { name: "Login", href: "#" },
        { name: "Logout", href: "#" },
        { name: "Signup", href: "#" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    function toggleCart() {
        cart.toggleCart();
    }

    return (
        <div className="fixed top-0 w-full z-50 shadow-md">
            <Disclosure
                as="nav"
                className="bg-gray-400 border-b-4 border-white"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-around">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    className="h-8 w-8"
                                    src={Img}
                                    width={60}
                                    height={60}
                                    alt="rescue chow logo"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-700 hover:bg-red-400 hover:text-white",
                                                "px-3 py-2 rounded-md text-base font-semibold"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            {status === "authenticated" && (<span className="">Welcome, {" "}{session.user.username}</span>) }
                            </div>

                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    type="button"
                                    onClick={toggleCart}
                                    className="rounded-full  p-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span role="Image" aria-label="cart">
                                        {cart.cart.products.length > 0 ? (
                                            <div>
                                                <Image
                                                    className="h-10 w-10 rounded-full p-1 "
                                                    src={CartFull1}
                                                    alt=""
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <Image
                                                    className="h-10 w-10 rounded-full p-1"
                                                    src={CartEmpty}
                                                    alt=""
                                                />
                                            </div>
                                        )}
                                    </span>
                                </button>
                                <UserMenu />
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open main menu</span>
                                {true ? (
                                    <XMarkIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                    />
                                )}
                            </Disclosure.Button>
                        </div>
                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-4 pb-3">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0"></div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">
                                            Tara
                                        </div>
                                        <div className="text-sm font-medium leading-none text-gray-400">
                                            tarajevans@hotmail.com
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto  flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <BellIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
};

export default Nav;
