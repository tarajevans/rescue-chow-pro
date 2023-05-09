import {Product} from "../../../models/shopping/Product";

const handler = async (req, res) => {
    
    // if (req.method === "POST") {
        const result = await Product.find();
        if(!result){
            console.log("ERROR");
        }
        return res.status(200).json(result);
    // }
};

export default handler;