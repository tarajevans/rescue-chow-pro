import { useState } from "react";
import UserNav from "./bemUserComponents/usersNav";
import AllUsers from "./bemUserComponents/allUsers";

const BemUsers = ({ allUsers, userRefetch }) => {
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
                        <AllUsers allUsers={allUsers} userRefetch={userRefetch} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BemUsers;
