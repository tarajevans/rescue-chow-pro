import Link from "next/link";
import React, { useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Img from "../public/images/favicon.ico";
import { useState } from "react";
import dropdownImg from "../public/images/icons8-double-down-50.png";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import UserMenu from "./userMenu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CartContex from "../GlobalStates/cartState";

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    );
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    );
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    );
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    );
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
}

const Nav = () => {
    const cart = useContext(CartContex);

    const user = {
        name: "user",
        email: "user@email.com",
        imageUrl: { dropdownImg },
    };

    const navigation = [
        { name: "Home", href: "/", current: false },
        { name: "Who We Are", href: "/WhoWeAre", current: false },
        { name: "Order Now", href: "/OrderNow", current: false },
        { name: "Find A Rescue", href: "/find-a-rescue", current: false },
        { name: "Get In Touch", href: "/GetInTouch", current: false },
    ];

    const userNavigation = [
        { name: "Login", href: "#" },
        { name: "Logout", href: "#" },
        { name: "Signup", href: "#" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    // const [isCartOpen, setIsCartOpen] = useState(false);

    function toggleCart() {
        cart.toggleCart();
    }

    return (
        <Disclosure as="nav" className="bg-gray-400 border-b-4 border-white">
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
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                onClick={toggleCart}
                                className="rounded-full  p-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span role="Image" aria-label="trash">
                                    🛒
                                </span>
                            </button>
                            <UserMenu/>
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
                                <div className="flex-shrink-0">
                                    {/* <Image
                className="h-10 w-10 rounded-full"
                src={user.imageUrl}
                alt=""
              /> */}
                                </div>
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
    );
};

export default Nav;

// <div className="min-h-full ">
//       <Disclosure as="nav" className="bg-grey-223">
//         {({ open }) => (
//           <>

//             </>
//           )}
//         </Disclosure>
//       </div>

// // import Auth from "../utils/auth";
// import { idbPromise } from "../utils/helpers";
// // import { useStoreContext } from "../utils/globalState";
// import { TOGGLE_CART } from "../utils/actions";

// const user = {
//   name: "user",
//   email: "user@email.com",
//   imageUrl: { dropdownImg },
// };
// const navigation = [
//   { name: "Home", href: "/", current: false },
//   { name: "Who We Are", href: "/who-we-are", current: false },
//   { name: "Order Now", href: "/shop", current: false },
//   { name: "Find A Rescue", href: "/find-a-rescue", current: false },
//   { name: "Get In Touch", href: "/get-in-touch", current: false },
// ];

// let userNavigation = [];

// function Logout() {
//   async function clearCart() {
//     const cart = await idbPromise("cart", "get");
//     if (cart.length) {
//       cart.forEach((item) => {
//         idbPromise("cart", "delete", item);
//       });
//     }
//     setTimeout(() => {
//       window.location.assign("/");
//     }, 3000);
//   }

//   clearCart();
//   // Auth.logout();
// }

// function showNavigation() {
//   if (Auth.loggedIn()) {
//     //Auth.loggedIn()
//     userNavigation = [
//       ...userNavigation,
//       { name: "Logout", href: "/", onclick: Logout },
//       { name: "Order History", href: "/orderHistory" },
//     ];
//   } else {
//     userNavigation = [
//       ...userNavigation,
//       { name: "Login", href: "/login" },
//       { name: "Signup", href: "/signup" },
//     ];
//   }
// }
// showNavigation();
