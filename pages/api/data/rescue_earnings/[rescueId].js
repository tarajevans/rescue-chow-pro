import { Order } from "../../../../models";

const handler = async (req, res) => {
    // Fetch data from external API
    const result = await Order.find({rescue: req.query.rescueId, paymentStatus: "success"});
    
    res.status(200).json(result);
};

export default handler;