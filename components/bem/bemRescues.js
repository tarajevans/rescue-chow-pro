import { useEffect, useState } from "react";
import RescueNav from "./bemRescuesComponents/rescuesNav";
import BemAllRescues from "./bemRescuesComponents/bemAllRescues";
import BemPendingRescues from "./bemRescuesComponents/bemPendingRescues";
import { useQuery } from "@tanstack/react-query";

const BemRescues = ({ allRescues, rescueRefetch }) => {
    const [currentModule, setCurrentModule] = useState("pending");

    return (
        <div>
            <div>
                <RescueNav
                    currentModule={currentModule}
                    setCurrentModule={setCurrentModule}
                />
            </div>
            <div>
                <div>
                    {currentModule === "pending" && (
                        <div>
                            <BemPendingRescues
                                allRescues={allRescues}
                                rescueRefetch={rescueRefetch}
                            />
                        </div>
                    )}
                </div>
                <div>
                    {currentModule === "all" && (
                        <div>
                            <BemAllRescues allRescues={allRescues} rescueRefetch={rescueRefetch} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return <div> Rescues </div>;
};

export default BemRescues;
