import { Result } from "postcss";
import { useEffect, useRef, useState } from "react";
import BemRescuesAuthUserLineItem from "./bemRescuesAuthUserLineItem";

const BemRescueLineItem = ({ rescue, rescueRefetch }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [editUrl, setEditUrl] = useState(false);
    const [updatedUrl, setUpdatedUrl] = useState("");
    const [editDescription, setEditDescription] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [editAdminUser, setEditAdminUser] = useState(false);
    const [updatedAdminUser, setUpdatedAdminUser] = useState("");
    const [editUsers, setEditUsers] = useState(false);
    const [newAuthUser, setNewAuthUser] = useState("");
    const [addNewUser, setAddNewUser] = useState(false);

    const urlRef = useRef();
    const descriptionRef = useRef();

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleUpdateUrl = async () => {
        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({ rescueId: rescue._id, website: updatedUrl }),
        });

        setEditUrl(!editUrl);
        rescueRefetch();
    };

    const handleUpdateDescription = async () => {
        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({
                rescueId: rescue._id,
                description: updatedDescription,
            }),
        });

        setEditUrl(!editUrl);
        rescueRefetch();
    };

    const handleUpdateAdminUser = async () => {
        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({
                rescueId: rescue._id,
                adminUser: updatedAdminUser,
            }),
        });

        setEditUrl(!editUrl);

        rescueRefetch();
    };
    const toggleEditUrl = () => {
        setEditUrl(!editUrl);
    };

    const handleUrlChange = (e) => {
        setUpdatedUrl(e.target.value);
    };

    const toggleEditDescription = () => {
        setEditDescription(!editDescription);
    };

    const handleAddAuthUser = async () => {
        let users = [];

        if (rescue.authUsers) {
            rescue.authUsers.map((user) => {
                users.push(user._id);
            });
        }

        users.push("64a58a34b8825e1f369a52a1");

        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({
                rescueId: rescue._id,
                authUsers: users,
            }),
        });

        rescueRefetch();
    };

    const handleActivateRescue = async () => {
        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({
                rescueId: rescue._id,
                active: true,
            }),
        });

        rescueRefetch();
    }

    const handleDeactivateRescue = async () => {
        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({
                rescueId: rescue._id,
                active: false,
            }),
        });


        rescueRefetch();
    }

    return (
        <div>
            <div className="bg-yellow-100 rounded overflow-hidden shadow-lg border-2 border-yellow-700">
                <div className="p-2">
                    <span className="px-4">
                        <input
                            className="border-2 border-slate-700 bg-slate-300 px-2 rounded "
                            onClick={toggleDetails}
                            type="button"
                            value="Details"
                        />
                    </span>
                    <span className="font-bold">{rescue.name}</span>
                    <span className="px-8">
                        <span className="font-bold">Status: </span>
                        {rescue.active ? (
                            <span>Active</span>
                        ) : (
                            <span>Inactive</span>
                        )}
                    </span>
                    <span>
                        {rescue.active ? (
                            <input
                                className="border-2 border-slate-700 bg-slate-300 px-2 rounded "
                                onClick={handleDeactivateRescue}
                                type="button"
                                value="Deactivate Rescue"
                            />
                        ) : (
                            <input
                                className="border-2 border-slate-700 bg-slate-300 px-2 rounded "
                                onClick={handleActivateRescue}
                                type="button"
                                value="Activate Rescue"
                            />
                        )}
                    </span>
                </div>
                <div>
                    {showDetails && (
                        <div>
                            <div className="flex flex-row">
                                <div>
                                    {editUrl ? (
                                        <div className="pb-2">
                                            <span className="pl-2 font-bold">
                                                website:{" "}
                                            </span>
                                            <span>
                                                {" "}
                                                <input
                                                    className="border-2 rounded"
                                                    onChange={handleUrlChange}
                                                    ref={urlRef}
                                                    type="text"
                                                    defaultValue={
                                                        rescue.website
                                                    }
                                                />{" "}
                                            </span>
                                            <span className="px-2">
                                                <input
                                                    type="button"
                                                    className="px-2 border-slate-700 rounded border-2 bg-slate-300"
                                                    value="Save"
                                                    onClick={handleUpdateUrl}
                                                />
                                            </span>
                                            <span className="px-2">
                                                <input
                                                    type="button"
                                                    className="px-2 border-slate-700 rounded border-2 bg-slate-300"
                                                    value="Cancel"
                                                    onClick={toggleEditUrl}
                                                />
                                            </span>
                                        </div>
                                    ) : (
                                        <div>
                                            {" "}
                                            <span className="pl-2 font-bold">
                                                website:{" "}
                                            </span>
                                            <span> {rescue.website} </span>
                                            <span className="px-2">
                                                <input
                                                    type="button"
                                                    className="px-2 border-slate-700 rounded border-2 bg-slate-300"
                                                    value="Update URL"
                                                    onClick={toggleEditUrl}
                                                />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                {!editDescription ? (
                                    <div className="flex flex-row">
                                        <div className="">
                                            <span className="px-2 font-bold">
                                                Description:
                                            </span>
                                            <span className="">
                                                {rescue.description}
                                            </span>
                                        </div>
                                        <div className="px-2">
                                            <input
                                                type="button"
                                                value="Update Description"
                                                className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                                onClick={toggleEditDescription}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-row">
                                        <div className="">
                                            <span className="px-2 font-bold">
                                                Description:
                                            </span>
                                            <span className="w-3/4">
                                                <input
                                                    className="border-2 rounded break-normal "
                                                    onChange={(event) => {
                                                        setUpdatedDescription(
                                                            event.target.value
                                                        );
                                                    }}
                                                    ref={descriptionRef}
                                                    type="text"
                                                    defaultValue={
                                                        rescue.description
                                                    }
                                                />
                                            </span>
                                        </div>
                                        <div className="px-2">
                                            <input
                                                type="button"
                                                value="Save"
                                                onClick={
                                                    handleUpdateDescription
                                                }
                                                className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <input
                                                type="button"
                                                value="Cancel"
                                                className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                                onClick={() => {
                                                    setEditDescription(false);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {!editAdminUser ? (
                                    <div className="flex flex-row pb-2">
                                        <div>
                                            <span className="px-2 font-bold">
                                                Admin User:
                                            </span>
                                            <span className="pr-2">
                                                {rescue?.adminUser?.username}
                                            </span>
                                        </div>
                                        <div>
                                            <input
                                                className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                                type="button"
                                                value="Update Admin User"
                                                onClick={() => {
                                                    setEditAdminUser(true);
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-row">
                                        <div>
                                            <span className="px-2 font-bold">
                                                Admin User:
                                            </span>

                                            <input
                                                className="px-2"
                                                type="text"
                                                defaultValue={
                                                    rescue?.adminUser?.username
                                                }
                                                onChange={(event) => {
                                                    setUpdatedAdminUser(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="px-2">
                                            <input
                                                className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                                type="button"
                                                value="Save"
                                                onClick={handleUpdateAdminUser}
                                            />
                                        </div>
                                        <div className="px-2">
                                            <input
                                                className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                                type="button"
                                                value="cancel"
                                                onClick={() => {
                                                    setEditAdminUser(false);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <span className="font-bold px-2">
                                        Users:{" "}
                                    </span>
                                    {rescue.authUsers.length > 0 && (
                                        <div>
                                            {rescue.authUsers.map((user) => (
                                                <div key={user._id} className="">
                                                    <BemRescuesAuthUserLineItem
                                                        user={user}
                                                        rescue={rescue}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <span></span>
                                </div>
                                <div className="pr-2">
                                    {addNewUser && <div>select new user</div>}
                                </div>

                                <div className="pb-2">
                                    <input
                                        type="button"
                                        className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                                        value="Add User"
                                        onClick={handleAddAuthUser}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BemRescueLineItem;
