import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const BemNav = ({ currentModule, setCurrentModule }) => {
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

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Disclosure as="nav" className="bg-red-200 border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-12 items-center justify-around">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item, idx) => (
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
