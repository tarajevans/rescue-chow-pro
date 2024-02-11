import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const BemNav = ({ currentModule, setCurrentModule }) => {

    const { data: session, status, update } = useSession();
    const [currentNavigation, setCurrentNavigation] = useState([])

    const selectOrders = () => {
        setCurrentModule("orders");
    };

    const selectUsers = () => {
        setCurrentModule("users");
    };

    const selectProducts = () => {
        setCurrentModule("products");
    };

    const selectRescues = () => {
        setCurrentModule("rescues");
    };

    const navigation = [
        { name: "Orders", href: "#", onclick: selectOrders },
        { name: "Rescues", href: "#", onclick: selectRescues },
        { name: "Users", href: "#", onclick: selectUsers },
        { name: "Products", href: "#", onclick: selectProducts },
    ];

    const workerNavigation = [
        { name: "Orders", href: "#", onclick: selectOrders },
        { name: "Rescues", href: "#", onclick: selectRescues },
        { name: "Products", href: "#", onclick: selectProducts },
    ];

    const adminNavigation = [
        { name: "Orders", href: "#", onclick: selectOrders },
        { name: "Rescues", href: "#", onclick: selectRescues },
        { name: "Users", href: "#", onclick: selectUsers },
        { name: "Products", href: "#", onclick: selectProducts },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    useEffect(() => {
        if(session?.user?.role === 'admin'){
            setCurrentNavigation(adminNavigation)
        }

        if(session?.user?.role === 'worker'){
            setCurrentNavigation(workerNavigation)
        }
    },[])

    return (
        <Disclosure as="nav" className="bg-red-200 border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-12 items-center justify-around">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">

                                {currentNavigation.map((item, idx) => (
                                    <Link
                                    key={idx}
                                        href={item.href}
                                        onClick={item.onclick}
                                        className={classNames(
                                            "block px-4 py-2 text-md font-semibold text-gray-700"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};

export default BemNav;

// <div>
//             <div> BEM NAV {currentModule} </div>
//             {navigation.map((item) => (
//                 <Link
//                 href={item.href}
//                 onClick={item.onclick}
//                 className={classNames(
//                     "block px-4 py-2 text-sm text-gray-700"
//                 )}
//             >
//                 {item.name}
//             </Link>
//             ))}
//         </div>
