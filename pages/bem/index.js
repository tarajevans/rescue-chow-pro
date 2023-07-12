import { useState } from "react";
import BemNav from "../../components/bem/bemNav";
import BemOrders from "../../components/bem/BemOrders";
import BemProducts from "../../components/bem/bemProducts";
import BemRescues from "../../components/bem/bemRescues";
import BemUsers from "../../components/bem/bemUsers";

const BemPage = () => {
    const [currentModule, setCurrentModule] = useState("orders");

    return (
        <div>
            <div>
                <BemNav
                    currentModule = {currentModule}
                    setCurrentModule = {setCurrentModule}
                />
            </div>
            <div>
                <div>
                    {currentModule === 'orders' && <BemOrders/>}
                </div>
                <div>
                    {currentModule === 'products' && <BemProducts/>}
                </div>
                <div>
                    {currentModule === 'users' && <BemUsers/>}
                </div>
                <div>
                    {currentModule === 'rescues' && <BemRescues/>}
                </div>
            </div>
            
        </div>
    );
};

export default BemPage;
