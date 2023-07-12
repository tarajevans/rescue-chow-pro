import { Order } from "../../../../models";


const handler = async (req, res) => {
    const result = await Order.findById(req.query.orderId);
    if(!result){
        console.log("ERROR")
    }

    res.status(200).json(result);
};

export default handler;
