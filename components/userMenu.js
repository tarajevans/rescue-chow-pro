// import { Menu, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import Link from "next/link";

// const UserMenu = () => {
//     const userNavigation = [
//         { name: "Login", href: "#" },
//         { name: "Logout", href: "#" },
//         { name: "Signup", href: "#" },
//     ];

//     function classNames(...classes) {
//         return classes.filter(Boolean).join(" ");
//     }

//     return(
//     <div>
//         <Menu>
//             <div className="float">
//                 <Menu.Button>options</Menu.Button>
//                 <Menu.Items>
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         {userNavigation.map((item) => (
//                             <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                     <Link
//                                         href={item.href}
//                                         onClick={item.onclick}
//                                         className={classNames(
//                                             active ? "bg-gray-100" : "",
//                                             "block px-4 py-2 text-sm text-gray-700"
//                                         )}
//                                     >
//                                         {item.name}
//                                     </Link>
//                                 )}
//                             </Menu.Item>
//                         ))}
//                     </Menu.Items>
//                 </Menu.Items>
//             </div>
//         </Menu>
//     </div>
//     )
// };

// export default UserMenu;

import React, { forwardRef } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Img from "../public/images/favicon.ico";
import { useState } from "react";
import dropdownImg from "../public/images/icons8-double-down-50.png";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut } from "next-auth/react";

const UserMenu = () => {
    const userNavigation = [
        { name: "Login", href: "#", onclick: signIn },
        { name: "Logout", href: "#", onclick: signOut },
        { name: "Signup", href: "/signup" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div>
            <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-red-400 outline outline-3 outline-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <Image
                        className="h-8 w-8 rounded-full p-1 "
                        src={dropdownImg}
                        alt=""
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                    <Link
                                        href={item.href}
                                        onClick={item.onclick}
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>

            {/* <Menu>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-red-400 outline outline-3 outline-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <Image
                        className="h-8 w-8 rounded-full p-1 "
                        src={dropdownImg}
                        alt=""
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu>
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                        <Link
                                            href={item.href}
                                            onClick={item.onclick}
                                            className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Menu>
                </Transition>
            </Menu> */}
        </div>
    );
};

export default UserMenu;
