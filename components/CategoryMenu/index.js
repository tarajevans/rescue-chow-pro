import React, { useContext, useEffect, useState } from "react";
import ListsDataContex from "../../GlobalStates/listsDataState";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
    //fetch rescues from api

    const response = await fetch("/api/data/categories");
    const data = await response.json();
    return data;
};

function CategoryMenu({ setCurrentCategory }) {

    const handleClick = (id) => {
        setCurrentCategory(id);
    };

    const browseAll = () => {
        setCurrentCategory("all");
    };

    const listContext = useContext(ListsDataContex);

    const { isLoading, data } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        enabled: true,
    });

    useEffect(() => {
        if (isLoading) {
            console.log("Loading...");
        } else {
            listContext.loadCategories(data);
        }
    }, [isLoading, data]);

    return (
        <div className="bg-white">
            <div className="py-10 sm:py-10 xl:mx-auto xl:max-w-7xl xl:px-8">
                <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Shop by Category 
                    </h2>
                    <button
                        onClick={browseAll}
                        className="hidden text-sm font-semibold text-red-400 hover:text-black sm:block"
                    >
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </button>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                {listContext.data.categories.map((category) => (
                                    <a
                                        key={category._id}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleClick(category._id);
                                        }}
                                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={"https://rescue-chow-pro.s3.amazonaws.com/"+category.image}
                                                alt="#"
                                                width={100}
                                                height={100}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold text-white">
                                            {category.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 sm:hidden">
                    <a
                        href=""
                        className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CategoryMenu;
