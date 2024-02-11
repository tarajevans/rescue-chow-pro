import React, { forwardRef, useEffect } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const UserMenu = () => {
    const { data: session, status } = useSession();
    const [historyLink, setHistoryLink] = useState();

    useEffect(() => {
        if (status === "authenticated") {
            if(session?.user?._id){
            setHistoryLink(session.user._id.toString());
            }
        }

        if (status === "loading" || status === "unauthenticated") {
            setHistoryLink("");
        }
    }, [status, session]);

    const loggedOutNavigation = [
        { name: "Login", href: "#", onclick: signIn },
        { name: "Signup", href: "/signup" },
    ];

    const loggedInNavigation = [
        { name: "Order History", href: `/order-history` },
        { name: "Affiliate", href: `/affiliate` },
        { name: "Logout", href: "#", onclick: signOut },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div>
            <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-red-400 outline outline-3 outline-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full p-1 "
                        src="https://rescue-chow-pro.s3.amazonaws.com/icons8-double-down-50.png"
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
                        {status === "authenticated"
                            ? loggedInNavigation.map((item) => (
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
                              ))
                            : loggedOutNavigation.map((item) => (
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
        </div>
    );
};

export default UserMenu;
