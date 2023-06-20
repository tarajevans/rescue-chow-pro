const OrderDetails = ({ order, productList }) => {
    const products = [];

    const findProduct = (prodId) => {
        let curProd;
        productList.forEach((prod) => {
            if (prod._id === prodId) {
                curProd = prod;
            }
        });
        return curProd;
    };

    const populateProducts = () => {
        const items = order.products;
        if (items.length) {
            items.map((item) => {
                const curProd = findProduct(item.prodId);
                const newProd = { product: curProd, qnty: item.qnty };
                products.push(newProd);
            });
        }
    };
    populateProducts();
    return (
        <div>
            <div>
                <ul>
                    {products.map((product)=> (
                        <div key={product._id}>Qnty:{product.qnty} - {product.product.name}</div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderDetails;
