import { useState } from "react";
import UserNav from "./bemUserComponents/usersNav";
import AllUsers from "./bemUserComponents/allUsers";

const BemUsers = () => {
    const [currentModule, setCurrentModule] = useState("all");

    return (
        <div>
            <div>
                <UserNav
                    currentModule={currentModule}
                    setCurrentModule={setCurrentModule}
                />
            </div>
            <div>
                {currentModule === "all" && (
                    <div>
                        <AllUsers />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BemUsers;
