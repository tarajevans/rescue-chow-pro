import { useEffect, useState } from "react";
import BemRescueLineItem from "./bemRescueLineItem";

const getPendingRescues = (rescues) => {
    //.active
    let pendingRescues = [];
    if (rescues) {
        pendingRescues = rescues.filter((rescue) => rescue.active === false);
    }

    return pendingRescues;
};

const BemPendingRescues = ({ allRescues, rescueRefetch }) => {
    const [pendingRescues, setPendingRescues] = useState([]);

    useEffect(() => {
        setPendingRescues(getPendingRescues(allRescues));
    }, [allRescues]);

    return (
        <div>
            <div>
                {pendingRescues.length <= 0 ? (
                    <div> No Rescues to display</div>
                ) : (
                    <div>
                        {pendingRescues.map((rescue) => (
                            <div key={rescue._id} className="py-1">
                                <BemRescueLineItem
                                    rescue={rescue}
                                    rescueRefetch={rescueRefetch}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <span></span>
            </div>
        </div>
    );
};

export default BemPendingRescues;
