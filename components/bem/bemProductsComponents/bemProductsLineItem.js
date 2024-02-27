import { useState } from "react";

const BemProductsLineItem = ({ product, productRefetch }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editPrice, setEditPrice] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
    const [editCategory, setEditCategory] = useState(false);
    const [editStatus, setEditStatus] = useState(false);

    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState();

    const handleSaveProduct = async (props) => {
        const result = await fetch("/api/data/products", {
            method: "PUT",
            body: JSON.stringify(props),
        });

        if (!result) {
            return console.log("ERROR SAVING USER");
        }

        productRefetch();
    };

    return (
        <div className="py-1">
            <div className="border-2 border-purple-700 bg-purple-200 rounded">
                <div className="flex flex-row p-1">
                    <div>
                        <input
                            className=" border-2 border-slate-700 bg-slate-300 rounded px-1"
                            type="button"
                            value="Details"
                            onClick={() => setShowDetails(!showDetails)}
                        />
                    </div>
                    <div>
                        <span className="font-bold px-2">Product Id:</span>
                        <span className="pr-6">{product._id}</span>
                    </div>
                    <div>
                        <span>
                            <input
                                className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                type="button"
                                value="Edit"
                                onClick={() => {
                                    setEditName(!editName);
                                }}
                            />
                        </span>
                        <span className="font-bold pr-2 pl-1">
                            Product Name:
                        </span>
                        <span>
                            {!editName ? (
                                <span>
                                    <span className="pr-6">{product.name}</span>
                                </span>
                            ) : (
                                <span className="pr-6">
                                    <span>
                                        <input
                                            type="text"
                                            defaultValue={product.name}
                                            onChange={(e) =>
                                                setProductName(e.target.value)
                                            }
                                        />
                                    </span>
                                    <span className="px-1">
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                            type="button"
                                            value="Save"
                                            onClick={() => {
                                                handleSaveProduct({
                                                    prodId: product._id,
                                                    name: productName,
                                                });
                                                setEditName(false);
                                            }}
                                        />
                                    </span>
                                    <span className="px-1">
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                            type="button"
                                            value="Cancel"
                                            onClick={() => {
                                                setEditName(false);
                                            }}
                                        />
                                    </span>
                                </span>
                            )}
                        </span>
                    </div>
                    <div>
                        <span>
                            <input
                                className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                type="button"
                                value="Edit"
                                onClick={() => {
                                    setEditPrice(!editPrice);
                                }}
                            />
                        </span>
                        <span className="font-bold pr-1 pl-1">Price:</span>
                        {!editPrice ? (
                            <span className="pr-6">
                                <span>${product.price}</span>
                            </span>
                        ) : (
                            <span className="pr-6">
                                <span>
                                    $
                                    <input
                                        className="w-20"
                                        type="number"
                                        defaultValue={product.price}
                                        step="0.01"
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }}
                                    />
                                </span>
                                <span className="px-1">
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                        type="button"
                                        value="Save"
                                        onClick={() => {
                                            handleSaveProduct({
                                                prodId: product._id,
                                                price: price,
                                            });
                                            setEditPrice(false);
                                        }}
                                    />
                                </span>
                                <span className="px-1">
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                        type="button"
                                        value="Cancel"
                                        onClick={() => {
                                            setEditPrice(false);
                                        }}
                                    />
                                </span>
                            </span>
                        )}
                    </div>
                    <div>
                        <span>
                            <input
                                className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                type="button"
                                value="Edit"
                                onClick={() => {
                                    setEditStatus(!editStatus);
                                }}
                            />
                        </span>
                        <span className="font-bold pr-1 pl-1">Status:</span>
                        {!editStatus ? (
                            <span>
                                <span>
                                    {product.isActive && <span>Active</span>}
                                </span>
                                <span>
                                    {!product.isActive && <span>Inactive</span>}
                                </span>
                            </span>
                        ) : (
                            <span>
                                <span>
                                    {/* <input
                                        className="w-20"
                                        type="text"
                                        onChange={(e) => {
                                            setStatus(e.target.value);
                                        }}
                                    /> */}

                                    <select value={status} onChange={(e) => {setStatus(e.target.value)}}>
                                        <option value={true}> Active</option>
                                        <option value={false}>Inactive</option>
                                    </select>
                                </span>
                                <span className="px-1">
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                        type="button"
                                        value="Save"
                                        onClick={() => {
                                            handleSaveProduct({
                                                prodId: product._id,
                                                isActive: status,
                                            });
                                            setEditStatus(false);
                                        }}
                                    />
                                </span>
                                <span className="px-1">
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                        type="button"
                                        value="Cancel"
                                        onClick={() => {
                                            setEditStatus(false);
                                        }}
                                    />
                                </span>
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    {showDetails && (
                        <div>
                            <div>
                                <div className="p-1">
                                    <span>
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                            type="button"
                                            value="Edit"
                                            onClick={() => {
                                                setEditDescription(
                                                    !editDescription
                                                );
                                            }}
                                            size={50}
                                        />
                                    </span>
                                    <span className="font-bold px-2">
                                        Description:
                                    </span>
                                    <span>
                                        {!editDescription ? (
                                            <span className="">
                                                {product.description}
                                            </span>
                                        ) : (
                                            <span>
                                                <span>
                                                    <input
                                                        className=""
                                                        type="text"
                                                        defaultValue={
                                                            product.description
                                                        }
                                                        style={{
                                                            width: "1000px",
                                                        }}
                                                        onChange={(e) => {
                                                            setDescription(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </span>
                                                <span className="px-1">
                                                    <input
                                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                                        type="button"
                                                        value="Save"
                                                        onClick={() => {
                                                            handleSaveProduct({
                                                                prodId: product._id,
                                                                description:
                                                                    description,
                                                            });
                                                            setEditDescription(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                </span>
                                                <span className="px-1">
                                                    <input
                                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                                        type="button"
                                                        value="Cancel"
                                                        onClick={() => {
                                                            setEditDescription(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                </span>
                                            </span>
                                        )}
                                    </span>
                                </div>
                                <div className="p-1">
                                    <span>
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                            type="button"
                                            value="Edit"
                                            onClick={() => {
                                                setEditCategory(!editCategory);
                                            }}
                                        />
                                    </span>
                                    <span className="font-bold px-2">
                                        Category:
                                    </span>
                                    <span>
                                        {!editCategory ? (
                                            <span className="">
                                                {product.category.name}
                                            </span>
                                        ) : (
                                            <span>
                                                <span>
                                                    <input
                                                        className=""
                                                        type="text"
                                                        defaultValue={
                                                            product.category
                                                                .name
                                                        }
                                                        style={{
                                                            width: "500",
                                                        }}
                                                        onChange={(e) => {
                                                            setCategory(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </span>
                                                <span className="px-1">
                                                    <input
                                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                                        type="button"
                                                        value="Save"
                                                        onClick={() => {
                                                            handleSaveProduct({
                                                                prodId: product._id,
                                                                category:
                                                                    category,
                                                            });
                                                            setEditCategory(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                </span>
                                                <span className="px-1">
                                                    <input
                                                        className="border-2 border-slate-700 bg-slate-300 rounded px-1"
                                                        type="button"
                                                        value="Cancel"
                                                        onClick={() => {
                                                            setEditCategory(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                </span>
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BemProductsLineItem;
