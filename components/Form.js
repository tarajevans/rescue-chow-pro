import React, { useContext, useEffect, useState } from "react";
import ListsDataContex from "../GlobalStates/listsDataState";
import { useQuery } from "@tanstack/react-query";
import CartContext from "../GlobalStates/cartState";
import { idbPromise } from "../utils/helpers";

const fetchRescues = async () => {
    //fetch rescues from api
    const response = await fetch("/api/data/rescues");
    const data = await response.json();

    const activeRscues = data.filter((rescue) => rescue.active === true);
    return activeRscues;
};

const saveSelectedRescue = async (rescueIn) => {
    const slRescues = await idbPromise("selectedRescue", "get");
    if (slRescues.length) {
        slRescues.forEach((rescue) => {
            idbPromise("selectedRescue", "delete", rescue);
        });
    }
    idbPromise("selectedRescue", "put", rescueIn);
};

function RescueForm() {
    const [radio, setRadio] = useState("None");
    const [selectedRescue, setSelectedRescue] = useState();

    const listContext = useContext(ListsDataContex);
    const cartContext = useContext(CartContext);

    const { isLoading, data } = useQuery({
        queryKey: ["rescues"],
        queryFn: fetchRescues,
        enabled: true,
    });

    useEffect(() => {
        if (selectedRescue) {
            setRadio(selectedRescue.name);
            cartContext.setRescue(selectedRescue._id);
            saveSelectedRescue(selectedRescue);
        }
    }, [selectedRescue]);

    useEffect(() => {
        if (isLoading) {
            console.log("Loading...");
        } else {
            listContext.loadRescues(data);
        }
        // load rescues into globalState
    }, [isLoading, data]);

    return (
        <div>
            <legend className="text-lg font-medium text-gray-900">
                Our Rescues
            </legend>
            <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                {listContext.data.rescues.map((rescue) => (
                    <div
                        className="relative flex items-start py-4"
                        key={rescue._id}
                    >
                        <div className="min-w-0 flex-1 text-sm">
                            <a href={rescue.website} rel="noopener">
                                <label
                                    htmlFor={rescue.name}
                                    className="select-none font-medium text-gray-700"
                                >
                                    {rescue.name}
                                </label>
                            </a>
                        </div>
                        <div className="ml-3 flex h-5 items-center">
                            <input
                                checked={radio === rescue.name}
                                type="radio"
                                value={rescue.name}
                                onChange={(e) => setSelectedRescue(rescue)}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RescueForm;
