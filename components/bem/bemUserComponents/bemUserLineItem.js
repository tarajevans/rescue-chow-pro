import { useState } from "react";

const BemUserLineItem = ({ user, userRefetch }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [editUserName, setEditUserName] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const [editRole, setEditRole] = useState(false);
    const [editStripeId, setEditStripeId] = useState(false);
    const [editIsAffiliate, setEditIsAffiliate] = useState(false);
    const [editRescue, setEditRescue] = useState(false);

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [houeseNumber, setHouseNumber] = useState("");
    const [street, setStreet] = useState("");
    const [unitNumber, setUnitNumber] = useState("");
    const [city, setCity] = useState("");
    const [Providence, setProvidence] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [role, setRole] = useState("");
    const [stripeId, setStripeId] = useState("");
    const [isAffiliated, setIsAffiliate] = useState();
    const [rescue, setRescue] = useState("");

    const saveUser = async (props) => {
        const result = await fetch("/api/data/users", {
            method: "PUT",
            body: JSON.stringify(props),
        });

        if(!result){
            return console.log("ERROR SAVING USER")
        }

        userRefetch()
    };

    return (
        <div>
            <div className="border-2 border-blue-700 bg-blue-200">
                <div className="flex flex-row">
                    <div className="p-2">
                        <input
                            type="button"
                            value="Details"
                            className="border-2 border-slate-700 bg-slate-300 px-1"
                            onClick={() => {
                                setShowDetails(!showDetails);
                            }}
                        />
                    </div>
                    <div className="p-2">
                        <span className="font-bold px-2">User Id:</span>
                        <span className="pr-2">{user._id}</span>
                    </div>
                    <div className="p-2">
                        <span>
                            <input
                                className="border-2 border-slate-700 bg-slate-300 px-1"
                                type="button"
                                value="Edit"
                                onClick={() => {
                                    setEditUserName(!editUserName);
                                }}
                            />
                        </span>
                        <span className="font-bold px-1">User Name:</span>
                        <span>
                            {!editUserName ? (
                                <span>{user.username}</span>
                            ) : (
                                <span>
                                    <span>
                                        <input
                                            type="text"
                                            defaultValue={user.username}
                                            onChange={(e) => {
                                                setUserName(e.target.value);
                                            }}
                                        />
                                    </span>
                                    <span className="pl-1">
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 px-1"
                                            type="button"
                                            value="Save"
                                            onClick={() => {
                                                saveUser({
                                                    userId: user._id,
                                                    username: userName,
                                                });

                                                setEditUserName(false)
                                            }}
                                        />
                                    </span>
                                    <span className="pl-1">
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 px-1"
                                            type="button"
                                            value="Cancel"
                                            onClick={() => {
                                                setEditUserName(false);
                                            }}
                                        />
                                    </span>
                                </span>
                            )}
                        </span>
                    </div>
                    <div className="p-2">
                        <span>
                            <input
                                className="border-2 border-slate-700 bg-slate-300 px-1"
                                type="button"
                                value="Edit"
                                onClick={() => {
                                    setEditName(!editName);
                                }}
                            />
                        </span>
                        <span className="font-bold px-1">Name:</span>

                        <span>
                            {!editName ? (
                                <span>
                                    {user.firstName + " " + user.lastName}
                                </span>
                            ) : (
                                <span>
                                    <span>
                                        <label>
                                            <span>First Name:</span>
                                            <input
                                                type="text"
                                                defaultValue={user.firstName}
                                                onChange={(e) => {
                                                    setFirstName(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </label>
                                    </span>
                                    <div className="pl-24">
                                        <label>
                                            <span>Last Name:</span>
                                            <input
                                                type="text"
                                                defaultValue={user.lastName}
                                                onChange={(e) => {
                                                    setLastName(e.target.value);
                                                }}
                                            />
                                        </label>
                                    </div>
                                    <span className="pl-1">
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 px-1"
                                            type="button"
                                            value="Save"
                                            onClick={() => {
                                                saveUser({
                                                    userId: user._id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                });

                                                setEditName(false);
                                            }}
                                        />
                                    </span>
                                    <span className="pl-1">
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 px-1"
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
                </div>
                <div>
                    {showDetails && (
                        <div>
                            <div className="py-1">
                                <span>
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 px-1"
                                        type="button"
                                        value="Edit"
                                        onClick={() => {
                                            setEditEmail(!editEmail);
                                        }}
                                    />
                                </span>
                                <span className="font-bold px-2">Email:</span>
                                <span>
                                    {!editEmail ? (
                                        <span>{user.email}</span>
                                    ) : (
                                        <span>
                                            <span>
                                                <input
                                                    type="text"
                                                    defaultValue={user.email}
                                                    onChange={(e) => {
                                                        setEmail(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Save"
                                                    onClick={() => {
                                                        saveUser({
                                                            userId: user._id,
                                                            email: email,
                                                        });

                                                        setEditEmail(false)
                                                    }}
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Cancel"
                                                    onClick={() => {
                                                        setEditEmail(false);
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="flex flex-row py-1">
                                <div>
                                    <span>
                                        <input
                                            className="border-2 border-slate-700 bg-slate-300 px-1"
                                            type="button"
                                            value="Edit"
                                            onClick={() => {
                                                setEditAddress(!editAddress);
                                            }}
                                        />
                                    </span>
                                    <span className="font-bold px-2">
                                        Address:
                                    </span>
                                </div>

                                <div>
                                    {!editAddress ? (
                                        <div>
                                            <div>
                                                <span>House Number:</span>
                                                <span>{user.addrNumber}</span>
                                            </div>
                                            <div className="p-2">
                                                <span>Street:</span>
                                                <span>{user.addrStreet}</span>
                                            </div>
                                            <div className="p-2">
                                                <span>Unit Number:</span>
                                                <span>{user.addrUnitNumb}</span>
                                            </div>
                                            <div className="p-2">
                                                <span>City:</span>
                                                <span>{user.addrCity}</span>
                                            </div>
                                            <div className="p-2">
                                                <span>Providence:</span>
                                                <span>{user.addrProv}</span>
                                            </div>
                                            <div className="p-2">
                                                <span>Postal Code:</span>
                                                <span>
                                                    {user.addrPostalCode}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div>
                                                <label>
                                                    <span>House Number:</span>
                                                    <span>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                user.addrNumber
                                                            }
                                                            onChange={(e) => {
                                                                setHouseNumber(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="p-2">
                                                <label>
                                                    <span>Street:</span>
                                                    <span>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                user.addrStreet
                                                            }
                                                            onChange={(e) => {
                                                                setStreet(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="p-2">
                                                <label>
                                                    <span>Unit Number:</span>
                                                    <span>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                user.addrUnitNumb
                                                            }
                                                            onChange={(e) => {
                                                                setUnitNumber(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="p-2">
                                                <label>
                                                    <span>City:</span>
                                                    <span>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                user.addrCity
                                                            }
                                                            onChange={(e) => {
                                                                setCity(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="p-2">
                                                <label>
                                                    <span>Providence:</span>
                                                    <span>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                user.addrProv
                                                            }
                                                            onChange={(e) => {
                                                                setProvidence(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="p-2">
                                                <label>
                                                    <span>Postal Code:</span>
                                                    <span>
                                                        <input
                                                            type="text"
                                                            defaultValue={
                                                                user.addrPostalCode
                                                            }
                                                            onChange={(e) => {
                                                                setPostalCode(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="p-2">
                                                <span className="pl-1">
                                                    <input
                                                        className="border-2 border-slate-700 bg-slate-300 px-1"
                                                        type="button"
                                                        value="Save"
                                                        onClick={() => {
                                                            saveUser({
                                                                userId: user._id,
                                                                addrNumber:
                                                                    houeseNumber,
                                                                addrStreet:
                                                                    street,
                                                                addrUnitNumb:
                                                                    unitNumber,
                                                                addrCity: city,
                                                                addrProv:
                                                                    Providence,
                                                                addrPostCode:
                                                                    postalCode,
                                                            });

                                                            setEditAddress(false)
                                                        }}
                                                    />
                                                </span>
                                                <span className="pl-1">
                                                    <input
                                                        className="border-2 border-slate-700 bg-slate-300 px-1"
                                                        type="button"
                                                        value="Cancel"
                                                        onClick={() => {
                                                            setEditAddress(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="py-1">
                                <span>
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 px-1"
                                        type="button"
                                        value="Edit"
                                        onClick={() => {
                                            setEditRole(!editRole);
                                        }}
                                    />
                                </span>
                                <span className="font-bold px-2">Role:</span>
                                <span>
                                    {!editRole ? (
                                        <span>{user.role}</span>
                                    ) : (
                                        <span>
                                            <span>
                                                <input
                                                    type="text"
                                                    defaultValue={user.role}
                                                    onChange={(e) =>
                                                        setRole(e.target.value)
                                                    }
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Save"
                                                    onClick={() => {
                                                        saveUser({
                                                            userId: user._id,
                                                            role: role,
                                                        });

                                                        setEditRole(false)
                                                    }}
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Cancel"
                                                    onClick={() => {
                                                        setEditRole(false);
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="py-1">
                                <span>
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 px-1"
                                        type="button"
                                        value="Edit"
                                        onClick={() => {
                                            setEditStripeId(!editStripeId);
                                        }}
                                    />
                                </span>
                                <span className="font-bold px-2">
                                    Stripe Id:
                                </span>
                                <span>
                                    {!editStripeId ? (
                                        <span>{user.stripeId}</span>
                                    ) : (
                                        <span>
                                            <span>
                                                <input
                                                    type="text"
                                                    defaultValue={user.role}
                                                    onChange={(e) =>
                                                        setStripeId(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Save"
                                                    onClick={() => {
                                                        saveUser({
                                                            userId: user._id,
                                                            stripeId: stripeId,
                                                        });

                                                        setEditStripeId(false)
                                                    }}
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Cancel"
                                                    onClick={() => {
                                                        setEditStripeId(false);
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="py-1">
                                <span>
                                    <input
                                        className="border-2 border-slate-700 bg-slate-300 px-1"
                                        type="button"
                                        value="Edit"
                                        onClick={() => {
                                            setEditIsAffiliate(
                                                !editIsAffiliate
                                            );
                                        }}
                                    />
                                </span>
                                <span className="font-bold px-2">
                                    Is Affiliated:
                                </span>
                                <span>
                                    {!editIsAffiliate ? (
                                        <span>
                                            {user.isAffiliate.toString()}
                                        </span>
                                    ) : (
                                        <span>
                                            <span>
                                                <input
                                                    type="text"
                                                    defaultValue={user.role}
                                                    onChange={(e) =>
                                                        setIsAffiliate(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Save"
                                                    onClick={() => {
                                                        saveUser({
                                                            userId: user._id,
                                                            isAffiliate:
                                                                isAffiliated,
                                                        });

                                                        setEditIsAffiliate(false)
                                                    }}
                                                />
                                            </span>
                                            <span className="pl-1">
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Cancel"
                                                    onClick={() => {
                                                        setEditIsAffiliate(
                                                            false
                                                        );
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div>
                                <div className="flex flex-row">
                                    <div>
                                        <span className="font-bold px-2">
                                            Affiliated Rescue:
                                        </span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <input
                                                    className="border-2 border-slate-700 bg-slate-300 px-1"
                                                    type="button"
                                                    value="Edit"
                                                    onClick={() => {
                                                        setEditRescue(
                                                            !editRescue
                                                        );
                                                    }}
                                                />
                                            </span>
                                            <span className="font-bold px-2">
                                                Rescue Id:
                                            </span>
                                            <span>
                                                {!editRescue ? (
                                                    <span>
                                                        {
                                                            user.affiliateRescue
                                                                ._id
                                                        }
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <span>
                                                            <input
                                                                type="text"
                                                                defaultValue={
                                                                    user.role
                                                                }
                                                                onChange={(e) =>
                                                                    setRescue(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </span>
                                                        <span className="pl-1">
                                                            <input
                                                                className="border-2 border-slate-700 bg-slate-300 px-1"
                                                                type="button"
                                                                value="Save"
                                                                onClick={() => {
                                                                    saveUser({
                                                                        userId: user._id,
                                                                        affiliateRescue:
                                                                            rescue,
                                                                    });

                                                                    setEditRescue(false)
                                                                }}
                                                            />
                                                        </span>
                                                        <span className="pl-1">
                                                            <input
                                                                className="border-2 border-slate-700 bg-slate-300 px-1"
                                                                type="button"
                                                                value="Cancel"
                                                                onClick={() => {
                                                                    setEditRescue(
                                                                        false
                                                                    );
                                                                }}
                                                            />
                                                        </span>
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-bold px-2">
                                                Rescue Name:
                                            </span>
                                            <span>
                                                {user.affiliateRescue.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BemUserLineItem;
