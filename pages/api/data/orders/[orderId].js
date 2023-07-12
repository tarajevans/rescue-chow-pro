import { Order } from "../../../../models";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const result = await Order.findById(req.query.orderId);
        if (!result) {
            console.log("ERROR");
        }

        res.status(200).json(result);
    }

    if (req.method === "POST") {
        const status = req.body;
        const orderId = req.query.orderId
        console.log(status)
        const result = await Order.findByIdAndUpdate(orderId, status);

        if (!result) {
            console.log("ERROR");
        }

        // console.log(result);
    }

    res.status(200).json("HI");
};

export default handler;
