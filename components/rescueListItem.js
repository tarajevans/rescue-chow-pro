import React, { useContext, useEffect, useState } from "react";

const RescueListItem = ({ website, name, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseOver = () => {
        setShowDescription(true);
    };

    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    return (
        <div
            className="min-w-0 flex-1 text-sm"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <a href={website} rel="noopener">
                <label
                    htmlFor={name}
                    className="select-none font-medium text-gray-700"
                >
                    {name}
                </label>
            </a>

            <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
            ></div>

            {showDescription && (
                <div className="border-2 bg-red-400 border-red-700">
                    {description}
                </div>
            )}
        </div>
    );
};

export default RescueListItem;
