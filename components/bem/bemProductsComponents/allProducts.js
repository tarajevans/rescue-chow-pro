import BemProductsLineItem from "./bemProductsLineItem";



const AllProducts = ({productRefetch, allProducts}) => {

    return (
        <div>
            <div>
                <div>
                    {allProducts.map((prod)=>(
                        <BemProductsLineItem 
                            key={prod._id}
                            product={prod}
                            productRefetch={productRefetch}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts;