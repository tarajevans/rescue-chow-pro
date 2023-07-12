

const BemProdLineItem = ({item}) => { // {product: {product model object}, qnty: }



    return(
        <div>
            <div><span className="font-bold">Qnty: </span><span className="pr-4">{item.qnty}</span><span className="font-bold">Item: </span><span>{item.product.name}</span></div>
        </div>
    )
}

export default BemProdLineItem;