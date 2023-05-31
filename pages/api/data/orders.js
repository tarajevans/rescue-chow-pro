import { Order } from "../../../models";

const handler = async (req, res) => {
    const body = await JSON.parse(req.body);

    console.log(req);
    if (req.method === "POST") {
        const result = await Order.create(body);

        if (!result) {
            console.log("ERROR");
        }
        return res.status(200).json(result);
    }
};

export default handler;
