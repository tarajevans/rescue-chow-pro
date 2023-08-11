import BemRescueLineItem from "./bemRescueLineItem";

const BemAllRescues = ({ allRescues, rescueRefetch }) => {
    return (
        <div>
            <div>
                <div>
                    {allRescues.length <= 0 ? (
                        <div>
                            <span>No Rescues to display</span>
                        </div>
                    ) : (
                        <div>
                            {allRescues.map((rescue) => (
                                <div key={rescue._id} className="py-1">
                                    <BemRescueLineItem
                                        rescue={rescue}
                                        rescueRefetch={rescueRefetch}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BemAllRescues;
