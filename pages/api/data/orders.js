import { Order } from "../../../models";

const handler = async (req, res) => {
    
    if (req.method === "GET") {
        const result = await Order.find();

        if (!result) {
            console.log("ERROR");
        }

        return res.status(200).json(result);
    }

    if (req.method === "POST") {
        const body = await JSON.parse(req.body);
        const result = await Order.create(body);

        if (!result) {
            console.log("ERROR");
        }
        return res.status(200).json(result);
    }
};

export default handler;
