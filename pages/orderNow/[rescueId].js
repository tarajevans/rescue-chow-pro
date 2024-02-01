import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import CategoryMenu from "../../components/CategoryMenu";
import { idbPromise } from "../../utils/helpers";
import { Rescues } from "../../models";

const OrderNow = ({ rescueData }) => {
    console.log(rescueData);
    const [currentCategory, setCurrentCategory] = useState("all");
    const rescue = JSON.parse(rescueData);

    useEffect( async () => {
        const storedRescue = await idbPromise("selectedRescue", "get");

        if (storedRescue.length) {
            storedRescue.map((rescue) => {
                idbPromise("selectedRescue", "delete", rescue);
            });
        }

        idbPromise("selectedRescue", "put", rescue);
    }, []);

    return (
        <div>
            <div className="w-full pt-32">
                <CategoryMenu setCurrentCategory={setCurrentCategory} />
                <ProductList currentCategory={currentCategory} />
            </div>
        </div>
    );
};

export default OrderNow;

export async function getServerSideProps({ params }) {
    // Fetch data from external API
    const result = await Rescues.findOne({ _id: params.rescueId });
    const rescueData = JSON.stringify(result);

    // Pass data to the page via props
    return { props: { rescueData } };
}
