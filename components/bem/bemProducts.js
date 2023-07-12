import { useState } from "react";
import ProdNav from "./bemProductsComponents/productsNav";
import AllProducts from "./bemProductsComponents/allProducts";
import NewProduct from "./bemProductsComponents/newProduct";
import LookupProduct from "./bemProductsComponents/lookupProduct";

const BemProducts = () => {
    const [currentModule, setCurrentModule] = useState("all");

    return (
        <div>
            <div>
                <ProdNav
                    currentModule={currentModule}
                    setCurrentModule={setCurrentModule}
                />
            </div>
            <div>
                {currentModule === "all" && (
                    <div>
                        <AllProducts />
                    </div>
                )}
                {currentModule === "new" && (
                    <div>
                        <NewProduct />
                    </div>
                )}
                {currentModule === "lookup" && (
                    <div>
                        <LookupProduct />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BemProducts;