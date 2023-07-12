import { useState } from "react";
import RescueNav from "./bemRescuesComponents/rescuesNav";


const BemRescues = () => {
    const [currentModule, setCurrentModule] = useState("pending");
    

    return (
        <div>
          <RescueNav
            currentModule={currentModule}
            setCurrentModule={setCurrentModule}
          />
          {currentModule}
        </div>
    );


    return <div> Rescues </div>;
};

export default BemRescues;
