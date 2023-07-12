import { Disclosure } from "@headlessui/react";
import Link from "next/link";



const OrdersNav = ({ currentModule, setCurrentModule }) => {

    const selectOpen = () => {
        setCurrentModule("open");
    };

    const selectShipped = () => {
        setCurrentModule("shipped");
    };

    const selectAll = () => {
        setCurrentModule("all");
    };

    const selectLookup = () => {
        setCurrentModule("lookup");
    };

    const navigation = [
        { name: "Open Orders", href: "#", onclick: selectOpen },
        { name: "Shipped Orders", href: "#", onclick: selectShipped },
        { name: "All Orders", href: "#", onclick: selectAll },
        { name: "Lookup Order", href: "#", onclick: selectLookup },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Disclosure as="nav" className="bg-yellow-200 border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-8 items-center justify-around">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item, idx) => (
                                    <Link
                                    key={idx}
                                        href={item.href}
                                        onClick={item.onclick}
                                        className={classNames(
                                            "block px-4 py-2 text-sm text-gray-700"
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

export default OrdersNav;
