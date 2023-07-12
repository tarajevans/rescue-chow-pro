import { Disclosure } from "@headlessui/react";
import Link from "next/link";


const ProdNav = ({ currentModule, setCurrentModule }) => {
    const selectnewProduct = () => {
        setCurrentModule("new");
    };

    const selectAll = () => {
        setCurrentModule("all");
    };

    const selectLookup = () => {
        setCurrentModule("lookup");
    };

    const navigation = [
        { name: "All Products", href: "#", onclick: selectAll },
        { name: "Create New Product", href: "#", onclick: selectnewProduct },
        { name: "lookupProduct", href: "#", onclick: selectLookup },
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
}

export default ProdNav;